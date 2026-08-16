# Documentation
- Class name: DA3Render
- Category: image/geometry estimation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Render a depth map, confidence map, or sky mask from Depth Anything 3 geometry data.

# Input types
## Required
- da3_geometry
    - The da3_geometry input is used by this node during execution.
    - Comfy dtype: DA3_GEOMETRY
    - Python dtype: object
- output
    - - depth: normalised greyscale depth image.
- depth_colored: depth mapped through the Turbo colormap.
- sky_mask: sky probability in [0, 1] (for Mono/Metric models only).
- confidence: normalised depth confidence (for Small/Base models only).
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
