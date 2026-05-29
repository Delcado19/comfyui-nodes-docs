#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, 'docs');
const CACHE_FILE = path.join(__dirname, '.cache', 'router-translation-cache.json');
const MANIFEST_FILE = path.join(__dirname, '.cache', 'router-translation-manifest.json');
const OUTPUT_SUFFIX = '_en.md';

const STRUCTURAL_HEADINGS = new Set([
  'documentation',
  'input types',
  'output types',
  'usage tips',
  'source code',
  'required',
  'optional',
]);

const METADATA_PREFIXES = [
  '- Class name:',
  '- Category:',
  '- Output node:',
  '- Repo Ref:',
  '- Comfy dtype:',
  '- Python dtype:',
];

function parseArgs(argv) {
  const args = {
    docsDir: DOCS_DIR,
    outputSuffix: OUTPUT_SUFFIX,
    cacheFile: CACHE_FILE,
    baseUrl: process.env.OPENAI_BASE_URL || process.env.ROUTER_BASE_URL || '',
    apiKey: process.env.OPENAI_API_KEY || process.env.ROUTER_API_KEY || 'local',
    model: process.env.OPENAI_MODEL || process.env.ROUTER_MODEL || '',
    models: splitList(process.env.OPENAI_MODELS || process.env.ROUTER_MODELS || ''),
    manifestFile: MANIFEST_FILE,
    files: [],
    dryRun: false,
    overwrite: false,
    limit: Number.POSITIVE_INFINITY,
    batchSize: 24,
    requestTimeoutMs: 120000,
    retries: 3,
    retryDelayMs: 800,
  };

  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    const next = argv[i + 1];

    if (token === '--dry-run') {
      args.dryRun = true;
    } else if (token === '--overwrite') {
      args.overwrite = true;
    } else if (token === '--docs-dir' && next) {
      args.docsDir = path.resolve(next);
      i++;
    } else if (token === '--cache-file' && next) {
      args.cacheFile = path.resolve(next);
      i++;
    } else if (token === '--base-url' && next) {
      args.baseUrl = next;
      i++;
    } else if (token === '--api-key' && next) {
      args.apiKey = next;
      i++;
    } else if (token === '--model' && next) {
      args.model = next;
      i++;
    } else if (token === '--models' && next) {
      args.models = splitList(next);
      i++;
    } else if (token === '--manifest-file' && next) {
      args.manifestFile = path.resolve(next);
      i++;
    } else if (token === '--files' && next) {
      args.files = splitList(next);
      i++;
    } else if (token === '--files-from' && next) {
      args.files = readFileList(next);
      i++;
    } else if (token === '--limit' && next) {
      args.limit = Number(next);
      i++;
    } else if (token === '--batch-size' && next) {
      args.batchSize = Number(next);
      i++;
    } else if (token === '--request-timeout-ms' && next) {
      args.requestTimeoutMs = Number(next);
      i++;
    } else if (token === '--retries' && next) {
      args.retries = Number(next);
      i++;
    } else if (token === '--retry-delay-ms' && next) {
      args.retryDelayMs = Number(next);
      i++;
    }
  }

  if (args.models.length === 0 && args.model) {
    args.models = [args.model];
  }

  return args;
}

function splitList(value) {
  return String(value || '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function containsCjk(text) {
  return /[\u4e00-\u9fff]/.test(text);
}

function isCodeFence(line) {
  return line.trim().startsWith('```');
}

function shouldPreserveLine(line) {
  const trimmed = line.trim();

  if (!trimmed) return true;
  if (isCodeFence(line)) return true;
  if (METADATA_PREFIXES.some((prefix) => trimmed.startsWith(prefix))) return true;

  if (trimmed.startsWith('#')) {
    const heading = trimmed.replace(/^#+\s*/, '').toLowerCase();
    return !containsCjk(heading) && STRUCTURAL_HEADINGS.has(heading);
  }

  return false;
}

function extractContentJson(text) {
  const trimmed = text.trim();
  if (!trimmed) return null;

  const candidates = [trimmed];
  const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenceMatch) candidates.unshift(fenceMatch[1].trim());

  for (const candidate of candidates) {
    try {
      return JSON.parse(candidate);
    } catch (err) {
      const start = candidate.indexOf('{');
      const end = candidate.lastIndexOf('}');
      if (start !== -1 && end > start) {
        try {
          return JSON.parse(candidate.slice(start, end + 1));
        } catch (innerErr) {
          // Keep trying other candidates.
        }
      }
    }
  }

  return null;
}

function loadCache(cacheFile) {
  try {
    if (!fs.existsSync(cacheFile)) return {};
    return JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  } catch (err) {
    console.warn(`Cache read failed, starting fresh: ${err.message}`);
    return {};
  }
}

function saveCache(cacheFile, cache) {
  fs.mkdirSync(path.dirname(cacheFile), { recursive: true });
  fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2), 'utf8');
}

