# Changelog

All notable changes to this fork are documented here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/). The Chinese source docs are
left untouched; all changes below are additive or English-only.

## [Unreleased]

## [1.2.1] - 2026-08-16

### Fixed
- **Doc icon overlapped ComfyUI's title-bar corner button.** The 📄 doc icon
  sat flush in the node's top-right title-bar corner, on top of ComfyUI's own
  "convert to subgraph" button. Moved 34px left of the edge, still inside the
  title bar (not the node body, where the first output slot sits on most
  nodes).

## [1.2.0] - 2026-08-16

### Added
- **Expanded English documentation from a live ComfyUI install.** Parallel
  `*_en.md` files now cover 5800+ node docs. The original Chinese docs are
  unchanged; newly added English docs use live `/object_info` metadata plus
  Comfy Registry or installed-repo links where available.
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
  a link to the node pack's repository, derived from the doc's `Repo Ref:`
  metadata. Live links stay current as packs evolve and keep the docs lean.
  Chinese sources are not modified.

### Notes
- Link targets are only as accurate as the upstream `Repo Ref:` metadata, which
  is occasionally incorrect (some third-party nodes are attributed to the base
  ComfyUI repository). This is inherited upstream data and may be refined later.
- The translation cache, manifest, and trial-run output are produced by the
  companion `comfyui-nodes-docs-tools` repo and gitignored there, not here.
