# Documentation
- Class name: MaskEdgeShrink
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Smoothly transition and shrink the mask edges while preserving edge details.

# Input types

## Required

- mask
    - Input mask
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- invert_mask
    - Inverted mask
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- shrink_level
    - Shrink level.
    - Comfy dtype: INT
    - Python dtype: int

- soft
    - Softening level.
    - Comfy dtype: INT
    - Python dtype: int

- edge_shrink
    - Edge shrink.
    - Comfy dtype: INT
    - Python dtype: int

- edge_reserve
    - Opacity preservation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types

- mask
    - Output mask
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
