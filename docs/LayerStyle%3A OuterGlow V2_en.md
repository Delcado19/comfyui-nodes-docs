# Documentation
- Class name: OuterGlowV2
- Category: 😺dzNodes/LayerStyle
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Outer glow effect V2.

# Input types

## Required

- background_image
    - Background image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- layer_image
    - Layer image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- invert_mask
    - Invert mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- blend_mode
    - Blend mode.
    - Comfy dtype: ['screen', 'linear dodge(add)', 'color dodge', 'lighten', 'dodge', 'hard light', 'linear light', '其他模式']
    - Python dtype: str

- opacity
    - Transparency.
    - Comfy dtype: INT
    - Python dtype: int

- brightness
    - Brightness.
    - Comfy dtype: INT
    - Python dtype: int

- glow_range
    - Glow range.
    - Comfy dtype: INT
    - Python dtype: int

- blur
    - Blur.
    - Comfy dtype: INT
    - Python dtype: int

- light_color
    - Light source center color.
    - Comfy dtype: STRING
    - Python dtype: str

- glow_color
    - Glow outer color.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional

- layer_mask
    - Layer mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
