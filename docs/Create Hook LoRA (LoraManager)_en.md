# Documentation
- Class name: Create Hook LoRA (LoraManager)
- Category: Lora Manager/hooks
- Output node: False
- Repo Ref: https://github.com/willmiao/ComfyUI-Lora-Manager

Create Hook LoRA (LoraManager) is a ComfyUI node registered by `custom_nodes.comfyui-lora-manager`. The live metadata did not provide a longer description.

# Input types
## Required
- text
    - Search and select LoRAs. Each LoRA gets its own model/clip strength. Hooks chain with prev_hooks.
    - Comfy dtype: AUTOCOMPLETE_TEXT_LORAS
    - Python dtype: object

# Output types
- HOOKS
    - The HOOKS output is produced by this node.
    - Comfy dtype: HOOKS
    - Python dtype: object
- trigger_words
    - The trigger_words output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- active_loras
    - The active_loras output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/willmiao/ComfyUI-Lora-Manager)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
