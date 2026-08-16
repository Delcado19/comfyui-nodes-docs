# Documentation
- Class name: ImageGrid
- Category: image/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Arrange multiple images into a grid layout.

# Input types
## Required
- images
    - List of images to process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- columns
    - Number of columns in the grid.
    - Comfy dtype: INT
    - Python dtype: int
- cell_width
    - Width of each cell in the grid.
    - Comfy dtype: INT
    - Python dtype: int
- cell_height
    - Height of each cell in the grid.
    - Comfy dtype: INT
    - Python dtype: int
- padding
    - Padding between images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - Processed images
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
