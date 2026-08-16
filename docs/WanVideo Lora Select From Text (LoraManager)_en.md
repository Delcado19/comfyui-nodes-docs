# Documentation
- Class name: WanVideo Lora Select From Text (LoraManager)
- Category: Lora Manager/stackers
- Output node: False
- Repo Ref: https://github.com/willmiao/ComfyUI-Lora-Manager

Revolutionize your workflow with the ultimate LoRA companion for ComfyUI!

# Input types
## Required
- low_mem_load
    - Load LORA models with less VRAM usage, slower loading. This affects ALL LoRAs, not just the current ones. No effect if merge_loras is False
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- merge_lora
    - Merge LoRAs into the model, otherwise they are loaded on the fly. Always disabled for GGUF and scaled fp8 models. This affects ALL LoRAs, not just the current one
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- lora_syntax
    - Connect a TEXT output for LoRA syntax: <lora:name:strength>
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prev_lora
    - The prev_lora input is used by this node during execution.
    - Comfy dtype: WANVIDLORA
    - Python dtype: object
- blocks
    - The blocks input is used by this node during execution.
    - Comfy dtype: BLOCKS
    - Python dtype: object

# Output types
- lora
    - The lora output is produced by this node.
    - Comfy dtype: WANVIDLORA
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
