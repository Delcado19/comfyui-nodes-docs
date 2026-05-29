# Documentation
- Class name: ImagePadKJ
- Display name: ImagePad KJ
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Pad the input image and optionally mask with the specified padding.

# Input types
## Required
- image
    - Comfy dtype: IMAGE
- left
    - Comfy dtype: INT
    - Default: `0`
- right
    - Comfy dtype: INT
    - Default: `0`
- top
    - Comfy dtype: INT
    - Default: `0`
- bottom
    - Comfy dtype: INT
    - Default: `0`
- extra_padding
    - Comfy dtype: INT
    - Default: `0`
- pad_mode
    - Comfy dtype: COMBO
    - Options: `edge`, `edge_pixel`, `color`, `pillarbox_blur`
- color
    - Color as RGB values in range 0-255 or 0.0-1.0, or color name or hex code
    - Comfy dtype: STRING
    - Default: `"0, 0, 0"`
## Optional
- mask
    - Comfy dtype: MASK
- target_width
    - Comfy dtype: INT
    - Default: `512`
- target_height
    - Comfy dtype: INT
    - Default: `512`

# Output types
- images
    - Comfy dtype: IMAGE
- masks
    - Comfy dtype: MASK

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
