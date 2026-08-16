# Documentation
- Class name: WanVideoATITracksVisualize
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tracks
    - The tracks input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- min_radius
    - radius for the very first point (oldest)
    - Comfy dtype: INT
    - Python dtype: int
- max_radius
    - radius for the current point (newest)
    - Comfy dtype: INT
    - Python dtype: int
- max_retain
    - Maximum number of points to retain
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
