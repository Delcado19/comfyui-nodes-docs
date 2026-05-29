# Documentation
- Class name: ColorMap
- Category: 😺dzNodes/LayerStyle
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Color overlay.

# Input types

## Required

- background_image
    - Background image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- layer_image
    - Layer image used for compositing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- invert_mask
    - Invert mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- blend_mode
    - Blend mode of the stroke.
    - Comfy dtype: STRING
    - Python dtype: str

- opacity
    - Opacity.
    - Comfy dtype: INT
    - Python dtype: int

- color
    - Overlay color.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional

- layer_mask
    - Mask of the layer image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor    

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
