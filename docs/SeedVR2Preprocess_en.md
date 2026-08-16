# Documentation
- Class name: SeedVR2Preprocess
- Category: image/pre-processors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Pad a resized image for SeedVR2 model. Alpha channel is dropped. The node Post-Process SeedVR2 Output re-applies it from the original resized image.

# Input types
## Required
- resized_images
    - The resized image to process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- images
    - The padded image for VAE encoding.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
