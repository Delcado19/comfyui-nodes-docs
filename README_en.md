# comfyUI Nodes Documentation

----

[中文文档](README.md) ｜ English Document

This is a plugin for displaying documentation for each comfyui node.

![example1](examples/2.png)

## Installation

### comfyUI Manager

search `comfyui-nodes-docs` in the comfyUI manager and install it.

### Custom Installation

- Open the cmd window in the plugin directory of ComfyUI, like "ComfyUI\custom_nodes"，type `git clone https://github.com/CavinHuang/comfyui-nodes-docs` or download the zip file and extracted, copy the resulting folder to ComfyUI\custom_ Nodes\

- Restart ComfyUI

## [Node Lists](nodesList.md)

## English documentation

This fork ships English translations of every node doc alongside the original Chinese. Which language you see follows ComfyUI's existing **`Comfy.Locale`** setting — there is no separate switch:

- `zh*` locales → the original Chinese doc (`docs/<NodeType>.md`)
- any other locale → the English translation (`docs/<NodeType>_en.md`)
- if a translation is missing, the server falls back to the Chinese source, so every node stays documented (zero regression)

The Chinese sources are left untouched; English lives in parallel `*_en.md` files. All ~3553 node docs have an English translation (a machine-translated first pass — improvements welcome). The feature touches only two code files — `server/request.py` (language-aware doc lookup) and `web/comfyui/creatDocsElement.js` (reads `Comfy.Locale` and localizes the doc panel); everything else is additive `*_en.md`.

## Source code links

In the English docs, the embedded source-code snippet that used to sit under each `# Source code` heading has been replaced with a link to the node pack's GitHub repository (see `retrofit_source_block.js`). Embedded snippets go stale on every pack update, whereas a repository link stays current and keeps the docs lean. 2515 English docs link to their repo; docs whose metadata carries no `Repo Ref:` keep their embedded source (there is nothing to link to). Chinese sources are unchanged.

## Translation workflow

If you want to batch-translate the Markdown docs under `docs/` into English, point the translator at any OpenAI-compatible chat endpoint via environment variables.

```powershell
$env:OPENAI_BASE_URL = "https://your-endpoint/v1"
$env:OPENAI_API_KEY  = "your-key"
$env:OPENAI_MODEL    = "your-model"
npm run translate:docs
```

The script writes a matching `_en.md` file for each source document, preserves code blocks, metadata lines, and Markdown structure, and supports caching plus resume-friendly reruns. It works with any OpenAI-compatible endpoint — set `OPENAI_BASE_URL`, `OPENAI_API_KEY`, and `OPENAI_MODEL` to your provider; pick a model suited to your own quota.

The `--limit` value counts files that still need processing, so `--limit 50` translates the next 50 missing or stale `_en.md` outputs (rather than scanning the first 50 source files). Progress is written to `.cache/router-translation-manifest.json` after each file, so interrupted runs resume. `OPENAI_MODELS` (comma-separated) rotates across several models; existing up-to-date `_en.md` files are skipped unless `--overwrite` is passed.

```powershell
# translate the next 50 missing/stale docs
npm run translate:docs -- --limit 50
```

For a small trial run, generate `_en.md` for selected docs into `_test_docs/` only:

```powershell
npm run translate:test -- --files "AddLabel.md,AddNoise.md,ACN_AdvancedControlNetApply.md,ADE_AnimateDiffLoaderWithContext.md"
```

## Development

### Two aspects:

- Participate in the maintenance of the plugin, fix issues, improve the user experience, optimize the code

- Participate in the construction of node documentation, add node documentation that has not yet been included, modify incorrect parts in existing node documentation, or document lagging issues caused by plugin upgrades.

### Participation method:

- Fork the repo to your own github account
- Create a new branch for your changes and make the changes
- Create a pull request to the main repo
- After review, your changes will be merged into the main branch and released to the public.

### Add a new node docs

- Create a Markdown file named after the `node type` in the 'docs' folder, such as `CLIPMergeSimple.md`
- Add the following structure to the file, please refer to specific examples[CLIPMergeSimple.md](docs/CLIPMergeSimple.md) for details.:

<pre><code>
# Documentation
- Class name: Node name
- Category: Node category
- Output node: False
- Repo Ref: https://github.com/xxxx

Description of nodes

# Input types

Node input types

# Output types

Node output types

# Usage tips
- Infra type: GPU

# Source code

Node source code
</code></pre>

