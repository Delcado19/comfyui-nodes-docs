# Documentation
- Class name: LatentUpscaleBy
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ‘LatentUpscaleBy’ node aims to increase the resolution of latent representations by using various upsampling methods. It plays a key role in the preprocessing pipeline, especially for applications that require higher-fidelity latent vectors. The node’s goal is to improve latent data quality without altering its inherent characteristics.

# Input types
## Required
- samples
- The ‘samples’ parameter is crucial because it contains the latent representations to be upsampled. It significantly influences the node’s operation and final output, determining the base data for upsampling.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- upscale_method
- The ‘upscale_method’ parameter determines the algorithm used to upsample latent samples. It is a key factor for output quality and style, offering multiple options to meet different needs.
    - Comfy dtype: STRING
    - Python dtype: str
- scale_by
- The ‘scale_by’ parameter specifies the scaling factor during upsampling. It is essential for controlling the degree of upsampling applied to latent samples, directly affecting the final output resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- upscaled_samples
- The ‘upscaled_samples’ output represents the latent representation after upsampling. It is important because it contains the node’s primary function, providing enhanced latent vectors ready for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class LatentUpscaleBy:
    upscale_methods = ['nearest-exact', 'bilinear', 'area', 'bicubic', 'bislerp']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'upscale_method': (s.upscale_methods,), 'scale_by': ('FLOAT', {'default': 1.5, 'min': 0.01, 'max': 8.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'upscale'
    CATEGORY = 'latent'

    def upscale(self, samples, upscale_method, scale_by):
        s = samples.copy()
        width = round(samples['samples'].shape[3] * scale_by)
        height = round(samples['samples'].shape[2] * scale_by)
        s['samples'] = comfy.utils.common_upscale(samples['samples'], width, height, upscale_method, 'disabled')
        return (s,)
```