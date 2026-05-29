# Documentation
- Class name: LayerUtility: CropByMask
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Crops an image and its mask to the bounding box of the masked region, with optional reserve padding on each side. Supports inverting the mask before detection.

# Input types
## Required
- image
    - The source image to be cropped.
    - Comfy dtype: IMAGE
- mask_for_crop
    - The mask used to determine the crop region.
    - Comfy dtype: MASK
- invert_mask
    - Whether to invert the mask before detecting the crop bounds.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- detect
    - The detection mode used to find the crop bounding box.
    - Comfy dtype: COMBO
    - Options: `min_bounding_rect`, `max_inscribed_rect`, `mask_area`
- top_reserve
    - Extra pixels to reserve above the detected region.
    - Comfy dtype: INT
    - Default: `20`
- bottom_reserve
    - Extra pixels to reserve below the detected region.
    - Comfy dtype: INT
    - Default: `20`
- left_reserve
    - Extra pixels to reserve to the left of the detected region.
    - Comfy dtype: INT
    - Default: `20`
- right_reserve
    - Extra pixels to reserve to the right of the detected region.
    - Comfy dtype: INT
    - Default: `20`

# Output types
- croped_image
    - The cropped image.
    - Comfy dtype: IMAGE
- croped_mask
    - The cropped mask.
    - Comfy dtype: MASK
- crop_box
    - The bounding box coordinates used for cropping.
    - Comfy dtype: BOX
- box_preview
    - A preview image showing the crop box overlay.
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
