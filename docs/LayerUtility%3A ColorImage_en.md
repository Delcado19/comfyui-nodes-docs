# Documentation
- Class name: ColorImage
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate an image with specified color and size.

# Input types

## Required

- width
    - Width of the image.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 512, "min": 4, "max": 99999, "step": 1}

- height
    - Height of the image.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 512, "min": 4, "max": 99999, "step": 1}

- color
    - Color of the image.
    - Comfy dtype: STRING
    - Python dtype: str
    - Options: {"default": "#000000"}


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
