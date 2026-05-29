# Documentation
- Class name: Tiled_KSampler
- Category: Sampling/Tiled
- Output node: False
- Repo Ref: https://github.com/FlyingFireCo/tiled_ksampler.git

The Tiled_KSampler node is designed to perform efficient sampling operations by dividing the sampling process into smaller, more manageable tiled regions. It leverages the concept of tiling to enhance the sampling process, enabling it to handle larger models and datasets. This node aims to provide a powerful and scalable solution for sampling tasks within its category.

# Input types
## Required
- model
    - The model parameter is critical for the Tiled_KSampler node because it defines the underlying model architecture used for sampling. This parameter directly affects the node's execution and the quality of sampling results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed parameter initializes the random number generator, ensuring reproducibility of the sampling process. It plays a key role in determining the starting point for sampling iterations.
    - Comfy dtype: INT
    - Python dtype: int
- tiling
    - The tiling parameter specifies whether the sampling should be performed using the tiling method. It is important for controlling the node's operation mode and affects the efficiency of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter determines the number of iterations for the sampling process. It is a key factor in controlling the duration and thoroughness of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, representing the configuration value, is used to control parameters of the sampling process. It is an important factor for fine-tuning node performance on different sampling tasks.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter selects the specific sampling method to be used within the node. It is crucial for tailoring the node's functionality to the desired sampling technique.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the scheduling algorithm to be applied during the sampling process. It is a key component for managing sampling steps and achieving desired results.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive parameter provides positive conditioning information to guide the sampling process towards desired outcomes. It is important for influencing the direction of sampling iterations.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- negative
    - The negative parameter provides negative conditioning information to avoid certain outcomes during sampling. It plays a significant role in shaping the sampling results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- latent_image
    - The latent_image parameter is a key input representing the initial latent state for the sampling process. It lays the foundation for subsequent sampling iterations.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
## Optional
- denoise
    - The denoise parameter adjusts the denoising strength during the sampling process, allowing control over the level of noise reduction. It is an optional but useful setting for refining the sampling output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The latent output represents the final sampled latent state produced by the sampling process. It is important because it contains the result of the node's operation and serves as input for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class Tiled_KSampler:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model': ('MODEL',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'tiling': ('INT', {'default': 1, 'min': 0, 'max': 1}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image': ('LATENT',), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'sample'
    CATEGORY = 'Sampling/Tiled'

    def apply_circular(self, model, enable):
        for layer in [layer for layer in model.modules() if isinstance(layer, torch.nn.Conv2d)]:
            layer.padding_mode = 'circular' if enable else 'zeros'

    def sample(self, model, seed, tiling, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise=1.0):
        self.apply_circular(model.model, tiling == 1)
        return nodes.common_ksampler(model, seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise=denoise)
```