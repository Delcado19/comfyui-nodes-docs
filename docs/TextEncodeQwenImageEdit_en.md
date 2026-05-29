# Documentation
- Class name: TextEncodeQwenImageEdit
- Category: advanced/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Encodes a text prompt into conditioning for the Qwen Image Edit model. Optionally accepts a VAE and reference image to condition on, producing a CONDITIONING output suitable for guiding image editing or generation.

# Input types
## Required
- clip
    - The CLIP model used to encode the text prompt into embeddings.
    - Comfy dtype: CLIP
- prompt
    - The text prompt string to encode into conditioning.
    - Comfy dtype: STRING
## Optional
- vae
    - Optional VAE model used to encode the reference image into latent space.
    - Comfy dtype: VAE
- image
    - Optional reference image to condition the generation or editing on.
    - Comfy dtype: IMAGE

# Output types
- CONDITIONING
    - The encoded conditioning output containing text and optionally image embeddings for the sampler.
    - Comfy dtype: CONDITIONING

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
