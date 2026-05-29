# Documentation
- Class name: ClownOptions_SDE_Beta
- Display name: ClownOptions SDE
- Category: RES4LYF/sampler_options
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Configures SDE (Stochastic Differential Equation) noise options for a sampler. Controls noise types, scaling modes, and eta values for both main steps and substeps, then merges them into a sampler options object.

# Input types
## Required
- noise_type_sde
    - Sets the noise distribution type used during main SDE steps.
    - Comfy dtype: COMBO
    - Default: `"gaussian"`
    - Options: `none`, `brownian`, `gaussian`, `gaussian_backwards`, `laplacian`, `perlin`, `studentt`, `uniform`, `wavelet`, `brown`, `pink`, `white`, `blue`, `violet`, `ultraviolet_A`, `ultraviolet_B`, `ultraviolet_C`, `hires-pyramid-bicubic`, `hires-pyramid-bilinear`, `hires-pyramid-nearest`, `pyramid-bicubic`, `pyramid-bilinear`, `pyramid-nearest`, `pyramid-interpolated`, `pyramid-cascade_B`
- noise_type_sde_substep
    - Sets the noise distribution type used during substeps of each SDE step.
    - Comfy dtype: COMBO
    - Default: `"gaussian"`
    - Options: `none`, `brownian`, `gaussian`, `gaussian_backwards`, `laplacian`, `perlin`, `studentt`, `uniform`, `wavelet`, `brown`, `pink`, `white`, `blue`, `violet`, `ultraviolet_A`, `ultraviolet_B`, `ultraviolet_C`, `hires-pyramid-bicubic`, `hires-pyramid-bilinear`, `hires-pyramid-nearest`, `pyramid-bicubic`, `pyramid-bilinear`, `pyramid-nearest`, `pyramid-interpolated`, `pyramid-cascade_B`
- noise_mode_sde
    - How noise scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
    - Comfy dtype: COMBO
    - Default: `"hard"`
    - Options: `none`, `hard`, `lorentzian`, `soft`, `soft-linear`, `softer`, `eps`, `sinusoidal`, `exp`, `vpsde`, `er4`, `hard_var`
- noise_mode_sde_substep
    - How noise scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
    - Comfy dtype: COMBO
    - Default: `"hard"`
    - Options: `none`, `hard`, `lorentzian`, `soft`, `soft-linear`, `softer`, `eps`, `sinusoidal`, `exp`, `vpsde`, `er4`, `hard_var`
- eta
    - Calculated noise amount to be added, then removed, after each step.
    - Comfy dtype: FLOAT
    - Default: `0.5`
- eta_substep
    - Calculated noise amount to be added, then removed, after each step.
    - Comfy dtype: FLOAT
    - Default: `0.5`
- seed
    - Random seed for noise generation; -1 uses the global seed.
    - Comfy dtype: INT
    - Default: `-1`
## Optional
- etas
    - Optional custom sigma schedule overriding eta for main steps.
    - Comfy dtype: SIGMAS
- etas_substep
    - Optional custom sigma schedule overriding eta for substeps.
    - Comfy dtype: SIGMAS
- options
    - Existing sampler options to merge these SDE settings into.
    - Comfy dtype: OPTIONS

# Output types
- options
    - The merged sampler options object containing the configured SDE noise parameters.
    - Comfy dtype: OPTIONS

# Source code
[View source repository on GitHub](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
