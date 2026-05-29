# Documentation
- Class name: PixelKSampleUpscalerProviderPipe
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

PixelKSampleUpscalerProviderPipe is a node for increasing image resolution using various upscaling methods. It provides a robust framework for selecting and applying different scaling techniques, ensuring high-quality results. This node is essential in the image upscaling process, offering seamless integration with other system components.

# Input types
## Required
- scale_method
    - The scale_method parameter is critical for determining the upscaling technique to use. It defines the algorithmic approach for enhancing image resolution, which significantly impacts the quality of the final output.
    - Comfy dtype: str
    - Python dtype: str
- seed
    - The seed parameter plays an important role in initializing the random number generator, ensuring reproducibility of the upscaling process. This is critical for maintaining consistency across multiple runs of the node.
    - Comfy dtype: int
    - Python dtype: int
- steps
    - The steps parameter defines the number of iterations to perform during the upscaling process. It directly affects the level of detail and computational complexity of the operation.
    - Comfy dtype: int
    - Python dtype: int
- cfg
    - The cfg parameter is used to control the configuration of the upscaling model, allowing fine-tuning of the scaling process to achieve desired results.
    - Comfy dtype: float
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the sampling strategy to adopt during upscaling. It is a key determinant of the efficiency and effectiveness of the sampling process.
    - Comfy dtype: str
    - Python dtype: str
- scheduler
    - The scheduler parameter is critical for managing the pace and order of upscaling steps. It helps optimize the upscaling process for speed and quality.
    - Comfy dtype: str
    - Python dtype: str
- denoise
    - The denoise parameter enables control over noise reduction during the upscaling process. This is essential for achieving cleaner, more refined image output.
    - Comfy dtype: float
    - Python dtype: float
- use_tiled_vae
    - The use_tiled_vae parameter determines whether to use a tiled approach for the Variational Autoencoder (VAE). This can improve the efficiency of the upscaling process, especially for larger images.
    - Comfy dtype: bool
    - Python dtype: bool
- basic_pipe
    - The basic_pipe parameter encapsulates the foundational components required for the upscaling process. It is indispensable to the node's operation, providing the necessary infrastructure for image enhancement.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: BASIC_PIPE
## Optional
- tile_size
    - The tile_size parameter specifies the tile size used in the tiled approach during upscaling. It is particularly relevant when processing large images to optimize memory usage and processing time.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- upscaler
    - The upscaler output provides the final upscaled model, which is the core result of the node's operation. It represents the culmination of the upscaling process, delivering a refined and enhanced image.
    - Comfy dtype: UPSCALER
    - Python dtype: PixelKSampleUpscaler

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
