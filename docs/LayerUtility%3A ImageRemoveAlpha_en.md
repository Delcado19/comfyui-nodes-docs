# Documentation
- Class name: ImageRemoveAlpha
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Remove the alpha channel of the image, convert the image to RGB mode. Optionally fill background and set background color.

# Input types

## Required

- RGBA_image
    - Input image, supports RGBA or RGB mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- fill_background
    - Fill background.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- background_color
    - Background color.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional

- mask
    - Optional input mask. If an input mask is provided, it will be used first, ignoring the alpha from RGBA_image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- RGB_image
    - Processed RGB image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
