# Documentation
- Class name: ColorCorrectLevels
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Adjust image levels.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- channel
    - Select the channel to adjust. Options include RGB, red, green, blue.
    - Comfy dtype: STRING
    - Python dtype: str
    - Options:
        - RGB
        - red
        - green
        - blue

- black_point
    - Image input black point value. Range 0-255, default 0.
    - Comfy dtype: INT
    - Python dtype: int
    - Range: [0, 255]
    - Default: 0
    
- white_point
    - Image input white point value. Range 0-255, default 255.
    - Comfy dtype: INT
    - Python dtype: int
    - Range: [0, 255]
    - Default: 255

- gray_point
    - Image input gray point value. Range 0.01-9.99, default 1.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Range: [0.01, 9.99]
    - Default: 1

- output_black_point
    - Image output black point value. Range 0-255, default 0.
    - Comfy dtype: INT
    - Python dtype: int
    - Range: [0, 255]
    - Default: 0

- output_white_point
    - Image output white point value. Range 0-255, default 255.
    - Comfy dtype: INT
    - Python dtype: int
    - Range: [0, 255]
    - Default: 255

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
