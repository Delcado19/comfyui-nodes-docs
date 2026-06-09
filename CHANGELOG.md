# Changelog

All notable changes to this fork are documented here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/). The Chinese source docs are
left untouched; all changes below are additive or English-only.

## [Unreleased]

### Added
- **English documentation for every node.** Parallel `*_en.md` files for all
  ~3553 node docs (a machine-translated first pass). The original Chinese docs
  are unchanged.
- **Language-aware doc serving.** Doc language now follows ComfyUI's existing
  `Comfy.Locale` setting instead of a dedicated switch:
  - `zh*` locales serve the Chinese source (`docs/<NodeType>.md`);
  - every other locale serves the English translation (`docs/<NodeType>_en.md`);
  - a missing translation falls back to the Chinese source, so every node stays
    documented and callers that predate the `lang` parameter are unaffected.
  Implemented in `server/request.py` (language-aware lookup, `lang` query/body
  parameter, and a guard so English edits are never co-built into the Chinese
  cloud DB) and `web/comfyui/creatDocsElement.js` (reads `Comfy.Locale`, passes
  `lang` to the doc endpoints, and localizes the doc-panel labels).
- **Translation & doc-generation tooling** (batch translator, trial-run helper,
  source-block retrofit, and an `/object_info` doc generator) lives in a
  separate companion repo, `comfyui-nodes-docs-tools`, kept out of this plugin
  so it stays lean. Its scripts read `docs/` from this repo via `COMFY_DOCS_DIR`
  (defaulting to the sibling checkout).

### Changed
- **Source-code blocks in English docs are now repository links.** The embedded
  Python snippet under each `Source code` heading (`#` or `##`) is replaced with
  a link to the node pack's GitHub repository, derived from the doc's
  `Repo Ref:` metadata. 2515 English docs were converted; docs without a
  `Repo Ref:` keep their embedded source (no repository to link to). Live links
  stay current as packs evolve and keep the docs lean. Chinese sources are not
  modified.

### Notes
- Link targets are only as accurate as the upstream `Repo Ref:` metadata, which
  is occasionally incorrect (some third-party nodes are attributed to the base
  ComfyUI repository). This is inherited upstream data and may be refined later.
- The translation cache, manifest, and trial-run output are produced by the
  companion `comfyui-nodes-docs-tools` repo and gitignored there, not here.
