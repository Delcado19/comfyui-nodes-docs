# Documentation
- Class name: ImageGridtoBatch
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Converts a grid of images to a batch of images.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- columns
    - The number of columns in the grid.
    - Comfy dtype: INT
    - Python dtype: int
- rows
    - The number of rows in the grid. Set to 0 for automatic calculation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
