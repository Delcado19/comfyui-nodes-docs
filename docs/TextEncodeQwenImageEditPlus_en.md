# Documentation
- Class name: TextEncodeQwenImageEditPlus
- Category: advanced/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Encodes a text prompt into conditioning for the Qwen-Image-Edit-Plus model, optionally incorporating up to three reference images to guide the edit.

# Input types
## Required
- clip
    - The CLIP model used to encode the text prompt into conditioning.
    - Comfy dtype: CLIP
- prompt
    - The text prompt describing the desired image edit or generation.
    - Comfy dtype: STRING
## Optional
- vae
    - Optional VAE model used to encode reference images into latent space.
    - Comfy dtype: VAE
- image1
    - Optional first reference image to condition the edit on.
    - Comfy dtype: IMAGE
- image2
    - Optional second reference image to condition the edit on.
    - Comfy dtype: IMAGE
- image3
    - Optional third reference image to condition the edit on.
    - Comfy dtype: IMAGE

# Output types
- CONDITIONING
    - The encoded conditioning tensor used to guide the diffusion model during sampling.
    - Comfy dtype: CONDITIONING

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
