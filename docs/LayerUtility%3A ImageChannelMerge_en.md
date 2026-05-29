# Documentation
- Class name: ImageChannelMerge
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Merge the channels into one image.

# Input types

## Required

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

- mode
    - Channel modes. Includes RGBA, YCbCr, LAB and HSV.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - RGBA
        - YCbCr
        - LAB
        - HSV

## Optional

- channel_4
    - Channel 4.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

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
