# Documentation
- Class name: SkinBeauty
- Category: 😺dzNodes/LayerFilter
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Skin smoothing effect.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- smooth
    - Smoothing intensity.
    - Comfy dtype: INT
    - Python dtype: int

- threshold
    - Highlight threshold.
    - Comfy dtype: INT
    - Python dtype: int

- opacity
    - Transparency.
    - Comfy dtype: INT
    - Python dtype: int

# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- beauty_mask
    - Whitening effect mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
