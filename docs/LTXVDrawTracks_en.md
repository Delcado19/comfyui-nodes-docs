# Documentation
- Class name: LTXVDrawTracks
- Category: Lightricks/motion_tracking
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

GPU-accelerated sparse track renderer. Rasterises circles at high resolution and downscales with bilinear interpolation.

# Input types
## Required
- tracks
    - JSON string of track coordinates (list of point lists with x/y keys).
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - Output image width in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Output image height in pixels.
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
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
