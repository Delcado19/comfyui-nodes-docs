# Documentation
- Class name: Flux2KleinKSamplerExperimental
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer

Flux.2Klein 9B Enhancement Nodes Suite

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- steps
    - Denoising steps. Distilled: 4. Base: 25-50.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - 1.0 = full denoise from pure noise. Lower values blend noise into the input latent for img2img.
    - Comfy dtype: FLOAT
    - Python dtype: float
- base_shift
    - Schedule shift at minimum resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_shift
    - Schedule shift at maximum resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- cfg_scale
    - Classifier-free guidance scale. 1.0 = disabled (distilled default). Base model uses ~4.0. Requires negative conditioning.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guidance_embed
    - Embedded guidance value. Only active if the loaded model has a guidance embedding layer. Klein 9B models do not — this will be ignored for them.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
