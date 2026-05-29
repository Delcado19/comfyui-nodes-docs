# Documentation
- Class name: WLSH_Image_Scale_By_Shortside
- Category: WLSH Nodes/upscaling
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'upscale' method of the WLSH_Image_Scale_By_Shortside node is designed to resize images by specifying the short side length. It intelligently determines the scaling factor based on the original image dimensions and applies the selected upsampling method to maintain or improve image quality.

# Input types
## Required
- original
    - The 'original' parameter represents the image to be upsampled. It is crucial as it is the source for the node's operations. The node processes this image to achieve the desired short side length.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- upscale_method
    - The 'upscale_method' parameter defines the algorithm used for upsampling the image. It significantly affects the quality and characteristics of the resulting image after scaling.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'area']
    - Python dtype: str
- shortside
    - The 'shortside' parameter determines the target length of the shorter side of the image after upsampling. It is a key factor in the scaling process and directly affects the final image dimensions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The 'IMAGE' output is the result of the upsampling process, providing the transformed image with the specified short side length.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - The 'width' output represents the new width of the upsampled image, resulting from the scaling operation.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' output represents the new height of the upsampled image, also resulting from the scaling process.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Image_Scale_By_Shortside:
    upscale_methods = ['nearest-exact', 'bilinear', 'area']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'original': ('IMAGE',), 'upscale_method': (s.upscale_methods,), 'shortside': ('INT', {'default': 512, 'min': 32, 'max': 4096, 'step': 32})}}
    RETURN_TYPES = ('IMAGE', 'INT', 'INT')
    RETURN_NAMES = ('IMAGE', 'width', 'height')
    FUNCTION = 'upscale'
    CATEGORY = 'WLSH Nodes/upscaling'

    def upscale(self, original, upscale_method, shortside):
        old_width = original.shape[2]
        old_height = original.shape[1]
        old_shortside = min(old_width, old_height)
        factor = shortside / max(1, old_shortside)
        new_width = int(old_width * factor)
        new_height = int(old_height * factor)
        print('Processing image with shape: ', old_width, 'x', old_height, 'to ', new_width, 'x', new_height)
        samples = original.movedim(-1, 1)
        s = comfy.utils.common_upscale(samples, new_width, new_height, upscale_method, crop='disabled')
        s = s.movedim(1, -1)
        return (s, new_width, new_height)
```