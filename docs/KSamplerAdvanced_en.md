# Documentation
- Class name: KSamplerAdvanced
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The KSamplerAdvanced node is designed for advanced sampling from the model through various noise configurations and scheduling options. It generates high-quality latent representations by controlling the addition of noise, which can enhance the diversity and quality of the output. The flexibility of this node lies in its ability to adapt to different sampling strategies, making it a versatile tool for exploring the latent space of generative models.

# Input types
## Required
- model
    - The model parameter is critical because it defines the generative model from which the node will sample. It is the foundation of all sampling operations, and its properties directly influence the nature of the generated latent representations.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- add_noise
    - The add_noise parameter controls whether additional noise is introduced during the sampling process. This is crucial for achieving the desired diversity and complexity in the latent samples.
    - Comfy dtype: COMBO[enable, disable]
    - Python dtype: str
- steps
    - The steps parameter specifies the number of iterations the sampling process will undergo. It is a key factor in determining the convergence and quality of the final latent samples.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration of the sampling process, influencing the balance between exploration and exploitation in the latent space. It is a key setting for achieving optimal sampling efficiency and sample quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the sampling method to be used, which is critical to the overall performance and effectiveness of the node. Different samplers can significantly alter the characteristics of the generated samples.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SAMPLERS]
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the scheduling strategy for noise application, which is crucial for managing the trade-off between sample quality and computational efficiency.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SCHEDULERS]
    - Python dtype: str
- positive
    - The positive parameter provides conditional data that guides the sampling process to generate samples that meet specific desired characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The negative parameter provides conditional data that helps the sampling process avoid generating samples with undesirable characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent_image
    - The latent_image parameter is the starting point of the sampling process. It sets the initial conditions that influence the sampling trajectory and results.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
## Optional
- noise_seed
    - The noise_seed parameter is critical for controlling the randomness in the noise generation process. It ensures that noise patterns are reproducible, which is important for consistent and reliable sampling results.
    - Comfy dtype: INT
    - Python dtype: int
- start_at_step
    - The start_at_step parameter determines the starting step of the sampling process, allowing users to control the point from which sampling begins.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The end_at_step parameter specifies the final step of the sampling process, defining the endpoint for sample generation.
    - Comfy dtype: INT
    - Python dtype: int
- return_with_leftover_noise
    - The return_with_leftover_noise parameter determines whether to include residual noise in the returned samples, which may be useful for further analysis or post-processing.
    - Comfy dtype: COMBO[disable, enable]
    - Python dtype: str

# Output types
- latent
    - The latent output contains the generated latent samples, which are the core result of the sampling process. These samples represent learned features and can be used for various downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: GPU

# Source code
```
class KSamplerAdvanced:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'add_noise': (['enable', 'disable'],), 'noise_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0, 'step': 0.1, 'round': 0.01}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image': ('LATENT',), 'start_at_step': ('INT', {'default': 0, 'min': 0, 'max': 10000}), 'end_at_step': ('INT', {'default': 10000, 'min': 0, 'max': 10000}), 'return_with_leftover_noise': (['disable', 'enable'],)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'sample'
    CATEGORY = 'sampling'

    def sample(self, model, add_noise, noise_seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, start_at_step, end_at_step, return_with_leftover_noise, denoise=1.0):
        force_full_denoise = True
        if return_with_leftover_noise == 'enable':
            force_full_denoise = False
        disable_noise = False
        if add_noise == 'disable':
            disable_noise = True
        return common_ksampler(model, noise_seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise=denoise, disable_noise=disable_noise, start_step=start_at_step, last_step=end_at_step, force_full_denoise=force_full_denoise)
```