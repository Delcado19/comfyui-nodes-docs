# Documentation
- Class name: SaveImageAdvanced
- Category: image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Saves the input images to your ComfyUI output directory.

# Input types
## Required
- images
    - The images to save.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - The prefix for the file to save. May include formatting tokens such as %date:yyyy-MM-dd% or %Empty Latent Image.width%.
    - Comfy dtype: STRING
    - Python dtype: str
- format
    - The file format in which to save the image.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
