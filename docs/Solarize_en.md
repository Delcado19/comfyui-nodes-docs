# Documentation
- Class name: Solarize
- Category: postprocessing/Color Adjustments
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This node aims to adjust the color of an image by inverting colors above a certain threshold, providing a solarization effect that enhances visibility and contrast.

# Input types
## Required
- image
    - The image parameter is crucial as it is the main input for the solarization process. It determines the source material for color adjustment.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- threshold
    - The threshold parameter acts as a decision boundary for the solarization process, determining which color tones are inverted to enhance image contrast.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- solarized_image
    - The output is the solarized image, which has undergone a color inversion process to enhance its visual appeal and clarity.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class Solarize:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'threshold': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'solarize_image'
    CATEGORY = 'postprocessing/Color Adjustments'

    def solarize_image(self, image: torch.Tensor, threshold: float):
        solarized_image = torch.where(image > threshold, 1 - image, image)
        solarized_image = torch.clamp(solarized_image, 0, 1)
        return (solarized_image,)
```