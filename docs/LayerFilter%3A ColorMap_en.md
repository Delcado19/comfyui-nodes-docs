# Documentation
- Class name: ColorMap
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Pseudo-color heatmap effect.

# Input types

## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- color_map
    - Color of the pseudo-color heatmap.
    - Comfy dtype: STRING
    - Python dtype: str
    
- opacity
    - Transparency.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 100, "min": 0, "max": 100, "step": 1}

# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
