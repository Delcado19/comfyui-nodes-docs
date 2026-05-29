# Documentation
- Class name: GetColorTone
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Get the main color or average color from the image.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mode
    - Modes, two options: main color main_color and average color average.
    - Comfy dtype: STRING
    - Python dtype: str
    - Optional values: 'average', 'main'


# Output types

- RGB color in HEX
    - Described using hexadecimal RGB string format, e.g. '#FA3D86'.
    - Comfy dtype: STRING
    - Python dtype: str

- HSV color in list
    - Color described using HSV format.
    - Comfy dtype: LIST
    - Python dtype: list

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
