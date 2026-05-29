# Documentation
- Class name: SharkOptions_Beta
- Display name: SharkOptions
- Category: RES4LYF/sampler_options
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

SharkOptions configures advanced sampling parameters for RES4LYF samplers, controlling initial noise type, noise scale, alternative denoising strength, and channel-wise CFG behavior.

# Input types
## Required
- noise_type_init
    - Selects the type of noise used at the start of the sampling process.
    - Comfy dtype: COMBO
    - Default: `"gaussian"`
    - Options: `none`, `brownian`, `gaussian`, `gaussian_backwards`, `laplacian`, `perlin`, `studentt`, `uniform`, `wavelet`, `brown`, `pink`, `white`, `blue`, `violet`, `ultraviolet_A`, `ultraviolet_B`, `ultraviolet_C`, `hires-pyramid-bicubic`, `hires-pyramid-bilinear`, `hires-pyramid-nearest`, `pyramid-bicubic`, `pyramid-bilinear`, `pyramid-nearest`, `pyramid-interpolated`, `pyramid-cascade_B`
- s_noise_init
    - Sets the scale factor applied to the initial noise.
    - Comfy dtype: FLOAT
    - Default: `1`
- denoise_alt
    - Specifies an alternative denoising strength value used during sampling.
    - Comfy dtype: FLOAT
    - Default: `1`
- channelwise_cfg
    - Enables or disables channel-wise classifier-free guidance.
    - Comfy dtype: BOOLEAN
    - Default: `false`
## Optional
- options
    - Optional existing OPTIONS object to merge these settings into.
    - Comfy dtype: OPTIONS

# Output types
- options
    - The resulting OPTIONS object containing the configured sampling parameters.
    - Comfy dtype: OPTIONS

# Source code
[View source repository on GitHub](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
