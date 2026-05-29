# Documentation
- Class name: LatentBlend
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentBlend node is designed to seamlessly fuse and blend two sets of latent samples through a specified blend factor. It operates by adjusting the contribution of each sample set, allowing the creation of composite representations that can be used for further processing or visualization.

# Input types
## Required
- samples1
    - The first set of latent samples to be blended with the other set. It plays a crucial role in determining the initial state of the blended output.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- samples2
    - The second set of latent samples to be blended with the first set. It is equally important in influencing the final blended result.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- blend_factor
    - A float that determines the degree to which the second set of samples is blended with the first set. It is critical for controlling the balance between the two sets of samples in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- blend_mode
    - Specifies the blending mode used when combining samples. Currently, the only supported option is 'normal'.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- samples_out
    - The output is a set of blended latent samples, formed by combining the input samples with the specified blend factor.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class LatentBlend:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples1': ('LATENT',), 'samples2': ('LATENT',), 'blend_factor': ('FLOAT', {'default': 0.5, 'min': 0, 'max': 1, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'blend'
    CATEGORY = '_for_testing'

    def blend(self, samples1, samples2, blend_factor: float, blend_mode: str='normal'):
        samples_out = samples1.copy()
        samples1 = samples1['samples']
        samples2 = samples2['samples']
        if samples1.shape != samples2.shape:
            samples2.permute(0, 3, 1, 2)
            samples2 = comfy.utils.common_upscale(samples2, samples1.shape[3], samples1.shape[2], 'bicubic', crop='center')
            samples2.permute(0, 2, 3, 1)
        samples_blended = self.blend_mode(samples1, samples2, blend_mode)
        samples_blended = samples1 * blend_factor + samples_blended * (1 - blend_factor)
        samples_out['samples'] = samples_blended
        return (samples_out,)

    def blend_mode(self, img1, img2, mode):
        if mode == 'normal':
            return img2
        else:
            raise ValueError(f'Unsupported blend mode: {mode}')
```