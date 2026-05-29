# Documentation
- Class name: ImageStitch
- Display name: Stitch Images
- Category: image/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Stitches image2 to image1 in the specified direction.
If image2 is not provided, returns image1 unchanged.
Optional spacing can be added between images.

# Input types
## Required
- image1
    - Comfy dtype: IMAGE
- direction
    - Comfy dtype: COMBO
    - Default: `"right"`
- match_image_size
    - Comfy dtype: BOOLEAN
    - Default: `true`
- spacing_width
    - Comfy dtype: INT
    - Default: `0`
- spacing_color
    - Comfy dtype: COMBO
    - Default: `"white"`
## Optional
- image2
    - Comfy dtype: IMAGE

# Output types
- IMAGE
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
