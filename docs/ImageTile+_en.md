# Documentation
- Class name: ImageTile+
- Display name: 🔧 Image Tile
- Category: essentials/image manipulation
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_essentials

Splits an input image into a grid of tiles based on the specified number of rows and columns, with optional overlap between adjacent tiles. Returns the tiled image along with tile dimensions and overlap values.

# Input types
## Required
- image
    - The source image to be divided into tiles.
    - Comfy dtype: IMAGE
- rows
    - The number of rows in the tile grid.
    - Comfy dtype: INT
    - Default: `2`
- cols
    - The number of columns in the tile grid.
    - Comfy dtype: INT
    - Default: `2`
- overlap
    - The overlap between tiles as a float value.
    - Comfy dtype: FLOAT
    - Default: `0`
- overlap_x
    - The horizontal overlap between adjacent tiles in pixels.
    - Comfy dtype: INT
    - Default: `0`
- overlap_y
    - The vertical overlap between adjacent tiles in pixels.
    - Comfy dtype: INT
    - Default: `0`

# Output types
- IMAGE
    - The resulting tiled image composed of the input image split into a grid.
    - Comfy dtype: IMAGE
- tile_width
    - The width of each individual tile in pixels.
    - Comfy dtype: INT
- tile_height
    - The height of each individual tile in pixels.
    - Comfy dtype: INT
- overlap_x
    - The horizontal overlap value used between tiles.
    - Comfy dtype: INT
- overlap_y
    - The vertical overlap value used between tiles.
    - Comfy dtype: INT

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_essentials)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
