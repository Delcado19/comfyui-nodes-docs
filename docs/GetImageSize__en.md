# Documentation
- Class name: GetImageSize_
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node aims to extract and optionally resize an image to ensure it meets a minimum width requirement. It processes the image while maintaining its aspect ratio and returns both the original and resized dimensions, providing a comprehensive understanding of image properties within the workflow.

# Input types
## Required
- image
    - The image parameter is required as it is the primary input for the node's operation. It is the source from which the node obtains width and height information and may resize it to meet the specified minimum width standard.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- min_width
    - The min_width parameter is important as it sets the minimum width requirement for the image. If the image width is less than this value, the node will resize the image to meet this standard, ensuring a consistent starting point for further image processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - The width output represents the original width of the input image. This is fundamental information for understanding image dimensions and is crucial for any subsequent image operations or analysis.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output corresponds to the original height of the input image, providing important context for image size and aspect ratio, which is essential for maintaining image integrity during processing.
    - Comfy dtype: INT
    - Python dtype: int
- min_width
    - The min_width output indicates the minimum width of the resized image. It ensures the image meets the dimensions required for further processing or display, in compliance with workflow specifications.
    - Comfy dtype: INT
    - Python dtype: int
- min_height
    - The min_height output represents the image height after resizing to meet the minimum width standard. This is important for understanding how the image has been adjusted and ensuring correct display or further processing.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class GetImageSize_:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',)}, 'optional': {'min_width': ('INT', {'default': 512, 'min': 1, 'max': 2048, 'step': 8, 'display': 'number'})}}
    RETURN_TYPES = ('INT', 'INT', 'INT', 'INT')
    RETURN_NAMES = ('width', 'height', 'min_width', 'min_height')
    FUNCTION = 'get_size'
    CATEGORY = '♾️Mixlab/Image'

    def get_size(self, image, min_width):
        (_, height, width, _) = image.shape
        if min_width > width:
            im = tensor2pil(image)
            im = resize_image(im, 'width', min_width, min_width, 'white')
            im = im.convert('RGB')
            (min_width, min_height) = im.size
        else:
            min_width = width
            min_height = height
        return (width, height, min_width, min_height)
```