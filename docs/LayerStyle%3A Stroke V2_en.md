# Documentation
- Class name: StrokeV2
- Category: 😺dzNodes/LayerStyle
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate stroke.

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
    - Comfy dtype: ENUM
    - Python dtype: str

- opacity
    - Transparency.
    - Comfy dtype: INT
    - Python dtype: int

- stroke_grow
    - Stroke expansion/contraction amount, positive value is expansion, negative value is contraction.
    - Comfy dtype: INT
    - Python dtype: int

- stroke_width
    - Stroke width
    - Comfy dtype: INT
    - Python dtype: int

- blur
    - Blur.
    - Comfy dtype: INT
    - Python dtype: int

- stroke_color
    - Stroke color.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional

- layer_mask
    - Layer image mask, stroke is generated based on this.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
