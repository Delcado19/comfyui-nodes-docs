# Documentation
- Class name: PixelTiledKSampleUpscalerProviderPipe
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

PixelTiledKSampleUpscalerProviderPipe is a node for providing upscalers based on tiled sampling methods. It leverages the ComfyUI_TiledKSampler extension to denoise images by splitting larger images into smaller tiles, improving image quality without introducing visible seams. This node is particularly suitable for high-resolution image processing tasks that require minimal artifacts.

# Input types
## Required
- scale_method
    - The scale method determines how the image is upscaled. This is a critical parameter as it affects the quality and style of the upscaled image.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'lanczos', 'area']
    - Python dtype: str
- seed
    - The seed is used for the random number generation process, ensuring reproducibility of denoising results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The number of steps determines the thoroughness of the denoising process; typically, more steps lead to better image quality.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration value 'cfg' is a parameter that influences the denoising process, balancing noise reduction and detail preservation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name defines the sampling strategy used during denoising, which can significantly affect the final image appearance.
    - Comfy dtype: comfy.samplers.KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler determines the rate of parameter updates during the noise process, affecting efficiency and results.
    - Comfy dtype: comfy.samplers.KSampler.SCHEDULERS
    - Python dtype: str
- denoise
    - The denoising parameter controls the strength of the denoising effect; higher values result in sharper images but may lose details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tile_width
    - The tile width specifies the width of each tile during the tiled sampling process, which is important for managing memory usage and processing time.
    - Comfy dtype: INT
    - Python dtype: int
- tile_height
    - The tile height specifies the height of each tile, working together with the tile width to control the dimensions of the tile grid.
    - Comfy dtype: INT
    - Python dtype: int
- tiling_strategy
    - The tiling strategy determines how the image is divided into tiles, with different strategies optimized for different outcomes, such as reducing seams or compatibility with certain samplers.
    - Comfy dtype: COMBO['random', 'padded', 'simple']
    - Python dtype: str
- basic_pipe
    - The base pipeline provides the foundational components required for the upscaler to operate, such as the model and VAE.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Any
## Optional
- upscale_model_opt
    - An optional parameter that allows specifying a custom upscale model during the process.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: Optional[Any]
- pk_hook_opt
    - An optional hook that can be used to modify the upscaler's behavior during the upscaling process.
    - Comfy dtype: PK_HOOK
    - Python dtype: Optional[Any]

# Output types
- upscaler
    - The node's output is an upscaler object capable of performing upscaling operations on images.
    - Comfy dtype: UPSCALER
    - Python dtype: core.PixelTiledKSampleUpscaler

# Usage tips
- Infra type: GPU

# Source code
```
class PixelTiledKSampleUpscalerProviderPipe:
    upscale_methods = ['nearest-exact', 'bilinear', 'lanczos', 'area']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'scale_method': (s.upscale_methods,), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'tile_width': ('INT', {'default': 512, 'min': 320, 'max': MAX_RESOLUTION, 'step': 64}), 'tile_height': ('INT', {'default': 512, 'min': 320, 'max': MAX_RESOLUTION, 'step': 64}), 'tiling_strategy': (['random', 'padded', 'simple'],), 'basic_pipe': ('BASIC_PIPE',)}, 'optional': {'upscale_model_opt': ('UPSCALE_MODEL',), 'pk_hook_opt': ('PK_HOOK',)}}
    RETURN_TYPES = ('UPSCALER',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Upscale'

    def doit(self, scale_method, seed, steps, cfg, sampler_name, scheduler, denoise, tile_width, tile_height, tiling_strategy, basic_pipe, upscale_model_opt=None, pk_hook_opt=None):
        if 'BNK_TiledKSampler' in nodes.NODE_CLASS_MAPPINGS:
            (model, _, vae, positive, negative) = basic_pipe
            upscaler = core.PixelTiledKSampleUpscaler(scale_method, model, vae, seed, steps, cfg, sampler_name, scheduler, positive, negative, denoise, tile_width, tile_height, tiling_strategy, upscale_model_opt, pk_hook_opt, tile_size=max(tile_width, tile_height))
            return (upscaler,)
        else:
            print("[ERROR] PixelTiledKSampleUpscalerProviderPipe: ComfyUI_TiledKSampler custom node isn't installed. You must install BlenderNeko/ComfyUI_TiledKSampler extension to use this node.")
```