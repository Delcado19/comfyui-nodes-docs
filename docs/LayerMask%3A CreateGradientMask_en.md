# Documentation
- Class name: CreateGradientMask
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Create a gradient mask. Note the difference between this node and MaskGradient.

# Input types
## Required
- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- width
    - Width of the canvas. Ignored if size_as input is provided.
    - Comfy dtype: INT
    - Python dtype: int

- height
    - Height of the canvas. Ignored if size_as input is provided.
    - Comfy dtype: INT
    - Python dtype: int

- gradient_side
    - Direction from which the gradient originates. Five options: top, bottom, left, right, and center.
    - Comfy dtype: ENUM
    - Python dtype: str
    - Options:
        - bottom
        - top
        - left
        - right
        - center

- gradient_scale
    - Gradient distance. Default 100 means one side becomes fully transparent while the other becomes fully opaque. Smaller values shorten the transition.
    - Comfy dtype: INT
    - Python dtype: int

- gradient_offset
    - Gradient offset. When gradient_side is center, this adjusts the size of the gradient area; positive values shrink it, negative values enlarge it.
    - Comfy dtype: INT
    - Python dtype: int

- opacity
    - Opacity of the gradient.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- size_as
    - Size specification for the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
