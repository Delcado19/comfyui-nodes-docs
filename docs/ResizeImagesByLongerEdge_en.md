# Documentation
- Class name: ResizeImagesByLongerEdge
- Category: image/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Resize images so that the longer edge matches the specified dimension while preserving aspect ratio.

# Input types
## Required
- images
    - Image to process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- longer_edge
    - Target dimension for the longer edge.
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
