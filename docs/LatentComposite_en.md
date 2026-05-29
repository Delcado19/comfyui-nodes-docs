# Documentation
- Class name: LatentComposite
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentComposite node is designed to blend latent representations of two different sample sets. It performs a compositing operation, either normal or feathered, seamlessly integrating one sample set into another based on specified coordinates and blending method.

# Input types
## Required
- samples_to
    - The 'samples_to' parameter represents the base latent samples onto which 'samples_from' is composited. It is critical as it determines the structure and dimensions of the final output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- samples_from
    - The 'samples_from' parameter defines the latent samples to be composited onto 'samples_to'. Its choice significantly affects the final composition.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- x
    - The 'x' parameter specifies the horizontal starting coordinate for the compositing operation. Its value directly influences the position of 'samples_from' within 'samples_to'.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The 'y' parameter determines the vertical starting coordinate for the compositing operation. It is essential for the placement of 'samples_from' within 'samples_to'.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- feather
    - The 'feather' parameter controls the smoothness of the edges of the compositing operation. A non-zero value produces a feathered or gradual transition between the two sample sets.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples_out
    - The 'samples_out' parameter is the result of the compositing operation, representing the merged latent samples from 'samples_to' and 'samples_from'.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class LatentComposite:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples_to': ('LATENT',), 'samples_from': ('LATENT',), 'x': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'y': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'feather': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'composite'
    CATEGORY = 'latent'

    def composite(self, samples_to, samples_from, x, y, composite_method='normal', feather=0):
        x = x // 8
        y = y // 8
        feather = feather // 8
        samples_out = samples_to.copy()
        s = samples_to['samples'].clone()
        samples_to = samples_to['samples']
        samples_from = samples_from['samples']
        if feather == 0:
            s[:, :, y:y + samples_from.shape[2], x:x + samples_from.shape[3]] = samples_from[:, :, :samples_to.shape[2] - y, :samples_to.shape[3] - x]
        else:
            samples_from = samples_from[:, :, :samples_to.shape[2] - y, :samples_to.shape[3] - x]
            mask = torch.ones_like(samples_from)
            for t in range(feather):
                if y != 0:
                    mask[:, :, t:1 + t, :] *= 1.0 / feather * (t + 1)
                if y + samples_from.shape[2] < samples_to.shape[2]:
                    mask[:, :, mask.shape[2] - 1 - t:mask.shape[2] - t, :] *= 1.0 / feather * (t + 1)
                if x != 0:
                    mask[:, :, :, t:1 + t] *= 1.0 / feather * (t + 1)
                if x + samples_from.shape[3] < samples_to.shape[3]:
                    mask[:, :, :, mask.shape[3] - 1 - t:mask.shape[3] - t] *= 1.0 / feather * (t + 1)
            rev_mask = torch.ones_like(mask) - mask
            s[:, :, y:y + samples_from.shape[2], x:x + samples_from.shape[3]] = samples_from[:, :, :samples_to.shape[2] - y, :samples_to.shape[3] - x] * mask + s[:, :, y:y + samples_from.shape[2], x:x + samples_from.shape[3]] * rev_mask
        samples_out['samples'] = s
        return (samples_out,)
```