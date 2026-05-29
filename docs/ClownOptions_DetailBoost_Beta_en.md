# Documentation
- Class name: ClownOptions_DetailBoost_Beta
- Display name: ClownOptions Detail Boost
- Category: RES4LYF/sampler_options
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Adds a detail boost sampler option that sharpens or softens image detail by adjusting noise scaling during sampling steps.

# Input types
## Required
- weight
    - Set to positive values to create a sharper, grittier, more detailed image. Set to negative values to soften and deepen the colors.
    - Comfy dtype: FLOAT
    - Default: `1`
- method
    - Determines whether the sampler or the model underestimates the noise level.
    - Comfy dtype: COMBO
    - Default: `"model"`
    - Options: `sampler`, `sampler_normal`, `sampler_substep`, `sampler_substep_normal`, `model`, `model_alpha`
- mode
    - Changes the steps where the effect is greatest. Most affect early steps, sinusoidal affects middle steps.
    - Comfy dtype: COMBO
    - Default: `"hard"`
    - Options: `none`, `hard`, `lorentzian`, `soft`, `soft-linear`, `softer`, `eps`, `sinusoidal`, `exp`, `vpsde`, `er4`, `hard_var`
- eta
    - The strength of the effect of the noise_scaling_mode. Linear ignores this parameter.
    - Comfy dtype: FLOAT
    - Default: `0.5`
- start_step
    - The first sampling step at which the detail boost effect is applied.
    - Comfy dtype: INT
    - Default: `3`
- end_step
    - The last sampling step at which the detail boost effect is applied.
    - Comfy dtype: INT
    - Default: `10`
## Optional
- weights
    - Optional SIGMAS input for custom weight scheduling.
    - Comfy dtype: SIGMAS
- etas
    - Optional SIGMAS input for custom eta scheduling.
    - Comfy dtype: SIGMAS
- options
    - Optional OPTIONS input to chain with existing sampler options.
    - Comfy dtype: OPTIONS

# Output types
- options
    - The configured sampler options with the detail boost settings applied.
    - Comfy dtype: OPTIONS

# Source code
[View source repository on GitHub](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
