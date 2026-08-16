# Documentation
- Class name: LTXVImgToVideoInplaceKJ
- Category: KJNodes/ltxv
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Replaces video latent frames with the encoded input images, uses DynamicCombo which requires ComfyUI 0.8.1 and frontend 1.33.4 or later.

# Input types
## Required
- vae
    - Video VAE used to encode the images
    - Comfy dtype: VAE
    - Python dtype: object
- latent
    - Video latent to insert images into
    - Comfy dtype: LATENT
    - Python dtype: dict
- num_images
    - Select how many images to insert
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object

# Output types
- latent
    - The video latent with the images inserted and latent noise mask updated.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
