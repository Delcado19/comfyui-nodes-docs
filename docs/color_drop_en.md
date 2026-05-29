# Documentation
- Class name: color_drop
- Category: Image Processing
- Output node: False
- Repo Ref: https://github.com/jags111/ComfyUI_Jags_VectorMagic

This node class processes image data by applying a color discard effect, enhancing the visual features of the input image by flattening the color spectrum.

# Input types
## Required
- images
    - The input images are essential to the node's operation, serving as the foundation for the color discard process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
## Optional
- number_of_colors
    - This parameter affects the granularity of the color flattening effect; higher values result more pronounced color bands in the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- Image
    - The output is the image with the color discard effect applied, demonstrating the expected visual enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class color_drop:
    """
    This node provides a simple interface to apply PixelSort blur to the output image.
    """

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        """
        Input Types
        """
        return {'required': {'images': ('IMAGE',)}, 'optional': {'number_of_colors': ('INT', {'default': 2, 'min': 1, 'max': 4000, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('Image',)
    FUNCTION = 'flatten'
```