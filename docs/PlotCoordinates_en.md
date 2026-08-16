# Documentation
- Class name: PlotCoordinates
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Plots coordinates to sequence of images using Matplotlib.

# Input types
## Required
- coordinates
    - The coordinates input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_width
    - The bbox_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_height
    - The bbox_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- size_multiplier
    - The size_multiplier input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_width
    - The bbox_width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_height
    - The bbox_height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
