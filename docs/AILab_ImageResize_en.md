# Documentation
- Class name: AILab_ImageResize
- Display name: Image Resize (RMBG) 🖼️🎭
- Category: 🧪AILab/🖼️IMAGE
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

Resizes an image using configurable dimensions, scale factor, or target megapixels while supporting stretch, crop, and pad output modes. Optionally processes a mask alongside the image and returns both with the final dimensions.

# Input types
## Required
- image
    - The source image tensor to be resized.
    - Comfy dtype: IMAGE
- custom_width
    - Target width in pixels; 0 means auto-calculate from other parameters.
    - Comfy dtype: INT
    - Default: `0`
- custom_height
    - Target height in pixels; 0 means auto-calculate from other parameters.
    - Comfy dtype: INT
    - Default: `0`
- megapixels
    - Target total megapixels; 0 disables this constraint.
    - Comfy dtype: FLOAT
    - Default: `0`
- scale_by
    - Uniform scale multiplier applied to width and height.
    - Comfy dtype: FLOAT
    - Default: `1`
- resize_mode
    - Strategy for determining final dimensions (e.g., longest_side).
    - Comfy dtype: COMBO
    - Default: `"longest_side"`
    - Options: `longest_side`, `shortest_side`
- resize_value
    - Numeric value used by the selected resize_mode.
    - Comfy dtype: INT
    - Default: `0`
- upscale_method
    - Interpolation method for upscaling (e.g., lanczos).
    - Comfy dtype: COMBO
    - Default: `"lanczos"`
    - Options: `nearest-exact`, `bilinear`, `area`, `bicubic`, `lanczos`
- device
    - Compute device for processing (cpu).
    - Comfy dtype: COMBO
    - Default: `"cpu"`
    - Options: `cpu`, `gpu`
- divisible_by
    - Ensures final dimensions are multiples of this value.
    - Comfy dtype: INT
    - Default: `2`
- output_mode
    - How to fit the image: stretch, crop, or pad.
    - Comfy dtype: COMBO
    - Default: `"stretch"`
    - Options: `stretch`, `pad`, `pad_edge`, `pad_edge_pixel`, `crop`, `pillarbox_blur`
- crop_position
    - Anchor point when crop_mode is active.
    - Comfy dtype: COMBO
    - Default: `"center"`
    - Options: `center`, `top`, `bottom`, `left`, `right`
- pad_color
    - Padding color (hex)
    - Comfy dtype: COLORCODE
    - Default: `"#FFFFFF"`
## Optional
- mask
    - Optional mask tensor resized alongside the image.
    - Comfy dtype: MASK

# Output types
- IMAGE
    - The resized image tensor.
    - Comfy dtype: IMAGE
- MASK
    - The resized mask tensor (unchanged if no mask input).
    - Comfy dtype: MASK
- WIDTH
    - Final output width in pixels.
    - Comfy dtype: INT
- HEIGHT
    - Final output height in pixels.
    - Comfy dtype: INT

# Source code
[View source repository on GitHub](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
