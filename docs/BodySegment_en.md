# Documentation
- Class name: BodySegment
- Display name: Body Segment (RMBG)
- Category: 🧪AILab/🧽RMBG
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

Segments a human body into specified parts using the RMBG model. Provides options to include/exclude body regions, blur and offset masks, invert output, and choose background type.

# Input types
## Required
- images
    - The input image(s) to be segmented.
    - Comfy dtype: IMAGE
## Optional
- Hair
    - If true, includes hair in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Glasses
    - If true, includes glasses in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Top-clothes
    - If true, includes top clothes in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Bottom-clothes
    - If true, includes bottom clothes in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Torso-skin
    - If true, includes torso skin in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Face
    - If true, includes face in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Left-arm
    - If true, includes left arm in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Right-arm
    - If true, includes right arm in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Left-leg
    - If true, includes left leg in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Right-leg
    - If true, includes right leg in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Left-foot
    - If true, includes left foot in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- Right-foot
    - If true, includes right foot in the segmentation.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- mask_blur
    - Blur amount for mask edges
    - Comfy dtype: INT
    - Default: `0`
- mask_offset
    - Expand/Shrink mask boundary
    - Comfy dtype: INT
    - Default: `0`
- invert_output
    - Invert both image and mask output
    - Comfy dtype: BOOLEAN
    - Default: `false`
- background
    - Choose background type: Alpha (transparent) or Color (custom background color).
    - Comfy dtype: COMBO
    - Default: `"Alpha"`
    - Options: `Alpha`, `Color`
- background_color
    - Choose background color (Alpha = transparent)
    - Comfy dtype: COLORCODE
    - Default: `"#222222"`

# Output types
- IMAGE
    - The output image with background replaced (alpha or color) and selected body parts visible.
    - Comfy dtype: IMAGE
- MASK
    - A binary mask of the selected body parts.
    - Comfy dtype: MASK
- MASK_IMAGE
    - The mask visualized as an RGB image for preview.
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
