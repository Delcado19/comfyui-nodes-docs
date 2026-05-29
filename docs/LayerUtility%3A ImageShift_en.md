# Documentation
- Class name: ImageShift
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Displace the image. This node supports outputting a displacement seam mask for creating seamless textures.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- shift_x
    - X-axis movement in pixels.
    - Comfy dtype: INT
    - Python dtype: int

- shift_y
    - Y-axis movement in pixels.
    - Comfy dtype: INT
    - Python dtype: int

- cyclic
    - Whether to repeat cyclically.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- background_color
    - Background color.
    - Comfy dtype: STRING
    - Python dtype: str

- border_mask_width
    - Border width.
    - Comfy dtype: INT
    - Python dtype: int

- border_mask_blur
    - Border blur.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- mask
    - Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Displaced image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Displaced mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- border_mask
    - Border mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
