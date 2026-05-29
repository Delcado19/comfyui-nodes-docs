# Documentation
- Class name: ImageScaleByAspectRatio
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Scale the image or mask by aspect ratio. The scaled dimensions can be rounded to multiples of 8 or 16, and can be scaled by the long side size.

# Input types

## Required

- aspect_ratio
    - Aspect ratio. Several common aspect ratios are provided here. You can also choose "original" to keep the original ratio or "custom" for a custom ratio.
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
    - Ratio width. If aspect_ratio option is not "custom", this setting will be ignored.
    - Comfy dtype: INT
    - Python dtype: int

- proportional_height
    - Ratio height. If aspect_ratio option is not "custom", this setting will be ignored.
    - Comfy dtype: INT
    - Python dtype: int

- fit
    - Scaling aspect ratio mode. There are 3 modes to choose: letterbox mode preserves the full frame, filling the blank areas with black; crop mode preserves the full short side, and the excess on the long side will be cropped; fill mode does not maintain the aspect ratio, and the width and height each fill the frame.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - letterbox
        - crop
        - fill

- method
    - Sampling method for scaling, including lanczos, bicubic, hamming, bilinear, box, and nearest.
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
    - Rounding to multiples. For example, if set to 8, the width and height will be forced to multiples of 8.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - 8
        - 16
        - 32
        - 64
        - None

- scale_to_longest_side
    - Whether to scale by the long side size.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- longest_side
    - When scale_to_longest_side is set to True, this will be the length of the image's longest side.
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
