# Documentation
- Class name: LatentRotate
- Category: latent/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentRotate node is designed to perform rotation operations on latent samples. It can handle various rotation angles, such as 90, 180, or 270 degrees, transforming the latent space data accordingly. This node plays a critical role in the preprocessing stage of latent space operations, enabling the generation of rotated versions of data for further analysis or model training.

# Input types
## Required
- samples
    - The 'samples' parameter is essential for the node's operation, as it represents the latent space data that needs to be rotated. The effectiveness of the node in transforming the data is directly related to the quality and format of the input samples.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- rotation
    - The 'rotation' parameter specifies the rotation angle to be applied to the latent samples. It is a critical input that determines the direction of the rotated data, affecting the node's output.
    - Comfy dtype: COMBO[none, 90 degrees, 180 degrees, 270 degrees]
    - Python dtype: str

# Output types
- rotated_samples
    - The 'rotated_samples' output parameter represents the rotated latent space data. It is important because it is the direct result of the node's operation, containing the transformed data ready for downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class LatentRotate:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'rotation': (['none', '90 degrees', '180 degrees', '270 degrees'],)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'rotate'
    CATEGORY = 'latent/transform'

    def rotate(self, samples, rotation):
        s = samples.copy()
        rotate_by = 0
        if rotation.startswith('90'):
            rotate_by = 1
        elif rotation.startswith('180'):
            rotate_by = 2
        elif rotation.startswith('270'):
            rotate_by = 3
        s['samples'] = torch.rot90(samples['samples'], k=rotate_by, dims=[3, 2])
        return (s,)
```