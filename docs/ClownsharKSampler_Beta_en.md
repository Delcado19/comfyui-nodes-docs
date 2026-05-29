# Documentation
- Class name: ClownsharKSampler_Beta
- Display name: ClownsharKSampler
- Category: RES4LYF/samplers
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownsharKSampler is a custom sampler node in the RES4LYF suite that generates latent images by running a denoising process with configurable noise scheduling, CFG, and optional guide-based conditioning. It supports multiple sampler algorithms, schedulers, and a bongmath mode for alternative noise calculations. The node outputs both the raw and denoised latent results along with any modified options.

# Input types
## Required
- eta
    - Calculated noise amount to be added, then removed, after each step.
    - Comfy dtype: FLOAT
    - Default: `0.5`
- sampler_name
    - Selects the sampling algorithm to use for the denoising process.
    - Comfy dtype: COMBO
    - Default: `"multistep/res_2m"`
    - Options: populated at runtime from installed files
- scheduler
    - Chooses the noise schedule that controls how noise levels change across steps.
    - Comfy dtype: COMBO
    - Default: `"beta57"`
    - Options: `simple`, `sgm_uniform`, `karras`, `exponential`, `ddim_uniform`, `beta`, `normal`, `linear_quadratic`, `kl_optimal`, `bong_tangent`, `beta57`
- steps
    - Defines the total number of denoising steps to perform.
    - Comfy dtype: INT
    - Default: `30`
- steps_to_run
    - Limits how many of the total steps to actually execute; -1 runs all steps.
    - Comfy dtype: INT
    - Default: `-1`
- denoise
    - Controls the strength of denoising applied, where 1 is full denoising and 0 applies none.
    - Comfy dtype: FLOAT
    - Default: `1`
- cfg
    - Sets the classifier-free guidance scale that controls how strongly conditioning influences generation.
    - Comfy dtype: FLOAT
    - Default: `5.5`
- seed
    - Provides the random seed for reproducible noise generation.
    - Comfy dtype: INT
    - Default: `0`
- sampler_mode
    - Comfy dtype: COMBO
    - Default: `"standard"`
    - Options: `unsample`, `standard`, `resample`
- bongmath
    - Enables or disables an alternative mathematical approach to noise calculation.
    - Comfy dtype: BOOLEAN
    - Default: `true`
## Optional
- model
    - The diffusion model used for the denoising process.
    - Comfy dtype: MODEL
- positive
    - Conditioning input that guides the generation toward desired features.
    - Comfy dtype: CONDITIONING
- negative
    - Conditioning input that steers the generation away from unwanted features.
    - Comfy dtype: CONDITIONING
- latent_image
    - The initial latent image to denoise; if empty, generates from pure noise.
    - Comfy dtype: LATENT
- sigmas
    - Custom sigma values that override the scheduler's default noise schedule.
    - Comfy dtype: SIGMAS
- guides
    - Additional guidance inputs that influence the sampling process.
    - Comfy dtype: GUIDES
- options
    - Extra configuration options passed to the sampler.
    - Comfy dtype: OPTIONS

# Output types
- output
    - The raw latent output from the sampler before final denoising.
    - Comfy dtype: LATENT
- denoised
    - The fully denoised latent image ready for decoding.
    - Comfy dtype: LATENT
- options
    - The options object, potentially modified during sampling.
    - Comfy dtype: OPTIONS

# Source code
[View source repository on GitHub](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
