# Documentation
- Class name: ChannelShake
- Category: 😺dzNodes/LayerFilter
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Channel misalignment. Similar to the Douyin logo effect.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- distance
    - Distance of channel misalignment.
    - Comfy dtype: INT
    - Python dtype: int
    - Range: 1-999

- angle
    - Angle of channel misalignment.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Range: -360-360

- mode
    - Mode of channel misalignment.
    - Comfy dtype: ENUM
    - Python dtype: str
    - Options: RGB, RBG, BGR, BRG, GBR, GRB

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
