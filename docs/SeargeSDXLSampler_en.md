# Documentation
- Class name: SeargeSDXLSampler
- Category: Searge/_deprecated_/Sampling
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeSDXLSampler node is designed to facilitate the sampling process within deep learning frameworks, particularly suited for style transfer tasks. It combines a base model and a refinement model to progressively improve the quality of generated outputs, starting from a latent image and applying denoising techniques.

# Input types
## Required
- base_model
    - The base model is essential to the sampling process, forming the foundation of the output. This is the initial neural network used to generate the base layer of the output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- base_positive
    - Base positive conditioning is crucial for guiding the style and content of the generated image toward the desired result, ensuring the image aligns with the target domain.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- base_negative
    - Base negative conditioning helps avoid unwanted features or styles in the generated image, making the output more consistent with the expected result.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- refiner_model
    - The refinement model plays a key role in improving the quality of the base output by applying additional layers and fine-tuning the final result.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- refiner_positive
    - Refinement positive conditioning further refines the image to emphasize specific features or styles, ensuring the final output has higher detail and fidelity.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- refiner_negative
    - Refinement negative conditioning is used to suppress certain features or styles that may not meet the expected results, ensuring the final image meets quality standards.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- latent_image
    - The latent image is the starting point of the sampling process, representing the initial state from which the final image is generated and developed.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- noise_seed
    - The noise seed plays an important role in introducing variability and randomness into the sampling process, ensuring diversity in the generated outputs.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Steps define the number of iterations the sampling process will undergo, directly affecting the detail and refinement level of the final image.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter is crucial for adjusting the balance between style and content in the generated image, ensuring a harmonious blend of both.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name determines the specific sampling strategy to be used, which significantly impacts the efficiency and quality of the sampling process.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SAMPLERS]
    - Python dtype: str
- scheduler
    - The scheduler determines the pace and progression of the sampling process, ensuring a smooth transition from the initial state to the final state.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SCHEDULERS]
    - Python dtype: str
- base_ratio
    - The base scale parameter adjusts the proportion of total steps dedicated to the base sampling phase, affecting the initial quality of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise
    - The denoising parameter controls the level of noise reduction applied during the sampling process, directly affecting the clarity and sharpness of the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- 
    - The output is the latent representation of the image, containing the final state after the sampling process is complete, representing the combination of various inputs and parameters.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class SeargeSDXLSampler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_model': ('MODEL',), 'base_positive': ('CONDITIONING',), 'base_negative': ('CONDITIONING',), 'refiner_model': ('MODEL',), 'refiner_positive': ('CONDITIONING',), 'refiner_negative': ('CONDITIONING',), 'latent_image': ('LATENT',), 'noise_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 30, 'min': 1, 'max': 1000}), 'cfg': ('FLOAT', {'default': 7.0, 'min': 0.0, 'max': 100.0, 'step': 0.5}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS, {'default': 'dpmpp_2m'}), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS, {'default': 'karras'}), 'base_ratio': ('FLOAT', {'default': 0.8, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    RETURN_NAMES = ('',)
    FUNCTION = 'sample'
    CATEGORY = 'Searge/_deprecated_/Sampling'

    def sample(self, base_model, base_positive, base_negative, refiner_model, refiner_positive, refiner_negative, latent_image, noise_seed, steps, cfg, sampler_name, scheduler, base_ratio, denoise):
        base_steps = int(steps * base_ratio)
        if denoise < 0.01:
            return (latent_image,)
        if base_steps >= steps:
            return nodes.common_ksampler(base_model, noise_seed, steps, cfg, sampler_name, scheduler, base_positive, base_negative, latent_image, denoise=denoise, disable_noise=False, start_step=0, last_step=steps, force_full_denoise=True)
        base_result = nodes.common_ksampler(base_model, noise_seed, steps, cfg, sampler_name, scheduler, base_positive, base_negative, latent_image, denoise=denoise, disable_noise=False, start_step=0, last_step=base_steps, force_full_denoise=False)
        return nodes.common_ksampler(refiner_model, noise_seed, steps, cfg, sampler_name, scheduler, refiner_positive, refiner_negative, base_result[0], denoise=1.0, disable_noise=True, start_step=base_steps, last_step=steps, force_full_denoise=True)
```