# Documentation
- Class name: SeedVR2TemporalChunk
- Category: model/latent/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Split a SeedVR2 video latent into overlapping temporal chunks small enough to sample one at a time within VRAM, wiring latents outputs to both Apply SeedVR2 Conditioning and the sampler latent input before recombining with Merge SeedVR2 Latents.

# Input types
## Required
- latent
    - The VAE-encoded SeedVR2 latent to split.
    - Comfy dtype: LATENT
    - Python dtype: dict
- temporal_overlap
    - Latent frames shared between adjacent chunks and crossfaded at merge; 0 = no overlap.
    - Comfy dtype: INT
    - Python dtype: int
- chunking_mode
    - manual = use frames_per_chunk exactly; auto = predict the largest chunk that fits free VRAM.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object

# Output types
- latents
    - The temporal chunks in sequence order.
    - Comfy dtype: LATENT
    - Python dtype: dict
- temporal_overlap
    - The effective latent-frame overlap between adjacent chunks, for Merge SeedVR2 Latents.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
