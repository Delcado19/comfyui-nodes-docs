# Documentation
- Class name: SeedVR2Conditioning
- Category: model/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Build SeedVR2 positive/negative conditioning from a VAE latent.

# Input types
## Required
- model
    - The SeedVR2 model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae_conditioning
    - The vae_conditioning input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- positive
    - The positive conditioning for sampling.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative conditioning for sampling.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
