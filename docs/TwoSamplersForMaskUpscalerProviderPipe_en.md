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
```
class TwoSamplersForMaskUpscalerProviderPipe:
    upscale_methods = ['nearest-exact', 'bilinear', 'lanczos', 'area']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'scale_method': (s.upscale_methods,), 'full_sample_schedule': (['none', 'interleave1', 'interleave2', 'interleave3', 'last1', 'last2', 'interleave1+last1', 'interleave2+last1', 'interleave3+last1'],), 'use_tiled_vae': ('BOOLEAN', {'default': False, 'label_on': 'enabled', 'label_off': 'disabled'}), 'base_sampler': ('KSAMPLER',), 'mask_sampler': ('KSAMPLER',), 'mask': ('MASK',), 'basic_pipe': ('BASIC_PIPE',), 'tile_size': ('INT', {'default': 512, 'min': 320, 'max': 4096, 'step': 64})}, 'optional': {'full_sampler_opt': ('KSAMPLER',), 'upscale_model_opt': ('UPSCALE_MODEL',), 'pk_hook_base_opt': ('PK_HOOK',), 'pk_hook_mask_opt': ('PK_HOOK',), 'pk_hook_full_opt': ('PK_HOOK',)}}
    RETURN_TYPES = ('UPSCALER',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Upscale'

    def doit(self, scale_method, full_sample_schedule, use_tiled_vae, base_sampler, mask_sampler, mask, basic_pipe, full_sampler_opt=None, upscale_model_opt=None, pk_hook_base_opt=None, pk_hook_mask_opt=None, pk_hook_full_opt=None, tile_size=512):
        mask = make_2d_mask(mask)
        (_, _, vae, _, _) = basic_pipe
        upscaler = core.TwoSamplersForMaskUpscaler(scale_method, full_sample_schedule, use_tiled_vae, base_sampler, mask_sampler, mask, vae, full_sampler_opt, upscale_model_opt, pk_hook_base_opt, pk_hook_mask_opt, pk_hook_full_opt, tile_size=tile_size)
        return (upscaler,)
```