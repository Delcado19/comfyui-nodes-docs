# Documentation
- Class name: RmBgUltraV2
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

RemBgUltra's V2 upgrade, added VITMatte edge processing method. (Note: Images over 2K size using this method will consume a lot of memory)

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- detail_method
    - Detail processing method.
    - Comfy dtype: ['VITMatte', 'VITMatte(local)', 'PyMatting', 'GuidedFilter']
    - Python dtype: str

- detail_erode
    - The inward erosion range of the mask edge. The larger the value, the larger the inward repair range.
    - Comfy dtype: INT
    - Python dtype: int

- detail_dilate
    - The outward expansion range of the mask edge. The larger the value, the larger the outward repair range.
    - Comfy dtype: INT
    - Python dtype: int

- black_point
    - Edge black sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- white_point
    - Edge white sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- process_detail
    - Setting this to False will skip edge processing to save runtime.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Optional

- None

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
