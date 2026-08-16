# Documentation
- Class name: LTX2AudioLatentNormalizingSampling
- Category: KJNodes/ltxv
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Improves LTX2 generated audio quality by normalizing audio latents at specified sampling steps.

# Input types
## Required
- model
    - The model to add preview override to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- audio_normalization_factors
    - Comma-separated list of audio normalization factors to apply at each sampling step. For example, '1,1,0.25,1,1,0.25,1,1' will apply a factor of 0.25 at the 3rd and 6th steps.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- MODEL
    - The model with Audio Latent Normalizing Sampling.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
