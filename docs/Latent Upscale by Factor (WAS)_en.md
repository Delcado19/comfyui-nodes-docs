# Documentation
- Class name: WAS_Latent_Upscale
- Category: WAS Suite/Latent/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `latent_upscale` method is designed to enhance the resolution of latent representations by applying a specified interpolation mode and scaling factor. It plays a critical role in the transformation pipeline of the WAS suite, ensuring that latent features are accurately and efficiently upscaled, thereby contributing to the overall quality of the generated output.

# Input types
## Required
- samples
    - The "samples" parameter is crucial because it holds the latent representation to be upscaled. It directly influences the node's operation by determining the input data to be upscaled.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- mode
    - The "mode" parameter defines the interpolation method used for upscaling. It is critical because it determines the algorithmic approach to increasing resolution, thereby affecting the quality of the final output.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- factor
    - The "factor" parameter specifies the scaling factor for the upscaling operation. It is a key determinant in the transformation process because it controls the degree of magnification applied to the latent samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- align
    - The "align" parameter is important because it determines whether corner-aligned scaling is used. This choice can have a subtle but observable effect on the final upscaled representation.
    - Comfy dtype: COMBO[bool]
    - Python dtype: bool

# Output types
- upscaled_samples
    - The "upscaled_samples" output contains the upscaled latent representation produced by the transformation. It is important because it represents the direct result of the node's operation, containing the upscaled features.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class WAS_Latent_Upscale:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'samples': ('LATENT',), 'mode': (['area', 'bicubic', 'bilinear', 'nearest'],), 'factor': ('FLOAT', {'default': 2.0, 'min': 0.1, 'max': 8.0, 'step': 0.01}), 'align': (['true', 'false'],)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'latent_upscale'
    CATEGORY = 'WAS Suite/Latent/Transform'

    def latent_upscale(self, samples, mode, factor, align):
        valid_modes = ['area', 'bicubic', 'bilinear', 'nearest']
        if mode not in valid_modes:
            cstr(f"Invalid interpolation mode `{mode}` selected. Valid modes are: {', '.join(valid_modes)}").error.print()
            return (s,)
        align = True if align == 'true' else False
        if not isinstance(factor, float) or factor <= 0:
            cstr(f'The input `factor` is `{factor}`, but should be a positive or negative float.').error.print()
            return (s,)
        s = samples.copy()
        shape = s['samples'].shape
        size = tuple((int(round(dim * factor)) for dim in shape[-2:]))
        if mode in ['linear', 'bilinear', 'bicubic', 'trilinear']:
            s['samples'] = torch.nn.functional.interpolate(s['samples'], size=size, mode=mode, align_corners=align)
        else:
            s['samples'] = torch.nn.functional.interpolate(s['samples'], size=size, mode=mode)
        return (s,)
```