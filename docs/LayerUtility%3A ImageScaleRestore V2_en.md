# Documentation
- Class name: ImageScaleRestoreV2
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

V2 scales image or mask by aspect ratio. Can set to round scaled dimensions to multiple of 8 or 16, or scale by longest side.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- scale
    - Scale ratio.
    - Comfy dtype: FLOAT
    - Python dtype: float

- method
    - Sampling method.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - lanczos
        - bicubic
        - hamming
        - bilinear
        - box
        - nearest

- scale_by
    - Scale method.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - by_scale
        - longest
        - shortest
        - width
        - height
        - total_pixel(kilo pixel)

- scale_by_length
    - Scale length.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- mask
    - Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- original_size
    - Original size.
    - Comfy dtype: BOX
    - Python dtype: List[int]

# Output types

- image
    - Scaled image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Scaled mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- original_size
    - Original size.
    - Comfy dtype: BOX
    - Python dtype: List[int]

- width
    - Target width.
    - Comfy dtype: INT
    - Python dtype: int

- height
    - Target height.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
