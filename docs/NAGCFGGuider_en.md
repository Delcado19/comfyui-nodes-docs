# Documentation
- Class name: NAGCFGGuider
- Category: sampling/custom_sampling/guiders
- Output node: False
- Repo Ref: https://github.com/Delcado19/ComfyUI-NAG

A guider node that combines CFG with Negative Attention Guidance (NAG) using a separate negative conditioning and configurable extrapolation parameters for enhanced sampling control.

# Input types
## Required
- model
    - The diffusion model to be guided during sampling.
    - Comfy dtype: MODEL
- positive
    - The positive conditioning prompt or embedding.
    - Comfy dtype: CONDITIONING
- negative
    - The negative conditioning prompt or embedding for CFG.
    - Comfy dtype: CONDITIONING
- nag_negative
    - The conditioning used for Negative Attention Guidance extrapolation.
    - Comfy dtype: CONDITIONING
- cfg
    - The CFG scale multiplier for classifier-free guidance.
    - Comfy dtype: FLOAT
    - Default: `1`
- nag_scale
    - Attention feature extrapolation strength. Valid range: 0.0 to 100.0; default: 5.0. NAG guidance is only applied when this is greater than 1.0.
    - Comfy dtype: FLOAT
    - Default: `5`
- nag_tau
    - Normalization threshold. Valid range: 1.0 to 10.0; default: 2.5. Higher values produce stronger negative guidance.
    - Comfy dtype: FLOAT
    - Default: `2.5`
- nag_alpha
    - Blend between original and extrapolated attention. Valid range: 0.0 to 1.0; default: 0.25. Higher values produce stronger negative guidance.
    - Comfy dtype: FLOAT
    - Default: `0.25`
- nag_sigma_end
    - Stop applying NAG once sampling reaches this sigma. Valid range: 0.0 to 20.0; default: 0.0. Flow models such as Flux often work well around 0.75.
    - Comfy dtype: FLOAT
    - Default: `0`
- latent_image
    - The initial latent image (noise) to start the sampling process.
    - Comfy dtype: LATENT

# Output types
- GUIDER
    - A guider configuration object that applies CFG and NAG during sampling.
    - Comfy dtype: GUIDER

# Source code
[View source repository on GitHub](https://github.com/Delcado19/ComfyUI-NAG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
