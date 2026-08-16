# Documentation
- Class name: LTX2SamplingPreviewOverride
- Category: KJNodes/ltxv
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Overrides the LTX2 preview sampling preview function, temporary measure until previews are in comfy core

# Input types
## Required
- model
    - The model to add preview override to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- preview_rate
    - Preview frame rate.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- latent_upscale_model
    - Optional upscale model to use for higher resolution previews.
    - Comfy dtype: LATENT_UPSCALE_MODEL
    - Python dtype: object
- vae
    - VAE model to use normalizing the latents for the upscale model.
    - Comfy dtype: VAE
    - Python dtype: object

# Output types
- MODEL
    - The model with Sampling Preview Override.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
