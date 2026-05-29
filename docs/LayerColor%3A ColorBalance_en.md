# Documentation
- Class name: ColorBalance
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Adjust the image's color balance.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- cyan_red
    - : Cyan-Red balance. Negative values bias cyan, positive values bias red.
    - Comfy dtype: FLOAT
    - Python dtype: float

- magenta_green
    - : Magenta-Green balance. Negative values bias magenta, positive values bias green.
    - Comfy dtype: FLOAT
    - Python dtype: float

- yellow_blue
    - : Yellow-Blue balance. Negative values bias yellow, positive values bias blue.
    - Comfy dtype: FLOAT
    - Python dtype: float


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
