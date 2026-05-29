# Documentation
- Class name: KSampler_inspire
- Category: InspirePack/a1111_compat
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node aims to facilitate the sampling process from a given model, using various parameters to control the generation of new latent samples. It emphasizes the flexibility and adaptability of the sampling process, allowing exploration of diverse results within a defined configuration.

# Input types
## Required
- model
    - The model parameter is crucial because it defines the source of data and the foundation of the sampling process. Without a model, the node cannot perform its intended function.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed plays an important role in ensuring reproducibility and randomness of the sampling process. It is a key factor in controlling the generation of unique samples.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Steps define the progress of the sampling process, determining the number of iterations the algorithm will perform. This directly affects the diversity and quantity of output samples.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter is crucial for fine-tuning the behavior of the sampling process. It influences the balance between exploration and exploitation in the search space.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter determines the sampling strategy to be adopted, which is essential for shaping the characteristics of the resulting samples.
    - Comfy dtype: ENUM
    - Python dtype: str
- scheduler
    - The scheduler parameter is responsible for controlling the pace and adjustments of the sampling process. It plays a key role in optimizing the efficiency and effectiveness of sampling.
    - Comfy dtype: ENUM
    - Python dtype: str
- positive
    - Positive conditioning provides important context guiding the sampling process towards desired outcomes. It is a key element in achieving target results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - Negative conditioning acts as a filter to exclude unwanted features during sampling, ensuring the output meets specified constraints.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent_image
    - The latent image parameter is indispensable for the sampling process as it represents the starting point for generating new samples. It sets the foundation for subsequent transformations.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- noise_mode
    - The noise mode determines the computational resources used for noise generation, which is critical to the sampling process. It affects the performance and efficiency of the node.
    - Comfy dtype: ENUM
    - Python dtype: str
## Optional
- denoise
    - The denoise parameter is important in improving the quality of output samples by reducing noise. It helps achieve a cleaner and more coherent representation of data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_seed_mode
    - The batch seed mode affects how seeds are managed within a batch, which can influence the diversity and uniqueness of generated samples.
    - Comfy dtype: ENUM
    - Python dtype: str
- variation_seed
    - The variation seed introduces variability in the noise generation process, contributing to the diversity of output samples without altering core characteristics.
    - Comfy dtype: INT
    - Python dtype: int
- variation_strength
    - The variation strength modulates the degree of variation introduced by noise, affecting subtle differences in resulting samples.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- samples
    - The samples represent the output of the sampling process, containing newly generated latent representations. They are the direct result of the node's execution and are valuable for further analysis or applications.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class KSampler_inspire:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image': ('LATENT',), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'noise_mode': (['GPU(=A1111)', 'CPU'],), 'batch_seed_mode': (['incremental', 'comfy', 'variation str inc:0.01', 'variation str inc:0.05'],), 'variation_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'variation_strength': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'sample'
    CATEGORY = 'InspirePack/a1111_compat'

    def sample(self, model, seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise, noise_mode, batch_seed_mode='comfy', variation_seed=None, variation_strength=None):
        return common_ksampler(model, seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise, noise_mode, incremental_seed_mode=batch_seed_mode, variation_seed=variation_seed, variation_strength=variation_strength)
```