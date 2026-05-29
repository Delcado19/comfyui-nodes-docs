# Documentation
- Class name: CheckpointLoader|pysssss
- Display name: Checkpoint Loader 🐍
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/pythongosssss/ComfyUI-Custom-Scripts

Loads a diffusion model checkpoint, diffusion models are used to denoise latents.

# Input types
## Required
- ckpt_name
    - The name of the checkpoint (model) to load.
    - Comfy dtype: COMBO
    - Options: populated at runtime from installed files
## Optional
- prompt
    - Comfy dtype: STRING

# Output types
- MODEL
    - The model used for denoising latents.
    - Comfy dtype: MODEL
- CLIP
    - The CLIP model used for encoding text prompts.
    - Comfy dtype: CLIP
- VAE
    - The VAE model used for encoding and decoding images to and from latent space.
    - Comfy dtype: VAE
- example
    - Comfy dtype: STRING

# Source code
[View source repository on GitHub](https://github.com/pythongosssss/ComfyUI-Custom-Scripts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
