# Documentation
- Class name: MaskGradient
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Makes the mask fade from one side. Note the difference between this node and CreateGradientMask.

# Input types

## Required

- mask
    - Input mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- invert_mask
    - Invert mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- gradient_side
    - Which side to fade from. Four directions: top, bottom, left, right.
    - Comfy dtype: LIST
    - Python dtype: str

- gradient_scale
    - Gradient distance. Default 100 means one side becomes fully transparent while the other becomes fully opaque. Smaller values shorten the transition.
    - Comfy dtype: INT
    - Python dtype: int

- gradient_offset
    - Gradient offset.
    - Comfy dtype: INT
    - Python dtype: int

- opacity
    - Transparency.
    - Comfy dtype: INT
    - Python dtype: int

# Output types

- mask
    - Output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
