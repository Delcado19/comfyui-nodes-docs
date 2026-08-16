# Documentation
- Class name: ResizeImageMaskNode
- Category: image/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Resize an image or mask using various scaling methods.

# Input types
## Required
- input
    - The input input is used by this node during execution.
    - Comfy dtype: COMFY_MATCHTYPE_V3
    - Python dtype: object
- resize_type
    - Select how to resize: by exact dimensions, scale factor, matching another image, etc.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- scale_method
    - Interpolation algorithm. 'area' is best for downscaling, 'lanczos' for upscaling, 'nearest-exact' for pixel art.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- resized
    - The resized output is produced by this node.
    - Comfy dtype: COMFY_MATCHTYPE_V3
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
