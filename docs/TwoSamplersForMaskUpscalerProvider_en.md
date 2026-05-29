# Documentation
- Class name: TwoSamplersForMaskUpscalerProvider
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The TwoSamplersForMaskUpscalerProvider node is designed to use two different sampling methods to facilitate image upscaling. It allows selection of the upscaling method and schedules the sampling process. This node plays a key role in enhancing image quality by combining complex sampling techniques and upscaling algorithms.

# Input types
## Required
- scale_method
- The scale_method parameter determines the algorithm used for image upscaling. It is crucial for overall performance and quality of the upscaling process, directly affecting output resolution and clarity.
    - Comfy dtype: str
    - Python dtype: str
- full_sample_schedule
- The full_sample_schedule parameter decides when to perform full sampling during upscaling. It is important for controlling timing and frequency of sampling, which in turn affects final output detail and texture.
    - Comfy dtype: str
    - Python dtype: str
- use_tiled_vae
- The use_tiled_vae parameter indicates whether to use a tiled approach for the variational autoencoder (VAE). This can improve efficiency of the upscaling process, especially for larger images.
    - Comfy dtype: bool
    - Python dtype: bool
- base_sampler
- The base_sampler parameter specifies the primary sampling method used to generate the initial sample set. It serves as the foundation of the upscaling process, influencing initial output quality and characteristics.
    - Comfy dtype: KSAMPLER
    - Python dtype: KSampler
- mask_sampler
- The mask_sampler parameter defines the sampling method applied to the mask. It is essential for determining how the mask influences the final upscaled result, particularly in masked areas.
    - Comfy dtype: KSAMPLER
    - Python dtype: KSampler
- mask
- The mask parameter provides the mask used to guide the upscaling process. It is important for defining regions in the image that require special attention or handling during upscaling.
    - Comfy dtype: MASK
    - Python dtype: np.ndarray
- vae
- The vae parameter represents the VAE model used during upscaling. It is a key component for generating high‑quality latent representations of the input image.
    - Comfy dtype: VAE
    - Python dtype: VAE
## Optional
- tile_size
- The tile_size parameter sets the block size used when employing a tiled approach. It is important for optimizing memory usage and processing time, especially for high‑resolution images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- upscaler
- The upscaler output provides the final upscaled image or latent representation. It is the end result of the upscaling process, representing the enhanced image quality and resolution achieved through the node's complex sampling and upscaling methods.
    - Comfy dtype: UPSCALER
    - Python dtype: TwoSamplersForMaskUpscaler

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
