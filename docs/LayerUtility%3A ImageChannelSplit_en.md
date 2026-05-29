# Documentation
- Class name: ImageChannelSplit
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Split image channels into separate images.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mode
    - Channel mode.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - RGBA
        - YCbCr
        - LAB
        - HSV

# Output types

- channel_1
    - Channel 1.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- channel_2
    - Channel 2.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- channel_3
    - Channel 3.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- channel_4
    - Channel 4.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
