# Documentation
- Class name: SharpAndSoft
- Category: 😺dzNodes/LayerFilter
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Enhance or smooth out details in images.

# Input types

## Required

- images
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- enhance
    - Provides four preset levels: very sharp, sharp, soft, and very soft. Selecting None applies no processing.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options: 
        - very sharp
        - sharp
        - soft
        - very soft
        - None

# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
