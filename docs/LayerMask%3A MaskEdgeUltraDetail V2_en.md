# Documentation
- Class name: MaskEdgeUltraDetailV2
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Process rough masks to achieve ultra-fine edges. This node combines the Alpha Matte and Guided Filter Alpha functionalities from spacepxl's [ComfyUI-Image-Filters](https://github.com/spacepxl/ComfyUI-Image-Filters). Thanks to the original author.

V2 upgrade of MaskEdgeUltraDetail, adding the VITMatte edge processing method, which is suitable for handling semi-transparent areas. (Note: Using this method on images exceeding 2K resolution will consume a large amount of memory)

# Input types

## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Input mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- method
    - Provides two methods for edge processing: PyMatting and OpenCV-GuidedFilter. PyMatting is slower but recommended for video to achieve smoother mask sequences.
    - Comfy dtype: LIST
    - Python dtype: str

- mask_grow
    - Mask expansion amount. Positive values expand outward, negative values contract inward. For rough masks, negative values are typically used to contract edges for better results.
    - Comfy dtype: INT
    - Python dtype: int

- fix_gap
    - Fill gaps in the mask. If there are obvious gaps in the mask, increase this value appropriately.
    - Comfy dtype: INT
    - Python dtype: int

- fix_threshold
    - Threshold for filling the mask.
    - Comfy dtype: FLOAT
    - Python dtype: float

- detail_range
    - Edge detail range.
    - Comfy dtype: INT
    - Python dtype: int

- black_point
    - Edge black sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- white_point
    - Edge black sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float



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
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
