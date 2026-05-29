# Documentation
- Class name: ImageUntile+
- Display name: 🔧 Image Untile
- Category: essentials/image manipulation
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_essentials

Stitches a grid of tiles back into a single image, accounting for overlap between adjacent tiles.

# Input types
## Required
- tiles
    - The combined image containing a grid of sub-images to be reassembled.
    - Comfy dtype: IMAGE
- overlap_x
    - Overlap in pixels between adjacent tiles horizontally.
    - Comfy dtype: INT
    - Default: `0`
- overlap_y
    - Overlap in pixels between adjacent tiles vertically.
    - Comfy dtype: INT
    - Default: `0`
- rows
    - Number of rows in the tile grid.
    - Comfy dtype: INT
    - Default: `2`
- cols
    - Number of columns in the tile grid.
    - Comfy dtype: INT
    - Default: `2`

# Output types
- IMAGE
    - The reconstructed single image composed from the input tiles.
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_essentials)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
