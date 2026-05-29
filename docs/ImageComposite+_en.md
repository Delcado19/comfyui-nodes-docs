# Documentation
- Class name: ImageComposite+
- Display name: 🔧 Image Composite
- Category: essentials/image manipulation
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_essentials

Composites the source image onto the destination image at a specified position with optional offset and mask support. The source is placed at coordinates (x, y) on the destination, shifted by (offset_x, offset_y), and optionally masked before blending.

# Input types
## Required
- destination
    - The base image onto which the source will be composited.
    - Comfy dtype: IMAGE
- source
    - The image to composite onto the destination.
    - Comfy dtype: IMAGE
- x
    - The horizontal position on the destination where the source is placed.
    - Comfy dtype: INT
    - Default: `0`
- y
    - The vertical position on the destination where the source is placed.
    - Comfy dtype: INT
    - Default: `0`
- offset_x
    - Additional horizontal offset applied to the source position.
    - Comfy dtype: INT
    - Default: `0`
- offset_y
    - Additional vertical offset applied to the source position.
    - Comfy dtype: INT
    - Default: `0`
## Optional
- mask
    - Optional mask controlling where the source is visible on the destination.
    - Comfy dtype: MASK

# Output types
- IMAGE
    - The resulting composited image.
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_essentials)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