function loadManifest(manifestFile) {
  try {
    if (!fs.existsSync(manifestFile)) return { files: {} };
    const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
    return manifest && typeof manifest === 'object' && manifest.files ? manifest : { files: {} };
  } catch (err) {
    console.warn(`Manifest read failed, starting fresh: ${err.message}`);
    return { files: {} };
  }
}

function saveManifest(manifestFile, manifest) {
  fs.mkdirSync(path.dirname(manifestFile), { recursive: true });
  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2), 'utf8');
}

function updateManifest(manifest, sourcePath, options, entry) {
  const relativePath = path.relative(options.docsDir, sourcePath).replace(/\\/g, '/');
  manifest.files[relativePath] = {
    ...manifest.files[relativePath],
    ...entry,
    updatedAt: new Date().toISOString(),
  };
}

async function callRouter(baseUrl, apiKey, model, items, requestTimeoutMs) {
  if (!baseUrl) {
    throw new Error('Missing --base-url / OPENAI_BASE_URL / ROUTER_BASE_URL.');
  }
  if (!model) {
    throw new Error('Missing --model / OPENAI_MODEL / ROUTER_MODEL.');
  }

  const payload = {
    model,
    stream: false,
    temperature: 0.2,
    messages: [
      {
        role: 'system',
        content: [
          'Translate Chinese markdown documentation into English.',
          'Return only valid JSON in the form {"translations":[{"id":number,"text":string}]}.',
          'Keep the same item count and ids.',
          'Preserve markdown markers, indentation, URLs, file paths, code spans, and punctuation.',
          'Do not add commentary.',
        ].join(' '),
      },
      {
        role: 'user',
        content: JSON.stringify({ items }),
      },
    ],
  };

  const normalizedBase = baseUrl.replace(/\/$/, '');
  const endpoints = [
    { path: '/chat/completions', parse: parseOpenAIChatResponse },
  ];

  let lastError = null;

  for (const endpoint of endpoints) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (apiKey && apiKey.toLowerCase() !== 'none') {
      headers.Authorization = `Bearer ${apiKey}`;
    }

    const response = await fetch(`${normalizedBase}${endpoint.path}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(requestTimeoutMs),
    });

    if (response.ok) {
      return endpoint.parse(await response.json());
    }

    const body = await response.text();
    const message = `Router request failed at ${endpoint.path}: ${response.status} ${response.statusText}${body ? ` - ${body.slice(0, 300)}` : ''}`;
    if (response.status !== 404 && response.status !== 405) {
      throw new Error(message);
    }

    lastError = new Error(message);
  }

  throw lastError || new Error('Router request failed.');
}

// Retry transient, non-fatal router failures (upstream 500s, empty/garbled
// bodies, timeouts) on the same model with linear backoff. Empirically a free
// model that 500s on one request usually succeeds on the next. Fatal errors
// (auth/quota/429, caught by isFatalRouterError) are not retried so we don't
// hammer a rate-limited provider.
async function callRouterWithRetry(options, model, items, retries) {
  let lastError = null;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await callRouter(options.baseUrl, options.apiKey, model, items, options.requestTimeoutMs);
    } catch (err) {
      lastError = err;
      if (isFatalRouterError(err)) throw err;
      if (attempt < retries) {
        await sleep(options.retryDelayMs * (attempt + 1));
      }
    }
  }
  throw lastError || new Error('Router request failed after retries.');
}

function parseOpenAIChatResponse(data) {
  // 9router can return HTTP 200 while embedding an upstream provider error
  // (e.g. a transient 500) in the body with no choices. Surface it as a clear,
  // retryable error so callRouterWithRetry tries again. A 429/quota message is
  // recognised as fatal by isFatalRouterError and will not be retried.
  if (data && data.error && !Array.isArray(data.choices)) {
    const e = data.error;
    throw new Error(`Router returned an upstream error: ${e.message || JSON.stringify(e)}${e.code ? ` (code ${e.code})` : ''}`);
  }

  const content = data?.choices?.[0]?.message?.content ?? '';
  const parsed = extractContentJson(content);
  if (!parsed || !Array.isArray(parsed.translations)) {
    throw new Error('Router response was not valid JSON with a translations array.');
  }

  return parsed.translations;
}

function buildLinePlan(content) {
  const lines = content.split(/\r?\n/);
  const plan = [];
  let inFence = false;

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];

    if (isCodeFence(line)) {
      inFence = !inFence;
      plan.push({ type: 'keep', text: line });
      continue;
    }

    if (inFence || shouldPreserveLine(line) || !containsCjk(line)) {
      plan.push({ type: 'keep', text: line });
      continue;
    }

    plan.push({ type: 'translate', text: line });
  }

  return plan;
}

async function translatePlan(plan, options, cache, model) {
  const output = plan.map((entry) => entry.text);
  const translatable = [];

  for (let i = 0; i < plan.length; i++) {
    const entry = plan[i];
    if (entry.type !== 'translate') continue;

    const cached = cache[entry.text];
    if (cached) {
      output[i] = cached;
      continue;
    }

    translatable.push({ index: i, text: entry.text });
  }

  for (let i = 0; i < translatable.length; i += options.batchSize) {
    const batch = translatable.slice(i, i + options.batchSize);
    const items = batch.map((entry, batchIndex) => ({
      id: batchIndex,
      text: entry.text,
    }));

    const translations = await callRouterWithRetry(options, model, items, options.retries);
    const byId = new Map();
    for (const item of translations) {
      if (item && typeof item === 'object') {
        byId.set(Number(item.id), item.text ?? '');
      }
    }

    for (const [batchIndex, entry] of batch.entries()) {
      const translated = byId.get(batchIndex);
      if (typeof translated === 'string' && translated.length > 0) {
        output[entry.index] = translated;
        cache[entry.text] = translated;
      } else {
        output[entry.index] = entry.text;
      }
    }
  }

  return output.join('\n');
}

function listMarkdownFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md') && !file.endsWith(OUTPUT_SUFFIX))
    .sort()
    .map((file) => path.join(dir, file));
}

function readFileList(filePath) {
  try {
    return fs.readFileSync(path.resolve(filePath), 'utf8')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  } catch (err) {
    console.warn(`Could not read --files-from ${filePath}: ${err.message}`);
    return [];
  }
}

// Resolve an explicit, ordered list of doc names (from --files/--files-from) to
// full source paths, preserving order so priority lists translate first. Lets us
// translate the nodes actually used in workflows before the long alphabetical tail.
function resolveExplicitFiles(names, options) {
  const resolved = [];
  for (const name of names) {
    const base = name.endsWith('.md') ? name : name + '.md';
    if (base.endsWith(OUTPUT_SUFFIX)) continue; // never translate an *_en.md file
    const full = path.isAbsolute(base) ? base : path.join(options.docsDir, base);
    if (fs.existsSync(full)) {
      resolved.push(full);
    } else {
      console.warn(`Skipping missing source doc: ${base}`);
    }
  }
  return resolved;
}

function getOutputPath(sourcePath, options) {
  return sourcePath.replace(/\.md$/i, options.outputSuffix);
}

function fileNeedsProcessing(sourcePath, options) {
  if (options.overwrite) return true;

  const outputPath = getOutputPath(sourcePath, options);
  if (!fs.existsSync(outputPath)) return true;

  const sourceStat = fs.statSync(sourcePath);
  const outputStat = fs.statSync(outputPath);
  return outputStat.mtimeMs < sourceStat.mtimeMs;
}

function selectFilesForRun(files, options) {
  const selected = [];
  const limit = Number.isFinite(options.limit) ? options.limit : Number.POSITIVE_INFINITY;

  for (const file of files) {
    if (!fileNeedsProcessing(file, options)) continue;
    selected.push(file);
    if (selected.length >= limit) break;
  }

  return selected;
}

// Map internal status keys to clearer console labels. The stored manifest keeps
// the original keys (e.g. 'copied') for stability; only the display changes.
// 'copied' means the source had no translatable (CJK) lines, so it was written
// out verbatim rather than sent to the router.
function displayStatus(status) {
  switch (status) {
    case 'copied':
      return 'no translation needed';
    case 'would-copy':
      return 'would skip (no translation needed)';
    default:
      return status;
  }
}

// Count how many source docs already have an *_en.md output on disk, used for an
// overall "translated / total" coverage indicator. Includes verbatim-copied docs,
// since they too now have an English-side file.
function countTranslatedDocs(files, options) {
  let done = 0;
  for (const file of files) {
    if (fs.existsSync(getOutputPath(file, options))) done++;
  }
  return done;
}

async function processFile(sourcePath, options, cache, model) {
  const outputPath = getOutputPath(sourcePath, options);
  // Keep source docs immutable: translations are always written beside them as *_en.md.
  if (path.resolve(outputPath) === path.resolve(sourcePath)) {
    throw new Error(`Refusing to overwrite source document: ${sourcePath}`);
  }

  const sourceStat = fs.statSync(sourcePath);

  if (!options.overwrite && fs.existsSync(outputPath)) {
    const outputStat = fs.statSync(outputPath);
    if (outputStat.mtimeMs >= sourceStat.mtimeMs) {
      return { status: 'skipped-current' };
    }
  }

  const content = fs.readFileSync(sourcePath, 'utf8');
  const plan = buildLinePlan(content);
  const needsTranslation = plan.some((entry) => entry.type === 'translate');

  if (options.dryRun) {
    return {
      status: needsTranslation ? 'would-translate' : 'would-copy',
      translatedLines: plan.filter((entry) => entry.type === 'translate').length,
    };
  }

  const translated = needsTranslation
    ? await translatePlan(plan, options, cache, model)
    : content;

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, translated, 'utf8');
  return {
    status: needsTranslation ? 'translated' : 'copied',
    translatedLines: plan.filter((entry) => entry.type === 'translate').length,
  };
}

function isFatalRouterError(err) {
  const message = String(err?.message || err);
  return [
    '401',
    '403',
    '429',
    'RESOURCE_EXHAUSTED',
    'quota',
    'modelLocked',
    'No available',
  ].some((needle) => message.includes(needle));
}

async function processFileWithModelFallback(sourcePath, options, cache, fileIndex) {
  const models = options.models.length > 0 ? options.models : [options.model].filter(Boolean);
  if (options.dryRun && models.length === 0) {
    const result = await processFile(sourcePath, options, cache, 'dry-run');
    return { ...result, model: null };
  }

  if (models.length === 0) {
    throw new Error('Missing --model / --models / OPENAI_MODEL / OPENAI_MODELS.');
  }

  const errors = [];
  for (let offset = 0; offset < models.length; offset++) {
    const model = models[(fileIndex + offset) % models.length];
    try {
      const result = await processFile(sourcePath, options, cache, model);
      return { ...result, model };
    } catch (err) {
      errors.push(`${model}: ${err.message}`);
      if (!isFatalRouterError(err)) {
        throw err;
      }
    }
  }

  throw new Error(`All models failed for ${path.basename(sourcePath)}: ${errors.join(' | ')}`);
}

async function main() {
  const options = parseArgs(process.argv);
  const allFiles = options.files.length > 0
    ? resolveExplicitFiles(options.files, options)
    : listMarkdownFiles(options.docsDir);
  const files = selectFilesForRun(allFiles, options);
  const cache = loadCache(options.cacheFile);
  const manifest = loadManifest(options.manifestFile);

  let translated = 0;
  let copied = 0;
  let skipped = 0;

  console.log(`Scanning ${allFiles.length} markdown files in ${options.docsDir}`);
  console.log(`Selected ${files.length} file${files.length === 1 ? '' : 's'} needing processing${Number.isFinite(options.limit) ? ` (limit ${options.limit})` : ''}.`);
  console.log(`Already translated: ${countTranslatedDocs(allFiles, options)}/${allFiles.length} docs.`);
  if (options.models.length > 1) {
    console.log(`Model rotation: ${options.models.join(', ')}`);
  }
  if (options.dryRun) {
    console.log('Dry run mode is enabled; no files will be written.');
  }

  for (let index = 0; index < files.length; index++) {
    const sourcePath = files[index];
    const name = path.basename(sourcePath);
    process.stdout.write(`[${index + 1}/${files.length}] ${name} ... `);

    try {
      if (!options.dryRun) {
        updateManifest(manifest, sourcePath, options, { status: 'running' });
        saveManifest(options.manifestFile, manifest);
      }

      const result = await processFileWithModelFallback(sourcePath, options, cache, index);
      if (result.status === 'translated') translated++;
      else if (result.status === 'copied') copied++;
      else if (result.status === 'skipped-current') skipped++;

      if (!options.dryRun) {
        updateManifest(manifest, sourcePath, options, {
          status: result.status,
          model: result.model,
          translatedLines: result.translatedLines || 0,
        });
        saveManifest(options.manifestFile, manifest);
      }

      // Suppress "via <model>" for copied docs: no model ran on them.
      const showModel = result.model && result.status !== 'copied' && result.status !== 'would-copy';
      console.log(`${displayStatus(result.status)}${showModel ? ` via ${result.model}` : ''}${result.translatedLines ? ` (${result.translatedLines} lines)` : ''}`);
    } catch (err) {
      skipped++;
      console.log(`error: ${err.message}`);
      if (!options.dryRun) {
        updateManifest(manifest, sourcePath, options, {
          status: 'error',
          error: err.message,
        });
        saveManifest(options.manifestFile, manifest);
      }
      if (isFatalRouterError(err)) {
        console.log('Stopping because the router/provider error is not file-specific.');
        process.exitCode = 1;
        break;
      }
    }
  }

  if (!options.dryRun) {
    saveCache(options.cacheFile, cache);
  }

  console.log('');
  console.log(`Translated this run: ${translated}`);
  console.log(`No translation needed: ${copied}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Total translated: ${countTranslatedDocs(allFiles, options)}/${allFiles.length} docs`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
