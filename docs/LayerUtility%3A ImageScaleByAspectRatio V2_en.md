# Documentation
- Class name: ImageScaleByAspectRatioV2
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

ImageScaleByAspectRatio V2 Upgrade

# Input types

## Required

- aspect_ratio
    - Target aspect ratio.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - original
        - custom
        - 1:1
        - 3:2
        - 4:3
        - 16:9
        - 2:3
        - 3:4
        - 9:16

- proportional_width
    - Custom width ratio.
    - Comfy dtype: INT
    - Python dtype: int

- proportional_height
    - Custom height ratio.
    - Comfy dtype: INT
    - Python dtype: int

- fit
    - Fit method.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - letterbox
        - crop
        - fill

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

- round_to_multiple
    - Round to multiple.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - 8
        - 16
        - 32
        - 64
        - None

- scale_to_side
    - Allows specifying size scaling by long side, short side, width, height, or total pixels.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - None
        - longest
        - shortest
        - width
        - height
        - total_pixel(kilo pixel)

- scale_to_length
    - The value here is used as the length of the side specified by scale_to_side, or the total number of pixels (kilo pixels).
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

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
