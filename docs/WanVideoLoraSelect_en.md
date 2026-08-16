# Documentation
- Class name: WanVideoLoraSelect
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Select a LoRA model from ComfyUI/models/loras

# Input types
## Required
- lora
    - LORA models are expected to be in ComfyUI/models/loras with .safetensors extension
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength
    - LORA strength, set to 0.0 to unmerge the LORA
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- prev_lora
    - For loading multiple LoRAs
    - Comfy dtype: WANVIDLORA
    - Python dtype: object
- blocks
    - The blocks input is used by this node during execution.
    - Comfy dtype: SELECTEDBLOCKS
    - Python dtype: object
- low_mem_load
    - Load the LORA model with less VRAM usage, slower loading. This affects ALL LoRAs, not just the current one. No effect if merge_loras is False
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- merge_loras
    - Merge LoRAs into the model, otherwise they are loaded on the fly. Always disabled for GGUF and scaled fp8 models. This affects ALL LoRAs, not just the current one
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- lora
    - The lora output is produced by this node.
    - Comfy dtype: WANVIDLORA
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
