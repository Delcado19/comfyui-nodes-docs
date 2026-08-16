# Documentation
- Class name: LoadImageTextDataSetFromFolder
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Load a dataset of pairs of images and text captions from a specified folder and return them as a list. Supported formats: PNG, JPG, JPEG, WEBP.

# Input types
## Required
- folder
    - The folder to load images and text captions from.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- images
    - List of loaded images
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- texts
    - List of text captions
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
