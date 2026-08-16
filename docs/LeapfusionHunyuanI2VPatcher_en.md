# Documentation
- Class name: LeapfusionHunyuanI2VPatcher
- Category: KJNodes/hunyuanvideo
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- index
    - The index of the latent to be replaced. 0 for first frame and -1 for last
    - Comfy dtype: INT
    - Python dtype: int
- start_percent
    - The start percentage of steps to apply
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end percentage of steps to apply
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
