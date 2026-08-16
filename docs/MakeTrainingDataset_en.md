# Documentation
- Class name: MakeTrainingDataset
- Category: model/training
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Encode images with VAE and texts with CLIP to create a training dataset of latents and conditionings.

# Input types
## Required
- images
    - List of images to encode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - VAE model for encoding images to latents.
    - Comfy dtype: VAE
    - Python dtype: object
- clip
    - CLIP model for encoding text to conditioning.
    - Comfy dtype: CLIP
    - Python dtype: object
## Optional
- texts
    - List of text captions. Can be length n (matching images), 1 (repeated for all), or omitted (uses empty string).
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- latents
    - List of latent dicts
    - Comfy dtype: LATENT
    - Python dtype: dict
- conditioning
    - List of conditioning lists
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
