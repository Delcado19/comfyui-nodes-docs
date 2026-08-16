# Documentation
- Class name: UNet loader with Name (Image Saver)
- Category: ImageSaver/utils
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Loads U-Net model and outputs it's filename

# Input types
## Required
- unet_name
    - The unet_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_dtype
    - The weight_dtype input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- model
    - U-Net model (denoising latents)
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- filename
    - model filename
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
