# Documentation
- Class name: LatentInterpolate
- Category: latent/advanced
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentInterpolate node is designed to interpolate between two sets of latent samples. It achieves this by computing a weighted sum of the input samples, with weights determined by a specified ratio. This node is particularly useful for generating smooth transitions between different latent representations, which is critical in applications such as image morphing or style transfer.

# Input types
## Required
- samples1
    - The first set of latent samples to be interpolated. These samples serve as the starting point of the interpolation process and are essential for defining the initial state of the transition.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- samples2
    - The second set of latent samples to be used for interpolation. These samples represent the endpoint of the interpolation and are essential for determining the final state of the transition.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- ratio
    - The ratio parameter controls the degree of interpolation between the two sets of samples. Values close to 0 produce output closer to samples1, while values close to 1 produce output closer to samples2.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The output of the LatentInterpolate node is a set of interpolated latent samples. These samples blend the input samples based on the specified ratio, providing a seamless transition between the two.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class LatentInterpolate:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples1': ('LATENT',), 'samples2': ('LATENT',), 'ratio': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'op'
    CATEGORY = 'latent/advanced'

    def op(self, samples1, samples2, ratio):
        samples_out = samples1.copy()
        s1 = samples1['samples']
        s2 = samples2['samples']
        s2 = reshape_latent_to(s1.shape, s2)
        m1 = torch.linalg.vector_norm(s1, dim=1)
        m2 = torch.linalg.vector_norm(s2, dim=1)
        s1 = torch.nan_to_num(s1 / m1)
        s2 = torch.nan_to_num(s2 / m2)
        t = s1 * ratio + s2 * (1.0 - ratio)
        mt = torch.linalg.vector_norm(t, dim=1)
        st = torch.nan_to_num(t / mt)
        samples_out['samples'] = st * (m1 * ratio + m2 * (1.0 - ratio))
        return (samples_out,)
```