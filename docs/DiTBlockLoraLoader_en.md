# Documentation
- Class name: DiTBlockLoraLoader
- Category: KJNodes/lora
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- model
    - The diffusion model the LoRA will be applied to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- strength_model
    - How strongly to modify the diffusion model. This value can be negative.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- lora_name
    - The name of the LoRA.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- opt_lora_path
    - Absolute path of the LoRA.
    - Comfy dtype: STRING
    - Python dtype: str
- blocks
    - The blocks input is used by this node during execution.
    - Comfy dtype: SELECTEDDITBLOCKS
    - Python dtype: object

# Output types
- model
    - The modified diffusion model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- rank
    - possible rank of the LoRA.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
