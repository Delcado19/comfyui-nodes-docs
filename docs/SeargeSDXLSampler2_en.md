# Documentation
- Class name: SeargeSDXLSampler2
- Category: Searge/_deprecated_/Sampling
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

SeargeSDXLSampler2 class iteratively refines a latent image through a series of models, enhancing the quality and detail of the generated output. It uses a combination of base model and refinement model to progressively improve the representation, adjusting various parameters to control the refinement process and achieve the desired level of detail and denoising effect.

# Input types
## Required
- base_model
    - The base model is the underlying neural network used for initial sampling. It is essential for establishing the general structure and quality of the latent image.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- base_positive
    - The base positive conditioning provides the base model with important context needed to generate accurate and relevant latent images.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- base_negative
    - The base negative conditioning helps refine the sampling process by excluding unwanted features or characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- refiner_model
    - The refinement model enhances the quality of the latent image by applying advanced techniques and fine-tuning the output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- refiner_positive
    - The refinement positive conditioning further refines the image by focusing on specific details and features desired in the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- refiner_negative
    - The refinement negative conditioning ensures that the final image does not contain unwanted elements, maintaining the integrity and quality of the refinement process.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent_image
    - The latent image is the initial representation that will be iteratively improved through the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- noise_seed
    - The noise seed plays an important role in controlling the randomness and variability of the noise introduced during the sampling process, which affects the diversity and quality of the results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The number of steps in the sampling process determines the level of detail and refinement achieved in the final image.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter is a key value that affects the overall behavior and performance of the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name identifies the specific algorithm used for the sampling process, which can significantly affect the efficiency and effectiveness of the sampling.
    - Comfy dtype: SAMPLER_NAME
    - Python dtype: str
- scheduler
    - The scheduler determines the pace and progress of the sampling process, ensuring a balanced and controlled refinement.
    - Comfy dtype: SCHEDULER_NAME
    - Python dtype: str
- base_ratio
    - The base scale parameter adjusts the balance between the base model and the refinement model, affecting the focus and emphasis at different stages of the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise
    - The denoise parameter controls the level of denoising applied during the sampling process, directly affecting the clarity and sharpness of the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- refiner_prep_steps
    - The refinement preparation step is used to preprocess the latent image before the main sampling process, possibly improving the quality and consistency of the output.
    - Comfy dtype: INT
    - Python dtype: int
- noise_offset
    - The noise offset parameter introduces variability to the noise seed for the refinement model, contributing to the diversity of the final output.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_strength
    - The refinement intensity parameter adjusts the strength of the refinement process, with higher values leading to more noticeable changes in the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent_image
    - The output latent image is the result of the sampling process, showcasing enhanced details and reduced noise.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class SeargeSDXLSampler2:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_model': ('MODEL',), 'base_positive': ('CONDITIONING',), 'base_negative': ('CONDITIONING',), 'refiner_model': ('MODEL',), 'refiner_positive': ('CONDITIONING',), 'refiner_negative': ('CONDITIONING',), 'latent_image': ('LATENT',), 'noise_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551600}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 200}), 'cfg': ('FLOAT', {'default': 7.0, 'min': 0.0, 'max': 30.0, 'step': 0.5}), 'sampler_name': ('SAMPLER_NAME', {'default': 'ddim'}), 'scheduler': ('SCHEDULER_NAME', {'default': 'ddim_uniform'}), 'base_ratio': ('FLOAT', {'default': 0.8, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}, 'optional': {'refiner_prep_steps': ('INT', {'default': 0, 'min': 0, 'max': 10}), 'noise_offset': ('INT', {'default': 1, 'min': 0, 'max': 1}), 'refiner_strength': ('FLOAT', {'default': 1.0, 'min': 0.01, 'max': 1.0, 'step': 0.05})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'sample'
    CATEGORY = 'Searge/_deprecated_/Sampling'

    def sample(self, base_model, base_positive, base_negative, refiner_model, refiner_positive, refiner_negative, latent_image, noise_seed, steps, cfg, sampler_name, scheduler, base_ratio, denoise, refiner_prep_steps=None, noise_offset=None, refiner_strength=None):
        base_steps = int(steps * (base_ratio + 0.0001))
        if noise_offset is None:
            noise_offset = 1
        if refiner_strength is None:
            refiner_strength = 1.0
        if refiner_strength < 0.01:
            refiner_strength = 0.01
        if denoise < 0.01:
            return (latent_image,)
        start_at_step = 0
        input_latent = latent_image
        if refiner_prep_steps is not None:
            if refiner_prep_steps >= base_steps:
                refiner_prep_steps = base_steps - 1
            if refiner_prep_steps > 0:
                start_at_step = refiner_prep_steps
                precondition_result = nodes.common_ksampler(refiner_model, noise_seed + 2, steps, cfg, sampler_name, scheduler, refiner_positive, refiner_negative, latent_image, denoise=denoise, disable_noise=False, start_step=steps - refiner_prep_steps, last_step=steps, force_full_denoise=False)
                input_latent = precondition_result[0]
        if base_steps >= steps:
            return nodes.common_ksampler(base_model, noise_seed, steps, cfg, sampler_name, scheduler, base_positive, base_negative, input_latent, denoise=denoise, disable_noise=False, start_step=start_at_step, last_step=steps, force_full_denoise=True)
        base_result = nodes.common_ksampler(base_model, noise_seed, steps, cfg, sampler_name, scheduler, base_positive, base_negative, input_latent, denoise=denoise, disable_noise=False, start_step=start_at_step, last_step=base_steps, force_full_denoise=True)
        return nodes.common_ksampler(refiner_model, noise_seed + noise_offset, steps, cfg, sampler_name, scheduler, refiner_positive, refiner_negative, base_result[0], denoise=denoise * refiner_strength, disable_noise=False, start_step=base_steps, last_step=steps, force_full_denoise=True)
```