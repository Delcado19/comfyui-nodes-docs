# Documentation
- Class name: WanVideoWanDrawWanMoveTracks
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
    - Comfy dtype: TRACKS
    - Python dtype: object
## Optional
- line_resolution
    - Number of points to use for each line segment
    - Comfy dtype: INT
    - Python dtype: int
- circle_size
    - Size of the circle to draw for each track point
    - Comfy dtype: INT
    - Python dtype: int
- opacity
    - Opacity of the circle to draw for each track point
    - Comfy dtype: FLOAT
    - Python dtype: float
- line_width
    - Width of the line to draw for each track
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
