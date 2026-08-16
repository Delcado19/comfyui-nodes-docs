# Documentation
- Class name: ImageConcatFromBatch
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Concatenates images from a batch into a grid with a specified number of columns.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- num_columns
    - The num_columns input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- match_image_size
    - The match_image_size input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- max_resolution
    - The max_resolution input is used by this node during execution.
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
