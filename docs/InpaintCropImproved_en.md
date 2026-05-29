# Documentation
- Class name: InpaintCropImproved
- Display name: ✂️ Inpaint Crop
- Category: inpaint
- Output node: False
- Repo Ref: https://github.com/lquesada/ComfyUI-Inpaint-CropAndStitch

Crops an image around a mask for inpainting, the optional context mask defines an extra area to keep for the context.

# Input types
## Required
- image
    - Comfy dtype: IMAGE
- downscale_algorithm
    - Comfy dtype: COMBO
    - Default: `"bilinear"`
    - Options: `nearest`, `bilinear`, `bicubic`, `lanczos`, `box`, `hamming`
- upscale_algorithm
    - Comfy dtype: COMBO
    - Default: `"bicubic"`
    - Options: `nearest`, `bilinear`, `bicubic`, `lanczos`, `box`, `hamming`
- preresize
    - Resize the original image before processing.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- preresize_mode
    - Comfy dtype: COMBO
    - Default: `"ensure minimum resolution"`
    - Options: `ensure minimum resolution`, `ensure maximum resolution`, `ensure minimum and maximum resolution`
- preresize_min_width
    - Comfy dtype: INT
    - Default: `1024`
- preresize_min_height
    - Comfy dtype: INT
    - Default: `1024`
- preresize_max_width
    - Comfy dtype: INT
    - Default: `16384`
- preresize_max_height
    - Comfy dtype: INT
    - Default: `16384`
- mask_fill_holes
    - Mark as masked any areas fully enclosed by mask.
    - Comfy dtype: BOOLEAN
    - Default: `true`
- mask_expand_pixels
    - Expand the mask by a certain amount of pixels before processing.
    - Comfy dtype: INT
    - Default: `0`
- mask_invert
    - Invert mask so that anything masked will be kept.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- mask_blend_pixels
    - How many pixels to blend into the original image.
    - Comfy dtype: INT
    - Default: `32`
- mask_hipass_filter
    - Ignore mask values lower than this value.
    - Comfy dtype: FLOAT
    - Default: `0.1`
- extend_for_outpainting
    - Extend the image for outpainting.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- extend_up_factor
    - Comfy dtype: FLOAT
    - Default: `1`
- extend_down_factor
    - Comfy dtype: FLOAT
    - Default: `1`
- extend_left_factor
    - Comfy dtype: FLOAT
    - Default: `1`
- extend_right_factor
    - Comfy dtype: FLOAT
    - Default: `1`
- context_from_mask_extend_factor
    - Grow the context area from the mask by a certain factor in every direction. For example, 1.5 grabs extra 50% up, down, left, and right as context.
    - Comfy dtype: FLOAT
    - Default: `1.2`
- output_resize_to_target_size
    - Force a specific resolution for sampling.
    - Comfy dtype: BOOLEAN
    - Default: `true`
- output_target_width
    - Comfy dtype: INT
    - Default: `512`
- output_target_height
    - Comfy dtype: INT
    - Default: `512`
- output_padding
    - Comfy dtype: COMBO
    - Default: `"32"`
    - Options: `0`, `8`, `16`, `32`, `64`, `128`, `256`, `512`
- device_mode
    - Comfy dtype: COMBO
    - Default: `"gpu (much faster)"`
    - Options: `cpu (compatible)`, `gpu (much faster)`
## Optional
- mask
    - Comfy dtype: MASK
- optional_context_mask
    - Comfy dtype: MASK

# Output types
- stitcher
    - Comfy dtype: STITCHER
- cropped_image
    - Comfy dtype: IMAGE
- cropped_mask
    - Comfy dtype: MASK

# Source code
[View source repository on GitHub](https://github.com/lquesada/ComfyUI-Inpaint-CropAndStitch)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
