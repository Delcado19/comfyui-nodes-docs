# Documentation
- Class name: TiledKSampler
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_TiledKSampler.git

The TiledKSampler node facilitates high-resolution image generation by dividing the task into smaller, more manageable portions called tiles. It allows sophisticated control over the sampling process by applying user-defined tile strategies and iteratively refining the image across multiple steps, enabling the integration of various conditioning inputs to guide the generation process.

# Input types
## Required
- model
- The model parameter is crucial as it defines the underlying generative model used to generate image samples. It is the core component that determines the output type and quality.
    - Comfy dtype: MODEL
    - Python dtype: comfy.sd.Model
- seed
- The seed is used to initialize the random number generator, ensuring the image sampling process is reproducible and consistent across different runs.
    - Comfy dtype: INT
    - Python dtype: int
- tile_width
- Tile width determines the horizontal dimension of each tile, affecting the granularity of the sampling process and the level of detail in the final image.
    - Comfy dtype: INT
    - Python dtype: int
- tile_height
- Tile height determines the vertical dimension of each tile, directly affecting the overall structure and composition of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- tiling_strategy
- The tile strategy parameter defines the method for dividing the image into tiles, which can significantly change the efficiency and quality of the sampling process.
    - Comfy dtype: COMBO
    - Python dtype: str
- steps
- The steps parameter determines the iterative refinement process, with higher values leading to more detailed and nuanced image generation.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- The cfg parameter is typically related to model-specific settings and plays a key role in the overall performance and output quality of image sampling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
- The sampler_name parameter specifies the type of sampler to use, which can greatly influence the style and characteristics of the generated image.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
- The scheduler parameter defines the strategy for adjusting the sampling process over time, affecting the convergence and stability of image generation.
    - Comfy dtype: COMBO
    - Python dtype: str
- positive
- Positive conditioning input guides image generation toward desired features or characteristics, playing a key role in shaping the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, Any]]
- negative
- Negative conditioning input is used to exclude certain features or characteristics from image generation, allowing for more controlled and specific results.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, Any]]
- latent_image
- The latent_image parameter contains the initial latent representation of the image, which is iteratively refined through the sampling process to generate the final image.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
- denoise
- The denoise parameter controls the level of noise reduction applied during the sampling process, affecting the clarity and quality of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent_image
- The output_latent contains the refined latent representation after the sampling process, encapsulating the final generated image and its associated metadata.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: GPU

# Source code
```
class TiledKSampler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'tile_width': ('INT', {'default': 512, 'min': 256, 'max': MAX_RESOLUTION, 'step': 64}), 'tile_height': ('INT', {'default': 512, 'min': 256, 'max': MAX_RESOLUTION, 'step': 64}), 'tiling_strategy': (['random', 'random strict', 'padded', 'simple'],), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image': ('LATENT',), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'sample'
    CATEGORY = 'sampling'

    def sample(self, model, seed, tile_width, tile_height, tiling_strategy, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise):
        steps_total = int(steps / denoise)
        return sample_common(model, 'enable', seed, tile_width, tile_height, tiling_strategy, steps_total, cfg, sampler_name, scheduler, positive, negative, latent_image, steps_total - steps, steps_total, 'disable', denoise=1.0, preview=True)
```