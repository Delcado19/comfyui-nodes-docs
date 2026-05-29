# Documentation
- Class name: RMBG
- Display name: Remove Background (RMBG)
- Category: 🧪AILab/🧽RMBG
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

Removes the background from an input image using a selected AI model, producing a transparent or custom-colored output along with the generated mask.

# Input types
## Required
- image
    - Input image to be processed for background removal.
    - Comfy dtype: IMAGE
- model
    - Select the background removal model to use (RMBG-2.0, INSPYRENET, BEN).
    - Comfy dtype: COMBO
    - Options: `RMBG-2.0`, `INSPYRENET`, `BEN`, `BEN2`
## Optional
- sensitivity
    - Adjust the strength of mask detection (higher values result in more aggressive detection).
    - Comfy dtype: FLOAT
    - Default: `1`
- process_res
    - Set the processing resolution (higher values require more VRAM and may increase processing time).
    - Comfy dtype: INT
    - Default: `1024`
- mask_blur
    - Specify the amount of blur to apply to the mask edges (0 for no blur, higher values for more blur).
    - Comfy dtype: INT
    - Default: `0`
- mask_offset
    - Adjust the mask boundary (positive values expand the mask, negative values shrink it).
    - Comfy dtype: INT
    - Default: `0`
- invert_output
    - Enable to invert both the image and mask output (useful for certain effects).
    - Comfy dtype: BOOLEAN
    - Default: `false`
- refine_foreground
    - Use Fast Foreground Colour Estimation to optimize transparent background
    - Comfy dtype: BOOLEAN
    - Default: `false`
- background
    - Choose output type: Alpha (transparent) or Color (custom background color).
    - Comfy dtype: COMBO
    - Default: `"Alpha"`
    - Options: `Alpha`, `Color`
- background_color
    - Pick background color (supports alpha, use color picker).
    - Comfy dtype: COLORCODE
    - Default: `"#222222"`

# Output types
- IMAGE
    - Processed image with background removed or replaced according to settings.
    - Comfy dtype: IMAGE
- MASK
    - Binary or grayscale mask indicating foreground regions.
    - Comfy dtype: MASK
- MASK_IMAGE
    - Visual representation of the mask as an image.
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
