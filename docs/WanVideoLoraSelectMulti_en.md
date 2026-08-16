# Documentation
- Class name: WanVideoLoraSelectMulti
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Select a LoRA model from ComfyUI/models/loras

# Input types
## Required
- lora_0
    - The lora_0 input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_0
    - LORA strength, set to 0.0 to unmerge the LORA
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_1
    - The lora_1 input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_1
    - LORA strength, set to 0.0 to unmerge the LORA
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_2
    - The lora_2 input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_2
    - LORA strength, set to 0.0 to unmerge the LORA
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_3
    - The lora_3 input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_3
    - LORA strength, set to 0.0 to unmerge the LORA
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_4
    - The lora_4 input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_4
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
    - Load the LORA model with less VRAM usage, slower loading. No effect if merge_loras is False
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- merge_loras
    - Merge LoRAs into the model, otherwise they are loaded on the fly. Always disabled for GGUF and scaled fp8 models. This affects ALL LoRAs, not just the current one
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

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
