# Documentation
- Class name: GradientOverlayV2
- Category: 😺dzNodes/LayerStyle
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Gradient Overlay v2

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
    - Whether to invert the mask.
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

- start_color
    - Color at the start of the gradient.
    - Comfy dtype: STRING
    - Python dtype: str

- start_alpha
    - Transparency at the start of the gradient.
    - Comfy dtype: INT
    - Python dtype: int

- end_color
    - Color at the end of the gradient.
    - Comfy dtype: STRING
    - Python dtype: str

- end_alpha
    - Transparency at the end of the gradient.
    - Comfy dtype: INT
    - Python dtype: int

- angle
    - Gradient rotation angle.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- layer_mask
    - Mask of the layer image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Generated image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
