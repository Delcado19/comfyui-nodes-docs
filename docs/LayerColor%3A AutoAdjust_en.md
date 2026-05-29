# Documentation
- Class name: AutoAdjust
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Automatically adjust brightness, contrast, and white balance of images. Provide manual adjustment options to compensate for automatic adjustments.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- strength
    - Adjustment intensity. Higher values result in greater differences from the original image.
    - Comfy dtype: INT
    - Python dtype: int

- brightness
    - Manual brightness adjustment.
    - Comfy dtype: INT
    - Python dtype: int

- contrast
    - Manual contrast adjustment.
    - Comfy dtype: INT
    - Python dtype: int

- saturation
    - Manual saturation adjustment.
    - Comfy dtype: INT
    - Python dtype: int

- red
    - Manual red channel adjustment.
    - Comfy dtype: INT
    - Python dtype: int

- green
    - Manual green channel adjustment.
    - Comfy dtype: INT
    - Python dtype: int

- blue
    - Manual blue channel adjustment.
    - Comfy dtype: INT
    - Python dtype: int

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
