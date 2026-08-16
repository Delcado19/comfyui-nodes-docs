# Documentation
- Class name: UltraSharkSampler
- Category: RES4LYF/legacy/samplers/UltraCascade
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

For use with Stable Cascade and UltraCascade.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- add_noise
    - The add_noise input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- normalize_noise
    - The normalize_noise input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_type
    - The noise_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- alpha
    - The alpha input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- k
    - The k input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_seed
    - The noise_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- sampler
    - The sampler input is used by this node during execution.
    - Comfy dtype: SAMPLER
    - Python dtype: object
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- guide_type
    - The guide_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- guide_weight
    - The guide_weight input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- guide
    - The guide input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- guide_weights
    - The guide_weights input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoised_output
    - The denoised_output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_batch
    - The latent_batch output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
