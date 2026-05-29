# Documentation
- Class name: ImageBlendV2
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A simple node for compositing layers, providing multiple blending modes and adjustable transparency.

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
    - Layer blending mode.
    - Comfy dtype: ENUM
    - Python dtype: str

- opacity
    - Opacity.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- layer_mask
    - Mask of the layer image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


# Output types

- image
    - Composited image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
