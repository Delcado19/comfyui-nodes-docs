# Documentation
- Class name: ColorCorrectYUV
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Adjust the YUV channels of the image.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- Y
    - Adjustment value for the Y channel.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 0, "min": -255, "max": 255, "step": 1}

- U
    - Adjustment value for the U channel.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 0, "min": -255, "max": 255, "step": 1}

- V
    - Adjustment value for the V channel.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 0, "min": -255, "max": 255, "step": 1}

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
