# Documentation
- Class name: InnerShadow
- Category: 😺dzNodes/LayerStyle
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate inner shadow effect.

# Input types

## Required

- background_image1
    - Background image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- layer_image1
    - Layer image used for compositing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- invert_mask
    - Whether to invert the mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- blend_mode3
    - Blend mode of the shadow.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - screen
        - add
        - lighter
        - normal
        - multply
        - subtract
        - difference
        - darker
        - color_burn
        - color_dodge
        - linear_burn
        - linear_dodge
        - overlay
        - soft_light
        - hard_light
        - vivid_light
        - pin_light
        - linear_light
        - hard_mix

- opacity
    - Shadow opacity.
    - Comfy dtype: INT
    - Python dtype: int

- distance_x
    - Horizontal offset of the shadow.
    - Comfy dtype: INT
    - Python dtype: int

- distance_y
    - Vertical offset of the shadow.
    - Comfy dtype: INT
    - Python dtype: int

- grow
    - Shadow spread.
    - Comfy dtype: INT
    - Python dtype: int

- blur
    - Shadow blur.
    - Comfy dtype: INT
    - Python dtype: int

- shadow_color4
    - Shadow color.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional

- layer_mask1,2
    - Mask of the layer image, shadow is generated according to this.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Final processed image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
