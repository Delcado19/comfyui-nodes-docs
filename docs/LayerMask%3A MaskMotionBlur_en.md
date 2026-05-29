# Documentation
- Class name: MaskMotionBlur
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Node that applies motion blur effect to a Mask.

# Input types

## Required

- mask
    - Input mask
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- invert_mask
    - Invert mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- blur
    - Amount of blur.
    - Comfy dtype: INT
    - Python dtype: int

- angle
    - Blur angle.
    - Comfy dtype: FLOAT
    - Python dtype: float

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
