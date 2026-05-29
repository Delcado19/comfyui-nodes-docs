# Documentation
- Class name: PlasmaSampler
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The PlasmaSampler class encapsulates the process of generating samples from a given model, using various parameters to control the sampling process, such as noise, step count, and denoising factor. It aims to provide flexibility in sampling methods, allowing sample generation to adopt both stochastic and deterministic approaches.

# Input types
## Required
- model
    - The model parameter is critical because it defines the underlying generative model from which samples are drawn. It is the core of the sampling process, directly affecting the quality and characteristics of the generated samples.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- noise_seed
    - The noise seed parameter initializes the random number generator, ensuring that the noise added to the model input is reproducible. This parameter is essential for consistent results and controlled experiments.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The step count parameter determines the number of iterations the sampling process will undergo. Increasing the step count can lead to more refined and detailed samples, but also increases computational time.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration of the sampling process, influencing the balance between exploration and exploitation of the model's latent space. It is a key factor in determining the diversity and quality of the output samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise
    - The denoising parameter controls the level of noise reduction applied during the sampling process. It is important for refining the clarity and quality of the final sample, requiring a balance between noise and signal.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_noise
    - The latent noise parameter introduces additional noise in the latent space, which can encourage the generation of more diverse and creative samples. It is a key factor in enhancing output diversity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name parameter selects the specific sampling method to be used, which significantly impacts the efficiency and effectiveness of the sample generation process.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling strategy for adjusting sampling process parameters over time, which can improve the convergence and stability of the generated samples.
    - Comfy dtype: COMBO
    - Python dtype: str
- positive
    - The positive parameter provides conditional data that guides the sampling process to generate samples conforming to specific desired characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The negative parameter provides conditional data that helps exclude unwanted characteristics from the generated samples, refining the overall result.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent_image
    - The latent image parameter is the input representation of the model's latent space, essential for the sampling process to generate meaningful and coherent samples.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
## Optional
- distribution_type
    - The distribution type parameter provides a choice between default and random sampling strategies, affecting the diversity and uniqueness of the generated samples.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- latent
    - The latent parameter contains the output samples, representing the result of the sampling process. It is a critical component because it contains the generated data consistent with the input parameters and model constraints.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class PlasmaSampler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'noise_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 7.0, 'min': 0.0, 'max': 100.0, 'step': 0.1}), 'denoise': ('FLOAT', {'default': 0.9, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'latent_noise': ('FLOAT', {'default': 0.05, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'distribution_type': (['default', 'rand'],), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image': ('LATENT',)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'sample'
    CATEGORY = 'sampling'

    def sample(self, model, noise_seed, steps, cfg, denoise, sampler_name, scheduler, positive, negative, latent_image, latent_noise, distribution_type):
        rand = False
        if distribution_type == 'rand':
            rand = True
        return common_ksampler(model, noise_seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise, latent_noise, use_rand=rand)
```