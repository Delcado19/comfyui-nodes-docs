# Documentation
- Class name: KSamplerAdvanced_inspire_pipe
- Category: InspirePack/a1111_compat
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node facilitates the advanced sampling process in the InspirePack pipeline, integrating noise management and scheduling mechanisms to refine the generation of latent representations.

# Input types
## Required
- basic_pipe
    - The basic_pipe parameter is required because it provides the foundational components needed for sampling, including the model, clip, and other essential elements.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, ...]
- add_noise
    - This parameter controls whether noise is introduced during sampling, affecting the diversity and quality of the generated latent image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
    - The noise_seed parameter is crucial for reproducibility of noise patterns, ensuring the same noise can be regenerated for consistent results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter defines the progression of the sampling process; higher values yield finer and more detailed latent images.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the sampler's configuration settings, influencing the overall behavior and output of the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter selects the specific sampling algorithm to use, directly impacting the efficiency and effectiveness of sampling.
    - Comfy dtype: ENUM
    - Python dtype: str
- scheduler
    - The scheduler parameter specifies the scheduling strategy for sampling, optimizing the trade‑off between speed and quality.
    - Comfy dtype: ENUM
    - Python dtype: str
- latent_image
    - The latent_image parameter serves as the input to the sampling process, forming the basis for generating new latent representations.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- start_at_step
    - The start_at_step parameter indicates the initial step of the sampling process, determining the starting point for latent image generation.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The end_at_step parameter defines the final step of the sampling process, setting the boundary for latent image generation.
    - Comfy dtype: INT
    - Python dtype: int
- noise_mode
    - The noise_mode parameter decides the computational resources used for noise generation, either leveraging GPU parallelism or CPU sequential processing.
    - Comfy dtype: ENUM
    - Python dtype: str

# Output types
- latent
    - The latent parameter represents the output of the sampling process, providing a refined and detailed latent representation for further pipeline use.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - The vae parameter includes the variational auto‑encoder component of the output, capturing the learned data distribution and providing a foundation for further analysis and generation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class KSamplerAdvanced_inspire_pipe:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'basic_pipe': ('BASIC_PIPE',), 'add_noise': ('BOOLEAN', {'default': True, 'label_on': 'enable', 'label_off': 'disable'}), 'noise_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0, 'step': 0.5, 'round': 0.01}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'latent_image': ('LATENT',), 'start_at_step': ('INT', {'default': 0, 'min': 0, 'max': 10000}), 'end_at_step': ('INT', {'default': 10000, 'min': 0, 'max': 10000}), 'noise_mode': (['GPU(=A1111)', 'CPU'],), 'return_with_leftover_noise': ('BOOLEAN', {'default': False, 'label_on': 'enable', 'label_off': 'disable'}), 'batch_seed_mode': (['incremental', 'comfy', 'variation str inc:0.01', 'variation str inc:0.05'],), 'variation_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'variation_strength': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}, 'optional': {'noise_opt': ('NOISE',)}}
    RETURN_TYPES = ('LATENT', 'VAE')
    FUNCTION = 'sample'
    CATEGORY = 'InspirePack/a1111_compat'

    def sample(self, basic_pipe, add_noise, noise_seed, steps, cfg, sampler_name, scheduler, latent_image, start_at_step, end_at_step, noise_mode, return_with_leftover_noise, denoise=1.0, batch_seed_mode='comfy', variation_seed=None, variation_strength=None, noise_opt=None):
        (model, clip, vae, positive, negative) = basic_pipe
        latent = KSamplerAdvanced_inspire().sample(model=model, add_noise=add_noise, noise_seed=noise_seed, steps=steps, cfg=cfg, sampler_name=sampler_name, scheduler=scheduler, positive=positive, negative=negative, latent_image=latent_image, start_at_step=start_at_step, end_at_step=end_at_step, noise_mode=noise_mode, return_with_leftover_noise=return_with_leftover_noise, denoise=denoise, batch_seed_mode=batch_seed_mode, variation_seed=variation_seed, variation_strength=variation_strength, noise_opt=noise_opt)[0]
        return (latent, vae)
```