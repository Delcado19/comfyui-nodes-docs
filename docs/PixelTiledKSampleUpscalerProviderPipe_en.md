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
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
