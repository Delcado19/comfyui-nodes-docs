# Documentation
- Class name: Legacy_SharkSampler
- Category: RES4LYF/legacy/samplers
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Legacy_SharkSampler is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

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
- noise_normalize
    - The noise_normalize input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_stdev
    - The noise_stdev input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mean
    - The noise_mean input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_is_latent
    - The noise_is_latent input is used by this node during execution.
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
- sampler_mode
    - The sampler_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - The denoise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- truncate_conditioning
    - The truncate_conditioning input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
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
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
## Optional
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- latent_noise
    - The latent_noise input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_noise_match
    - The latent_noise_match input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoised
    - The denoised output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- output_fp64
    - The output_fp64 output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoised_fp64
    - The denoised_fp64 output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
