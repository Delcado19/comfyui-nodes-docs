# Documentation
- Class name: DaSiWa_LTX2LoraLoader
- Category: loaders/lora
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

DaSiWa LTX-2 LoRA Loader: stacks multiple LoRAs for LTX video/audio models.
Each slot has a master strength plus separate video and audio multipliers, so one LoRA can affect the visual branch, audio branch, or both.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- stack_data
    - The stack_data input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- available_loras
    - The available_loras input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output is produced by this node.
    - Comfy dtype: CLIP
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
