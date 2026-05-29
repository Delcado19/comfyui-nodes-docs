
# Documentation
- Class name: easy preSamplingCustom
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The preSamplingCustom node is specifically designed for custom pre-sampling configuration in the generation pipeline, allowing tailored operations on the latent space and sampling parameters to achieve specific image generation effects.

# Input types
## Required
- pipe
    - Specify the pipeline configuration, including the model, positive and negative prompts, and other settings as the foundation for the pre-sampling process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- guider
    - Determine the guidance strategy for the sampling process, providing options such as CFG, DualCFG, etc., defaulting to 'Basic'.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cfg
    - Control the condition factor, affecting the strength of conditions applied during the sampling process, providing default values and ranges.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_negative
    - Specify the negative condition factor, adjusting the influence of negative conditions during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Select the specific sampler used during the pre-sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Select the scheduler that controls the sampling steps, affecting the progression of the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - Define the number of steps to take during the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- sigma_max
    - Set the maximum sigma value for noise adjustment during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sigma_min
    - Determine the minimum sigma value, setting the lower bound for noise adjustment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rho
    - Adjust the rho parameter, affecting sampling dynamics.
    - Comfy dtype: FLOAT
    - Python dtype: float
- beta_d
    - Control the beta_d parameter, affecting the diffusion process during sampling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- beta_min
    - Set the minimum value of beta, affecting the lower bound of the diffusion process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- eps_s
    - Specify the eps_s parameter, adjusting the step size during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- flip_sigmas
    - Enable or disable flipping of sigma values, changing the noise pattern during the sampling process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- denoise
    - Adjust the denoising factor, affecting the clarity and quality of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- add_noise
    - Enable or disable noise addition, affecting the texture and detail of the generated image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- seed
    - Set the seed for random number generation, ensuring reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int

## Optional
- image_to_latent
    - Convert the input image to a latent representation and integrate it into the pre-sampling process.
    - Comfy dtype: IMAGE
    - Python dtype: object
- latent
    - Provide a latent representation directly used in the pre-sampling process.
    - Comfy dtype: LATENT
    - Python dtype: object
- optional_sampler
    - Optionally specify an alternative sampler for the pre-sampling process.
    - Comfy dtype: SAMPLER
    - Python dtype: str
- optional_sigmas
    - Optionally provide a custom set of sigma values for noise adjustment.
    - Comfy dtype: SIGMAS
    - Python dtype: list

# Output types
- pipe
    - Return the modified pipeline configuration, now containing custom pre-sampling settings, ready for further processing or image generation.
    - Comfy dtype: PIPE_LINE
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
