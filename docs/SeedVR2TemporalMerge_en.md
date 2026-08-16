# Documentation
- Class name: SeedVR2TemporalMerge
- Category: model/latent/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Recombine sampled SeedVR2 latent temporal chunks into one latent, crossfading each overlap with a Hann window sized by the temporal_overlap wired from Split SeedVR2 Latent.

# Input types
## Required
- latents
    - The sampled temporal chunks in sequence order.
    - Comfy dtype: LATENT
    - Python dtype: dict
- temporal_overlap
    - The temporal_overlap output of Split SeedVR2 Latent. 0 = plain concatenation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - The recombined full-length latent.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
