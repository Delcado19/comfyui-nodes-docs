# Documentation
- Class name: SamplerCustomWithNAG
- Category: sampling/custom_sampling
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

SamplerCustomWithNAG is a ComfyUI node registered by `custom_nodes.ComfyUI-NAG`. The live metadata did not provide a longer description.

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
- noise_seed
    - The noise_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- nag_scale
    - Attention feature extrapolation strength. Valid range: 0.0 to 100.0; default: 5.0. NAG guidance is only applied when this is greater than 1.0.
    - Comfy dtype: FLOAT
    - Python dtype: float
- nag_tau
    - Normalization threshold. Valid range: 1.0 to 10.0; default: 2.5. Higher values produce stronger negative guidance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- nag_alpha
    - Blend between original and extrapolated attention. Valid range: 0.0 to 1.0; default: 0.25. Higher values produce stronger negative guidance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- nag_sigma_end
    - Stop applying NAG once sampling reaches this sigma. Valid range: 0.0 to 20.0; default: 0.0. Flow models such as Flux often work well around 0.75.
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
- nag_negative
    - The conditioning describing the attributes you want to exclude from the image for NAG.
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

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoised_output
    - The denoised_output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
