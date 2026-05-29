# Documentation
- Class name: ColorImage
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate an image with specified color and size. V2 upgrade of ColorImage.

# Input types

## Required

- size
    - Size preset. Presets can be user-defined. If size_as is provided, this option will be ignored.
    - Comfy dtype: STRING
    - Python dtype: str
    - Options: {"default": "custom", "options": ["custom", "512x512", "1024x1024", "2048x2048", "4096x4096", "8192x8192", "16384x16384", "32768x32768"]}

- custom_width
    -  Image width. Effective when size is set to "custom". If size_as is provided, this option will be ignored.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 512, "min": 4, "max": 99999, "step": 1}

- custom_height
    - Image height. Effective when size is set to "custom". If size_as is provided, this option will be ignored.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 512, "min": 4, "max": 99999, "step": 1}

- color
    - Color of the image.
    - Comfy dtype: STRING
    - Python dtype: str
    - Options: {"default": "#000000"}

## Optional

- size_as
    - Image as reference. If this is set, the size option will be ignored.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

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
