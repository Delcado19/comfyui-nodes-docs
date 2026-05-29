const fs = require('fs/promises');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT_DIR = __dirname;
const DEFAULT_SOURCE_DIR = path.join(ROOT_DIR, 'docs');
const DEFAULT_TEST_DIR = path.join(ROOT_DIR, '_test_docs');
const DEFAULT_CACHE_FILE = path.join(ROOT_DIR, '.cache', 'router-translation-cache.test.json');
const DEFAULT_TRANSLATOR = path.join(ROOT_DIR, 'translate_with_router.js');
const DEFAULT_COUNT = 5;
const DEFAULT_ROUTER_URL = process.env.ROUTER_BASE_URL || process.env.OPENAI_BASE_URL || 'http://localhost:20128/v1';
const DEFAULT_ROUTER_API_KEY = process.env.ROUTER_API_KEY || process.env.OPENAI_API_KEY || 'local';
const DEFAULT_ROUTER_MODEL = process.env.ROUTER_MODEL || process.env.OPENAI_MODEL || 'free-translation';
const DEFAULT_ROUTER_MODELS = process.env.ROUTER_MODELS || process.env.OPENAI_MODELS || '';
const CJK_REGEX = /[\u4e00-\u9fff]/;
const SKIP_DIRS = new Set(['.git', 'node_modules', '.next', 'dist', 'build', 'out', '_test_docs']);

function parseArgs(argv) {
  const args = {
    sourceDir: DEFAULT_SOURCE_DIR,
    testDir: DEFAULT_TEST_DIR,
    cacheFile: DEFAULT_CACHE_FILE,
    translator: DEFAULT_TRANSLATOR,
    count: DEFAULT_COUNT,
    files: [],
    models: DEFAULT_ROUTER_MODELS,
  };

  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    const next = argv[i + 1];

    if (token === '--source-dir' && next) {
      args.sourceDir = path.resolve(next);
      i++;
    } else if (token === '--test-dir' && next) {
      args.testDir = path.resolve(next);
      i++;
    } else if (token === '--cache-file' && next) {
      args.cacheFile = path.resolve(next);
      i++;
    } else if (token === '--translator' && next) {
      args.translator = path.resolve(next);
      i++;
    } else if (token === '--count' && next) {
      args.count = Number(next);
      i++;
    } else if (token === '--files' && next) {
      args.files = next.split(',').map((file) => file.trim()).filter(Boolean);
      i++;
    } else if (token === '--models' && next) {
      args.models = next;
      i++;
    }
  }

  if (args.files.length === 0 && (!Number.isInteger(args.count) || args.count < 1)) {
    throw new Error('--count must be a positive integer');
  }

  return args;
}

async function walkMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      files.push(...await walkMarkdownFiles(full));
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith('.md') && !entry.name.toLowerCase().endsWith('_en.md')) {
      files.push(full);
    }
  }

  return files;
}

function hasCjk(text) {
  return CJK_REGEX.test(text);
}

async function chooseTestFiles(files, count) {
  const selected = [];
  const fallback = [];

  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    fallback.push(file);

    if (hasCjk(content) && selected.length < count) {
      selected.push(file);
    }

    if (selected.length >= count) break;
  }

  if (selected.length < count) {
    for (const file of fallback) {
      if (!selected.includes(file)) selected.push(file);
      if (selected.length >= count) break;
    }
  }

  if (selected.length < count) {
    throw new Error(`Only found ${selected.length} markdown files, but ${count} were requested.`);
  }

  return selected.slice(0, count);
}

async function resolveRequestedFiles(sourceDir, requestedFiles) {
  const resolved = [];

  for (const file of requestedFiles) {
    const full = path.resolve(sourceDir, file);
    const rel = path.relative(sourceDir, full);
    // Keep ad hoc test selection inside docs/ so the runner cannot copy arbitrary files.
    if (rel.startsWith('..') || path.isAbsolute(rel)) {
      throw new Error(`Requested file is outside source dir: ${file}`);
    }
    if (!full.toLowerCase().endsWith('.md') || full.toLowerCase().endsWith('_en.md')) {
      throw new Error(`Requested file must be a source markdown document: ${file}`);
    }

    await fs.access(full);
    resolved.push(full);
  }

  return resolved;
}

async function ensureCleanDir(dir) {
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir, { recursive: true });
}

async function copySelectedFiles(selectedFiles, sourceDir, testDir) {
  for (const file of selectedFiles) {
    const rel = path.relative(sourceDir, file);
    const dest = path.join(testDir, rel);
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(file, dest);
  }
}

async function main() {
  const args = parseArgs(process.argv);
  const sourceDir = path.resolve(args.sourceDir);
  const testDir = path.resolve(args.testDir);
  const cacheFile = path.resolve(args.cacheFile);
  const translator = path.resolve(args.translator);

  const files = await walkMarkdownFiles(sourceDir);
  const selected = args.files.length > 0
    ? await resolveRequestedFiles(sourceDir, args.files)
    : await chooseTestFiles(files, args.count);

  if (selected.length === 0) {
    throw new Error(`No markdown files selected from ${sourceDir}`);
  }

  await ensureCleanDir(testDir);
  await copySelectedFiles(selected, sourceDir, testDir);

  console.log('Selected test files:');
  for (const file of selected) {
    console.log(` - ${path.relative(sourceDir, file)}`);
  }
  console.log(`\nTest input : ${testDir}`);
  console.log(`Test cache  : ${cacheFile}`);
  console.log(`Translator  : ${translator}`);
  console.log(`Router URL  : ${DEFAULT_ROUTER_URL}`);
  console.log(`Router Model: ${DEFAULT_ROUTER_MODEL}`);
  if (args.models) {
    console.log(`Router Models: ${args.models}`);
  }
  console.log(`Count       : ${selected.length}\n`);

  const childEnv = {
    ...process.env,
    ROUTER_BASE_URL: DEFAULT_ROUTER_URL,
    OPENAI_BASE_URL: DEFAULT_ROUTER_URL,
    ROUTER_API_KEY: DEFAULT_ROUTER_API_KEY,
    OPENAI_API_KEY: DEFAULT_ROUTER_API_KEY,
    ROUTER_MODEL: DEFAULT_ROUTER_MODEL,
    OPENAI_MODEL: DEFAULT_ROUTER_MODEL,
  };

  const translatorArgs = [
    translator,
    '--docs-dir', testDir,
    '--cache-file', cacheFile,
    '--base-url', DEFAULT_ROUTER_URL,
    '--api-key', DEFAULT_ROUTER_API_KEY,
    '--model', DEFAULT_ROUTER_MODEL,
    '--limit', String(selected.length),
    '--overwrite',
  ];

  if (args.models) {
    translatorArgs.push('--models', args.models);
  }

  const result = spawnSync(process.execPath, translatorArgs, {
    stdio: 'inherit',
    env: childEnv,
  });

  if (result.error) {
    throw result.error;
  }

  process.exit(result.status ?? 0);
}

main().catch((err) => {
  console.error(`Test run failed: ${err.message}`);
  process.exit(1);
});

