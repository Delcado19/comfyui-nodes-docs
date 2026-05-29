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

## Translation workflow

If you want to batch-translate the Markdown docs under `docs/` into English, use the local `9router` OpenAI-compatible endpoint.

```powershell
$env:OPENAI_BASE_URL = "http://127.0.0.1:20128/v1"
$env:OPENAI_API_KEY = "local"
$env:OPENAI_MODEL = "free-translation"
npm run translate:docs
```

The script writes a matching `_en.md` file for each source document, preserves code blocks, metadata lines, and Markdown structure, and supports caching plus resume-friendly reruns.

9router models that produced at least one complete local translation run:

- `kr/claude-haiku-4.5`
- `kr/qwen3-coder-next`
- `kr/glm-5`
- `kr/deepseek-3.2`
- `cc/claude-haiku-4-5-20251001`

Free models that have worked in later 9router tests and are better candidates for a no-paid-quota translation combo:

- `oc/deepseek-v4-flash-free`
- `openrouter/openrouter/owl-alpha`
- `openrouter/nvidia/nemotron-3-nano-30b-a3b:free`
- `openrouter/poolside/laguna-m.1:free`
- `openrouter/openrouter/free`

Models/providers that are currently not good default free translation routes: `cc/*` and `cx/*` consume Claude Code/Codex quota, `kc/*` free models can work directly but are not currently usable in the 9router combo, paid `kc/*` models return credits required, `gemini/gemini-2.0-flash-lite` returns Free-Tier quota `0`, `gc/gemini-3-*` returns 401/404 through `gemini-cli`, `nvidia/z-ai/glm4.7` is EOL, `nvidia/minimaxai/minimax-m2.7` timed out in testing, and `kr/*` currently returns 403 through Kiro account restriction.

For larger trials, start with about 50 files before moving to 100+. The `--limit` value counts files that still need processing, so `--limit 50` translates the next 50 missing or stale `_en.md` outputs rather than merely scanning the first 50 source files. The translator supports a comma-separated model rotation and writes progress to `.cache/router-translation-manifest.json` after each file, so interrupted runs can be resumed. Existing up-to-date `_en.md` files are skipped unless `--overwrite` is passed.

```powershell
$env:OPENAI_MODELS = "oc/deepseek-v4-flash-free,openrouter/openrouter/owl-alpha,openrouter/nvidia/nemotron-3-nano-30b-a3b:free,openrouter/poolside/laguna-m.1:free,openrouter/openrouter/free"
npm run translate:docs -- --limit 50
```

If the 9router `free-translation` combo already contains those free models, prefer the combo and keep routing in 9router:

```powershell
$env:OPENAI_MODEL = "free-translation"
npm run translate:docs -- --limit 50
```

For a small trial run, copy selected docs into `_test_docs/` and generate `_en.md` files there only:

```powershell
npm run translate:test -- --files "AddLabel.md,AddNoise.md,ACN_AdvancedControlNetApply.md,ADE_AnimateDiffLoaderWithContext.md"
```

The four sample files above were translated successfully in local testing, and the reviewed output looked usable as a first-pass English translation.

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

