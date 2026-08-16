# Documentation
- Class name: Text (LoraManager)
- Category: Lora Manager/utils
- Output node: False
- Repo Ref: https://github.com/willmiao/ComfyUI-Lora-Manager

A simple text input node with autocomplete support for tags, styles, and wildcard expansion.

# Input types
## Required
- text
    - The text output. Wildcard references inserted with /wildcard are expanded at runtime.
    - Comfy dtype: AUTOCOMPLETE_TEXT_PROMPT,STRING
    - Python dtype: object
## Optional
- seed
    - Optional seed for wildcard generation. Leave unconnected for non-deterministic wildcard expansion.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- STRING
    - The text output.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/willmiao/ComfyUI-Lora-Manager)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
