# Documentation
- Class name: imageSizeByLongerSide
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node class categorizes images based on the longer dimension, providing a simplified approach to image analysis and processing by focusing on the longer side of the image.

# Input types
## Required
- image
    - The image parameter is critical as it is the primary input for node operations. It influences the entire processing pipeline by determining the basis for the node's output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Output types
- resolution
    - The resolution output provides the length of the longer side of the image, which is essential for subsequent image processing tasks and analysis.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class imageSizeByLongerSide:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',)}}
    RETURN_TYPES = ('INT',)
    RETURN_NAMES = ('resolution',)
    OUTPUT_NODE = True
    FUNCTION = 'image_longer_side'
    CATEGORY = 'EasyUse/Image'

    def image_longer_side(self, image):
        (_, raw_H, raw_W, _) = image.shape
        width = raw_W
        height = raw_H
        if width is not None and height is not None:
            if width > height:
                result = (width,)
            else:
                result = (height,)
        else:
            result = (0,)
        return {'ui': {'text': str(result[0])}, 'result': result}
```