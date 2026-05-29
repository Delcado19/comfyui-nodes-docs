# Documentation
- Class name: TwoSamplersForMaskUpscalerProviderPipe
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The TwoSamplersForMaskUpscalerProviderPipe node is designed to efficiently upscale images using two distinct sampling methods. It leverages a combination of a base sampler and a mask sampler, along with a mask and a Variational Autoencoder (VAE), to perform the upscaling process. The node is capable of handling different upscaling methods and schedules, and can optionally use a tiled VAE to improve performance. It is particularly suitable for applications requiring high-quality image upscaling.

# Input types
## Required
- scale_method
    - The scale_method parameter determines the algorithm used for image upscaling. This is a critical component as it directly impacts the quality and efficiency of the upscaling process.
    - Comfy dtype: str
    - Python dtype: str
- full_sample_schedule
    - The full_sample_schedule parameter determines when full sampling is performed during the upscaling process. This parameter is essential for controlling sampling frequency, thereby balancing speed and quality.
    - Comfy dtype: str
    - Python dtype: str
- use_tiled_vae
    - Using a tiled Variational AutoEncoder (VAE) can enhance the upscaling process by allowing more efficient processing of large images. This parameter is significant for optimizing performance on GPU architectures.
    - Comfy dtype: bool
    - Python dtype: bool
- base_sampler
    - The base sampler is a fundamental component of the upscaling process, responsible for generating initial samples. Its choice can greatly influence the overall result of the upscaling.
    - Comfy dtype: KSAMPLER
    - Python dtype: KSampler
- mask_sampler
    - The mask sampler works alongside the base sampler to apply specific sampling techniques to masked regions of the image. It plays a key role in achieving targeted upscaling effects.
    - Comfy dtype: KSAMPLER
    - Python dtype: KSampler
- mask
    - The mask parameter defines the image regions that will be processed by the mask sampler. It plays a vital role in selective upscaling of chosen areas.
    - Comfy dtype: MASK
    - Python dtype: Mask
- basic_pipe
    - The basic pipeline encapsulates the essential elements required for the upscaling process, including the Variational AutoEncoder (VAE). It is critical to the node's functionality.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: BasicPipe
## Optional
- tile_size
    - The tile_size parameter specifies the dimensions of tiles used when processing images with a tiled VAE. It is important for managing memory usage and processing time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- upscaler
    - The node's output is an upscaler object containing the results of the upscaling process. It is important as it represents the final output for further use or analysis.
    - Comfy dtype: UPSCALER
    - Python dtype: Upscaler

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
