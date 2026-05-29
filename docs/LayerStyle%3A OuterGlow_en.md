# Documentation
- Class name: OuterGlow
- Category: 😺dzNodes/LayerStyle
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate outer glow.

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
    - Comfy dtype: ['screen', 'add', 'lighter', 'normal', 'multply', 'subtract', 'difference', 'darker', 'color_burn', 'color_dodge', 'linear_burn', 'linear_dodge', 'overlay', 'soft_light', 'hard_light', 'vivid_light', 'pin_light', 'linear_light', 'hard_mix']
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
    - Mask of layer image, outer glow generated accordingly.
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
