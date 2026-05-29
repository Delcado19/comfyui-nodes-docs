# Documentation
- Class name: ZImageFunControlnet
- Category: advanced/loaders/zimage
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Applies a ControlNet-style conditioning to a model using an image and optional inpainting mask. The strength parameter controls the influence, and a model patch can be applied simultaneously.

# Input types
## Required
- model
    - The base model to be modified.
    - Comfy dtype: MODEL
- model_patch
    - A model patch to apply alongside the ControlNet effect.
    - Comfy dtype: MODEL_PATCH
- vae
    - The VAE used for encoding input images.
    - Comfy dtype: VAE
- strength
    - Controls the intensity of the ControlNet effect (default: 1.0).
    - Comfy dtype: FLOAT
    - Default: `1`
## Optional
- image
    - Optional image for ControlNet conditioning.
    - Comfy dtype: IMAGE
- inpaint_image
    - Optional image for inpainting region conditioning.
    - Comfy dtype: IMAGE
- mask
    - Optional mask to restrict the area of the ControlNet effect.
    - Comfy dtype: MASK

# Output types
- MODEL
    - The modified model with ControlNet conditioning applied.
    - Comfy dtype: MODEL

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
