#!/usr/bin/env node
// Rewrites the "# Source code" block in every docs/<node>_en.md
// from an embedded Python class block to a GitHub code-search link.
// Rationale: the Chinese upstream embeds the source verbatim (a snapshot
// that goes stale on every pack update), but most readers don't read code.
// A live link to the pack's GitHub via its `Repo Ref:` stays current and
// keeps docs lean. CN sources are intentionally left untouched so the
// `zh` locale view continues to mirror the upstream repo as-received.

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, 'docs');
const SUFFIX = '_en.md';

function parseArgs(argv) {
  const args = { apply: false, docsDir: DOCS_DIR, sample: 3 };
  for (let i = 2; i < argv.length; i++) {
    const t = argv[i];
    if (t === '--apply') args.apply = true;
    else if (t === '--docs-dir' && argv[i + 1]) { args.docsDir = path.resolve(argv[++i]); }
    else if (t === '--sample' && argv[i + 1]) { args.sample = parseInt(argv[++i], 10) || 0; }
    else if (t === '--help' || t === '-h') {
      console.log('Usage: node retrofit_source_block.js [--apply] [--docs-dir <path>] [--sample N]');
      console.log('Default is dry-run (no files written). Pass --apply to write.');
      process.exit(0);
    }
  }
  return args;
}

// Repo root only — code-search URLs were rejected as noisy (the search term
// matches at many call sites in addition to the class definition).
function buildRepoUrl(repoRef) {
  return repoRef.trim().replace(/\.git$/i, '');
}

function newSourceBlock(repoRef, heading) {
  const url = buildRepoUrl(repoRef);
  // Preserve the original heading level (some docs use `# Source code`, others
  // `## Source code`); only the embedded code below it is replaced.
  return `${heading}
[View source repository on GitHub](${url})

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
`;
}

function retrofitFile(text) {
  // Match the "Source code" heading at any ATX level (#..######). The upstream
  // docs are inconsistent: ~57% use `# Source code`, the rest `## Source code`.
  // The original single-`#` pattern silently skipped ~1465 H2 docs, leaving
  // their embedded source in place — match any level and keep it.
  const srcMatch = text.match(/^#{1,6} Source code\s*$/m);
  if (!srcMatch) return { changed: false, reason: 'no-source-block' };
  const refMatch = text.match(/^-\s*Repo Ref:\s*(.+)$/m);
  if (!refMatch) return { changed: false, reason: 'no-repo-ref' };

  // Preserve a single blank line between the previous block and the new heading.
  const before = text.slice(0, srcMatch.index).replace(/\s*$/, '\n\n');
  const heading = srcMatch[0].replace(/\s*$/, '');
  const block = newSourceBlock(refMatch[1], heading);
  return { changed: true, output: before + block, repoRef: refMatch[1].trim() };
}

function unifiedDiffPreview(file, before, after) {
  const b = before.split('\n');
  const a = after.split('\n');
  // crude diff: show lines from last common point to EOF
  let lcp = 0;
  while (lcp < b.length && lcp < a.length && b[lcp] === a[lcp]) lcp++;
  const beforeTail = b.slice(Math.max(0, lcp - 1)).join('\n');
  const afterTail = a.slice(Math.max(0, lcp - 1)).join('\n');
  return `--- ${file} (before, from line ${Math.max(1, lcp)}) ---\n${beforeTail}\n--- ${file} (after) ---\n${afterTail}\n`;
}

function main() {
  const args = parseArgs(process.argv);
  const files = fs.readdirSync(args.docsDir).filter(f => f.endsWith(SUFFIX)).sort();

  let scanned = 0, retrofitted = 0, skippedNoSrc = 0, skippedNoRef = 0;
  const samples = [];

  for (const f of files) {
    scanned++;
    const full = path.join(args.docsDir, f);
    const text = fs.readFileSync(full, 'utf8');
    const r = retrofitFile(text);
    if (!r.changed) {
      if (r.reason === 'no-source-block') skippedNoSrc++;
      else if (r.reason === 'no-repo-ref') skippedNoRef++;
      continue;
    }
    retrofitted++;
    if (samples.length < args.sample) samples.push({ file: f, before: text, after: r.output });
    if (args.apply) fs.writeFileSync(full, r.output, 'utf8');
  }

  console.log(`Scanned: ${scanned}`);
  console.log(`Retrofitted: ${retrofitted}${args.apply ? ' (written)' : ' (dry-run, no files written)'}`);
  console.log(`Skipped — no source block: ${skippedNoSrc}`);
  console.log(`Skipped — no Repo Ref: ${skippedNoRef}`);

  if (!args.apply && samples.length) {
    console.log('\n=== sample diffs ===');
    for (const s of samples) console.log(unifiedDiffPreview(s.file, s.before, s.after));
    console.log('Run with --apply to write changes.');
  }
}

main();
