# Documentation
- Class name: CropByMaskV2
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

V2 upgrade of CropByMask. Supports crop_box input, convenient for cropping layers of the same size.

mask_for_crop renamed to mask.
Added optional crop_box input. If provided, will ignore mask detection and directly use this data for cropping.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Image's mask, will automatically crop based on mask range.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- invert_mask
    - Whether to invert the mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- detect
    - Detection method: min_bounding_rect is the minimum bounding rectangle of the large shape, max_inscribed_rect is the maximum inscribed rectangle of the large shape, mask_area is the valid pixel area of the mask.
    - Comfy dtype: STRING
    - Python dtype: str

- top_reserve
    - Top padding for cropping.
    - Comfy dtype: INT
    - Python dtype: int

- bottom_reserve
    - Bottom padding for cropping.
    - Comfy dtype: INT
    - Python dtype: int

- left_reserve
    - Left padding for cropping.
    - Comfy dtype: INT
    - Python dtype: int

- right_reserve
    - Right padding for cropping.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- crop_box
    - Cropping box data. If provided, will ignore mask detection and directly use this data for cropping.
    - Comfy dtype: BOX
    - Python dtype: list

# Output types

- croped_image
    - Cropped image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- croped_mask
    - Cropped mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- crop_box
    - Cropping box data, used when restoring via RestoreCropBox node.
    - Comfy dtype: BOX
    - Python dtype: list

- box_preview
    - Crop area preview image: red is the detected area, green is the cropping area after adding padding.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
