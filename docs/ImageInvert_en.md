# Documentation
- Class name: ImageInvert
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageInvert node is designed to perform a fundamental image processing operation: image inversion. It takes an image as input and outputs its inverted counterpart, where pixel intensities are reversed, thereby swapping the light and dark regions of the image. This node plays a key role in various image analysis and enhancement tasks, providing a simple yet effective method for altering visual contrast.

# Input types
## Required
- image
    - The image parameter is critical for the ImageInvert node, as it is the primary input that determines the subject of the operation. The node processes this image to produce an inverted version, making the image parameter central to the node's functionality and output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- inverted_image
    - The inverted image output parameter represents the result of the image inversion process. It is important because it is the direct output of the node's primary function, showcasing the transformed image with reversed pixel intensities.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImageInvert:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'invert'
    CATEGORY = 'image'

    def invert(self, image):
        s = 1.0 - image
        return (s,)
```