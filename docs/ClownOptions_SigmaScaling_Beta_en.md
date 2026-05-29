# Documentation
- Class name: ClownOptions_SigmaScaling_Beta
- Display name: ClownOptions Sigma Scaling
- Category: RES4LYF/sampler_options
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Configures sigma scaling options for the RES4LYF sampler, controlling SDE noise levels and sigma schedule adjustments to influence detail, texture, and color depth during sampling.

# Input types
## Required
- s_noise
    - Adds extra SDE noise. Values around 1.03-1.07 can lead to a moderate boost in detail and paint textures.
    - Comfy dtype: FLOAT
    - Default: `1`
- s_noise_substep
    - Adds extra SDE noise. Values around 1.03-1.07 can lead to a moderate boost in detail and paint textures.
    - Comfy dtype: FLOAT
    - Default: `1`
- noise_anchor_sde
    - Typically set to between 1.0 and 0.0. Lower values cerate a grittier, more detailed image.
    - Comfy dtype: FLOAT
    - Default: `1`
- lying
    - Downscales the sigma schedule. Values around 0.98-0.95 can lead to a large boost in detail and paint textures.
    - Comfy dtype: FLOAT
    - Default: `1`
- lying_inv
    - Upscales the sigma schedule. Will soften the image and deepen colors. Use after d_noise to counteract desaturation.
    - Comfy dtype: FLOAT
    - Default: `1`
- lying_start_step
    - Comfy dtype: INT
    - Default: `0`
- lying_inv_start_step
    - Comfy dtype: INT
    - Default: `1`
## Optional
- s_noises
    - Provides a custom SIGMAS schedule for primary sampling steps.
    - Comfy dtype: SIGMAS
- s_noises_substep
    - Provides a custom SIGMAS schedule for substep sampling.
    - Comfy dtype: SIGMAS
- options
    - Accepts an existing OPTIONS object to merge these settings into.
    - Comfy dtype: OPTIONS

# Output types
- options
    - Returns the OPTIONS object containing the configured sigma scaling parameters.
    - Comfy dtype: OPTIONS

# Source code
[View source repository on GitHub](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
