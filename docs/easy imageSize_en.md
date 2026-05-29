# Documentation
- Class name: imageSize
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node extracts and provides image dimensions, focusing on width and height as key attributes. It serves as a foundational tool in image processing, enabling further analysis and operations based on these parameters.

# Input types
## Required
- image
    - Image parameter is required as it is the source from which the node derives width and height values. Without this input, the node cannot perform its primary function.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Output types
- width_int
    - width_int output represents the horizontal dimension of the input image, providing critical information for further image-related operations.
    - Comfy dtype: INT
    - Python dtype: int
- height_int
    - height_int output represents the vertical dimension of the input image, essential for understanding the image structure and subsequent image processing tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class imageSize:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',)}}
    RETURN_TYPES = ('INT', 'INT')
    RETURN_NAMES = ('width_int', 'height_int')
    OUTPUT_NODE = True
    FUNCTION = 'image_width_height'
    CATEGORY = 'EasyUse/Image'

    def image_width_height(self, image):
        (_, raw_H, raw_W, _) = image.shape
        width = raw_W
        height = raw_H
        if width is not None and height is not None:
            result = (width, height)
        else:
            result = (0, 0)
        return {'ui': {'text': 'Width: ' + str(width) + ' , Height: ' + str(height)}, 'result': result}
```