# Documentation
- Class name: iToolsVaePreview
- Category: iTools
- Output node: True
- Repo Ref: https://github.com/MohammadAboulEla/ComfyUI-iTools

Merges VAE decoding and image preview into one node.

# Input types
## Required
- samples
    - The latent to be decoded.
    - Comfy dtype: LATENT
    - Python dtype: dict
- vae
    - The VAE model used for decoding the latent.
    - Comfy dtype: VAE
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
[View source repository](https://github.com/MohammadAboulEla/ComfyUI-iTools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
