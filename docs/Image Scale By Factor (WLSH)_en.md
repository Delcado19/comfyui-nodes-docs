# Documentation
- Class name: WLSH_Image_Scale_By_Factor
- Category: WLSH Nodes/upscaling
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'upscale' method of the WLSH_Image_Scale_By_Factor node is designed to increase the dimensions of the input image by a specified factor. It supports multiple upscaling methods to maintain or improve image quality during the scaling process. This node plays a critical role in image processing workflows that require image enlargement.

# Input types
## Required
- original
    - The 'original' parameter is the input image to be scaled. It is the core of the operation, as all node actions revolve around this image. The quality and content of the original image directly affect the scaled output result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- upscale_method
    - The 'upscale_method' parameter determines the algorithm used to scale the image. It is crucial for controlling the quality and characteristics of the upscaled image. Different methods may produce different results, and the choice of method can significantly affect the final appearance.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'area']
    - Python dtype: str
- factor
    - The 'factor' parameter defines the scaling ratio by which the original image dimensions are multiplied. It is a key parameter because it determines the final size of the upscaled image. The choice of factor will directly affect the level of detail and overall size.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- upscaled_image
    - The 'upscaled_image' output is the result of the upscaling process, reflecting the input image scaled by the specified factor. It is important because it represents the direct result of the node operation and is used for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class WLSH_Image_Scale_By_Factor:
    upscale_methods = ['nearest-exact', 'bilinear', 'area']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'original': ('IMAGE',), 'upscale_method': (s.upscale_methods,), 'factor': ('FLOAT', {'default': 2.0, 'min': 0.1, 'max': 8.0, 'step': 0.1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'upscale'
    CATEGORY = 'WLSH Nodes/upscaling'

    def upscale(self, original, upscale_method, factor):
        old_width = original.shape[2]
        old_height = original.shape[1]
        new_width = int(old_width * factor)
        new_height = int(old_height * factor)
        print('Processing image with shape: ', old_width, 'x', old_height, 'to ', new_width, 'x', new_height)
        samples = original.movedim(-1, 1)
        s = comfy.utils.common_upscale(samples, new_width, new_height, upscale_method, crop='disabled')
        s = s.movedim(1, -1)
        return (s,)
```