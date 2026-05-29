# Documentation
- Class name: Parabolize
- Category: postprocessing/Color Adjustments
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Parabolize node aims to apply a parabolic transformation to images, enhancing their visual characteristics by adjusting their color and contrast. It achieves this by applying a mathematical function that manipulates pixel values based on given coefficient and vertex parameters, resulting in a stylized output that can be used for various creative or analytical purposes.

# Input types
## Required
- image
    - The image parameter is the input image that the node will process. It is crucial for the node's operation because it is the object of the parabolic transformation. The content and format of the image directly affect the result of the node's execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- coeff
    - The coefficient parameter determines the extent of the parabolic effect applied to the image. It is an optional parameter that allows users to control the intensity of the transformation, with a default value providing a balanced effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- vertex_x
    - The vertex_x parameter specifies the x-coordinate of the vertex of the parabolic function. It is an optional parameter that affects the position of the parabolic curve within the image, influencing the distribution of transformed pixel values.
    - Comfy dtype: FLOAT
    - Python dtype: float
- vertex_y
    - The vertex_y parameter defines the y-coordinate of the vertex of the parabolic function. It is an optional parameter that adjusts the vertical position of the parabolic curve, thereby affecting the overall brightness of the transformed image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- parabolized_image
    - The parabolized_image output is the result of applying the parabolic transformation to the input image. It represents a new image whose pixel values have been adjusted to reflect the effects of the chosen coefficient and vertex parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class Parabolize:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'coeff': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.1}), 'vertex_x': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.1}), 'vertex_y': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'parabolize_image'
    CATEGORY = 'postprocessing/Color Adjustments'

    def parabolize_image(self, image: torch.Tensor, coeff: float, vertex_x: float, vertex_y: float):
        parabolized_image = coeff * torch.pow(image - vertex_x, 2) + vertex_y
        parabolized_image = torch.clamp(parabolized_image, 0, 1)
        return (parabolized_image,)
```