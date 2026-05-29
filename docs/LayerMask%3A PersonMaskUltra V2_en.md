# Documentation
- Class name: PersonMaskUltraV2
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

V2 upgrade of PersonMaskUltra, adding VITMatte edge processing method. (Note: Using this method on images exceeding 2K resolution will consume a large amount of memory)

# Input types

## Required

- images
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- face
    - Face.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- hair
    - Hair.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- body
    - Body.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- clothes
    - Clothes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- accessories
    - Accessories.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- background
    - Background.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- confidence
    - Confidence.
    - Comfy dtype: FLOAT
    - Python dtype: float

- detail_method
    - Detail processing method.
    - Comfy dtype: ['VITMatte', 'VITMatte(local)', 'PyMatting', 'GuidedFilter']
    - Python dtype: str

- detail_erode
    - Detail erosion.
    - Comfy dtype: INT
    - Python dtype: int

- detail_dilate
    - Detail dilation.
    - Comfy dtype: INT
    - Python dtype: int

- black_point
    - Black points.
    - Comfy dtype: FLOAT
    - Python dtype: float

- white_point
    - White points.
    - Comfy dtype: FLOAT
    - Python dtype: float

- process_detail
    - Process details.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

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
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
