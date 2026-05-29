# Documentation
- Class name: Vignette
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This node applies a vignette effect to the image, enhancing visual focus toward the center by gradually fading the edges. It adjusts the intensity of the vignette based on user-defined parameters, allowing fine-grained control over the aesthetic impact.

# Input types
## Required
- image
    - The image parameter is necessary as it is the primary input the node operates on. It determines the object to which the vignette effect will be applied, directly influencing the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- a
    - Parameter 'a' controls the intensity of the vignette effect. It is essential for customizing the aesthetic result according to user preference, enabling a range of visual styles from subtle to dramatic.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - The output image is the result of applying the vignette effect. It reflects the input image with the applied aesthetic adjustments, representing the primary output of the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class Vignette:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'a': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 10.0, 'step': 1.0})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'apply_vignette'
    CATEGORY = 'postprocessing/Effects'

    def apply_vignette(self, image: torch.Tensor, vignette: float):
        if vignette == 0:
            return (image,)
        (height, width, _) = image.shape[-3:]
        x = torch.linspace(-1, 1, width, device=image.device)
        y = torch.linspace(-1, 1, height, device=image.device)
        (X, Y) = torch.meshgrid(x, y, indexing='ij')
        radius = torch.sqrt(X ** 2 + Y ** 2)
        mapped_vignette_strength = 1.8 - (vignette - 1) * 0.1
        vignette = 1 - torch.clamp(radius / mapped_vignette_strength, 0, 1)
        vignette = vignette[..., None]
        vignette_image = torch.clamp(image * vignette, 0, 1)
        return (vignette_image,)
```