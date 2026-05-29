# Documentation
- Class name: TiledKSamplerProvider
- Category: ImpactPack/Sampler
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The TiledKSamplerProvider node aims to facilitate the sampling process of image denoising by utilizing a tiling strategy. It intelligently manages the division of the image into tiles, allowing efficient and seamless denoising. This node enhances the denoising process by reducing the visibility of seams between tiles, thereby contributing to a more coherent and higher quality output image.

# Input types
## Required
- seed
    - The seed parameter is crucial in the random number generation process of the sampling algorithm, ensuring the reproducibility of results. It affects the initial state of the random number generator, thereby influencing the denoising result.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter defines the number of iterations that the denoising process will undergo. It is a key factor in determining the quality of the final denoised image; more steps usually lead to better denoising results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration of the sampling process, allowing fine-tuning of the denoising algorithm's performance. It plays an important role in balancing the speed and quality of the denoising result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the type of sampler to be used in the denoising process. It is crucial for determining the sampling strategy and directly affects the effectiveness of denoising.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling strategy for the denoising steps, which is important for controlling the speed of denoising progress.
    - Comfy dtype: STRING
    - Python dtype: str
- denoise
    - The denoise parameter controls the denoising strength applied to each tile. It is a key factor in the final appearance of the denoised image; higher values result in more aggressive denoising.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tile_width
    - The tile_width parameter sets the width of each tile in the tiling strategy. It is important for determining the granularity of the denoising process and may affect the visibility of seams in the final image.
    - Comfy dtype: INT
    - Python dtype: int
- tile_height
    - The tile_height parameter sets the height of each tile in the tiling strategy. It works together with tile_width to define the overall structure of the tiling and influences the denoising result.
    - Comfy dtype: INT
    - Python dtype: int
- tiling_strategy
    - The tiling_strategy parameter determines how the image is divided into tiles. It is a key factor in reducing seam effects and the overall quality of the denoised image.
    - Comfy dtype: STRING
    - Python dtype: str
- basic_pipe
    - The basic_pipe parameter encapsulates the basic components required for the denoising process, including the model and additional settings. It is indispensable for executing the denoising algorithm.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: comfy_extras.nodes_upscale_model.BasicPipe

# Output types
- KSAMPLER
    - The output of the TiledKSamplerProvider node is a KSampler object, which represents the configured denoising sampler. It is important for subsequent image processing tasks that require denoising capabilities.
    - Comfy dtype: KSAMPLER
    - Python dtype: KSamplerWrapper

# Usage tips
- Infra type: GPU

# Source code
```
class TiledKSamplerProvider:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'tile_width': ('INT', {'default': 512, 'min': 320, 'max': MAX_RESOLUTION, 'step': 64}), 'tile_height': ('INT', {'default': 512, 'min': 320, 'max': MAX_RESOLUTION, 'step': 64}), 'tiling_strategy': (['random', 'padded', 'simple'],), 'basic_pipe': ('BASIC_PIPE',)}}
    RETURN_TYPES = ('KSAMPLER',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Sampler'

    def doit(self, seed, steps, cfg, sampler_name, scheduler, denoise, tile_width, tile_height, tiling_strategy, basic_pipe):
        (model, _, _, positive, negative) = basic_pipe
        sampler = core.TiledKSamplerWrapper(model, seed, steps, cfg, sampler_name, scheduler, positive, negative, denoise, tile_width, tile_height, tiling_strategy)
        return (sampler,)
```