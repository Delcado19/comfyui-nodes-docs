# Documentation
- Class name: ColorAdapter
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Automatically adjust image tone to match the reference image.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- color_ref_image
    - Reference image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- opacity
    - Opacity after tone adjustment.
    - Comfy dtype: INT
    - Python dtype: int
    - Value range: 0-100

# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
