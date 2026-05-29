# Documentation
- Class name: LatentFlip
- Category: latent/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentFlip node is designed to transform latent space representations by applying a flip operation along a specified axis. This node plays a key role in manipulating latent features, which is essential for tasks such as data augmentation or exploring latent space structure.

# Input types
## Required
- samples
    - The "samples" parameter is critical as it contains the latent representations that the node will process. It directly affects the node's ability to perform the flip operation and, in turn, influences the output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- flip_method
    - The "flip_method" parameter determines along which axis the latent samples will be flipped. It is a key component as it determines the nature of the transformation applied to the latent space.
    - Comfy dtype: COMBO['x-axis: vertically', 'y-axis: horizontally']
    - Python dtype: str

# Output types
- samples
    - The 'samples' output contains the flipped latent representations, which is the result of the node's operation. This output is important as it represents the transformed data that can be used for downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class LatentFlip:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'flip_method': (['x-axis: vertically', 'y-axis: horizontally'],)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'flip'
    CATEGORY = 'latent/transform'

    def flip(self, samples, flip_method):
        s = samples.copy()
        if flip_method.startswith('x'):
            s['samples'] = torch.flip(samples['samples'], dims=[2])
        elif flip_method.startswith('y'):
            s['samples'] = torch.flip(samples['samples'], dims=[3])
        return (s,)
```