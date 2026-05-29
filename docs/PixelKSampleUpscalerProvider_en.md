# Documentation
- Class name: PixelKSampleUpscalerProvider
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

PixelKSampleUpscalerProvider is a node for image upscaling that supports multiple upscaling methods. The node encapsulates the logic for selecting an upscaling technique and applying it to the input image, providing a seamless interface for enhancing image quality.

# Input types
## Required
- scale_method
- The scaling method determines the algorithm used for image upscaling. This is a key parameter because it directly affects the quality and style of the upscaled output.
    - Comfy dtype: str
    - Python dtype: str
- model
- Model parameters are critical because they define the machine‑learning model used in the upscaling process. Model selection can significantly impact the final result.
    - Comfy dtype: MODEL
    - Python dtype: Any
- vae
- VAE (variational auto‑encoder) is used for feature extraction or latent‑space manipulation during upscaling. Its configuration can enhance detail and quality of the upscaled image.
    - Comfy dtype: VAE
    - Python dtype: Any
- seed
- The seed provides a known starting point for random number generation, ensuring reproducibility of the upscaling process, which is essential for consistent results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
- Steps determine the number of iterations during upscaling, which can affect convergence and final output quality.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- The configuration value 'cfg' adjusts the balance between detail and artifacts in the upscaled image, playing an important role in the final appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
- The sampler name selects the sampling strategy used during upscaling, which can greatly influence efficiency and results.
    - Comfy dtype: str
    - Python dtype: str
- scheduler
- The scheduler determines the rate of parameter updates during upscaling, affecting stability and performance of the output.
    - Comfy dtype: str
    - Python dtype: str
- positive
- Positive prompting guides the model during upscaling, focusing on enhancing specific features or aspects of the image.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
- Negative prompting helps suppress certain artifacts or features by guiding the model, avoiding unwanted effects during upscaling.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- denoise
- The denoising parameter controls the level of noise reduction applied to the upscaled image, improving clarity and cleanliness of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_tiled_vae
- Using a tiled VAE allows processing by breaking a large image into smaller, more manageable tiles, which is beneficial for memory efficiency.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tile_size
- When using a tiled VAE, the tile size specifies the dimensions of the tiles used for the image, affecting the granularity of the upscaling process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- upscaler
- The upscaler is the node's primary output, representing the upscaled image or a model that can be used for further upscaling. It encapsulates the result of the upscaling process.
    - Comfy dtype: UPSCALER
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class PixelKSampleUpscalerProvider:
    upscale_methods = ['nearest-exact', 'bilinear', 'lanczos', 'area']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'scale_method': (s.upscale_methods,), 'model': ('MODEL',), 'vae': ('VAE',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'use_tiled_vae': ('BOOLEAN', {'default': False, 'label_on': 'enabled', 'label_off': 'disabled'}), 'tile_size': ('INT', {'default': 512, 'min': 320, 'max': 4096, 'step': 64})}, 'optional': {'upscale_model_opt': ('UPSCALE_MODEL',), 'pk_hook_opt': ('PK_HOOK',)}}
    RETURN_TYPES = ('UPSCALER',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Upscale'

    def doit(self, scale_method, model, vae, seed, steps, cfg, sampler_name, scheduler, positive, negative, denoise, use_tiled_vae, upscale_model_opt=None, pk_hook_opt=None, tile_size=512):
        upscaler = core.PixelKSampleUpscaler(scale_method, model, vae, seed, steps, cfg, sampler_name, scheduler, positive, negative, denoise, use_tiled_vae, upscale_model_opt, pk_hook_opt, tile_size=tile_size)
        return (upscaler,)
```