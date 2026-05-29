# Documentation
- Class name: LayerMask: MaskGrow
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Grows or shrinks a mask by a specified number of pixels with optional blur and inversion.

# Input types
## Required
- mask
    - The input mask to be processed.
    - Comfy dtype: MASK
- invert_mask
    - If true, inverts the mask before growing.
    - Comfy dtype: BOOLEAN
    - Default: `true`
- grow
    - Number of pixels to grow (positive) or shrink (negative) the mask.
    - Comfy dtype: INT
    - Default: `4`
- blur
    - Amount of blur to apply to the mask edges.
    - Comfy dtype: INT
    - Default: `4`

# Output types
- mask
    - The processed mask after growing, blurring, and optional inversion.
    - Comfy dtype: MASK

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
