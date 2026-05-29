# Documentation
- Class name: LatentSlerp
- Category: latent
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_Noise.git

This node performs spherical linear interpolation (slerp) between two sets of latent vectors, providing smooth transitions between different latent states. This is particularly useful for generating intermediate representations in a continuous latent space.

# Input types
## Required
- latents1
    - First set of latent vectors, serving as the starting point for interpolation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- factor
    - Interpolation factor, determining the position along the path between the two latent sets.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- latents2
    - Second set of latent vectors, representing the end point of the interpolation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- mask
    - An optional mask that can be used to selectively apply interpolation to certain elements of the latent vectors.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- slerped_latents
    - The resulting interpolated latent vectors, representing a smooth transition between the input latent sets.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class LatentSlerp:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'latents1': ('LATENT',), 'factor': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01})}, 'optional': {'latents2': ('LATENT',), 'mask': ('MASK',)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'slerp_latents'
    CATEGORY = 'latent'

    def slerp_latents(self, latents1, factor, latents2=None, mask=None):
        s = latents1.copy()
        if latents2 is None:
            return (s,)
        if latents1['samples'].shape != latents2['samples'].shape:
            print('warning, shapes in LatentSlerp not the same, ignoring')
            return (s,)
        slerped = slerp(factor, latents1['samples'].clone(), latents2['samples'].clone())
        if mask is not None:
            mask = prepare_mask(mask, slerped.shape)
            slerped = mask * slerped + (1 - mask) * latents1['samples']
        s['samples'] = slerped
        return (s,)
```