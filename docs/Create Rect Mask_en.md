# Documentation
- Class name: CreateRectMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

CreateRectMask node generates a rectangular mask based on specified parameters. It calculates mask corner coordinates considering measurement mode (percent or pixels), rectangle origin, and provided dimensions. The node is flexible, allowing customization of mask position and size relative to the applied image. It also provides an option to copy image size for dynamic mask creation.

# Input types
## Required
- mode
    - The mode parameter determines the measurement unit for mask dimensions. It can be 'percent' for percentage-based coordinates, or 'pixels' for absolute pixel values.
    - Comfy dtype: str
    - Python dtype: str
- origin
    - The origin parameter determines the reference point for calculating the mask position. It can be one of 'topleft', 'bottomleft', 'topleft', or 'bottomright'.
    - Comfy dtype: str
    - Python dtype: str
- x
    - The x parameter specifies the horizontal position of the mask start point. It is used with the mode and origin to determine the mask position.
    - Comfy dtype: float
    - Python dtype: float
- y
    - The y parameter specifies the vertical position of the mask start point. It works with the x parameter and other settings to establish the mask coordinates.
    - Comfy dtype: float
    - Python dtype: float
- width
    - The width parameter sets the width of the mask. This is a key dimension that, along with height, defines the mask shape and coverage area.
    - Comfy dtype: float
    - Python dtype: float
- height
    - The height parameter sets the vertical extent of the mask. It is crucial in determining the overall size of the mask and the area it covers.
    - Comfy dtype: float
    - Python dtype: float
- image_width
    - The image_width parameter defines the width of the image to which the mask will be applied. If mode is set to 'percent', it is important to ensure correct scaling of mask dimensions.
    - Comfy dtype: int
    - Python dtype: int
- image_height
    - The image_height parameter defines the height of the image. Similar to image_width, it plays a similar role in scaling mask dimensions based on image size.
    - Comfy dtype: int
    - Python dtype: int
## Optional
- copy_image_size
    - The optional copy_image_size parameter allows the mask to adopt the dimensions of the provided image. This is useful for creating masks with dynamic sizes based on the applied image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor

# Output types
- mask
    - The output mask is a binary image representing the rectangular area defined by the input parameters. It is a key component for various image processing tasks such as object segmentation or masking.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CreateRectMask:
    """
    Creates a rectangle mask. If copy_image_size is provided, the image_width and image_height parameters are ignored and the size of the given images will be used instead.
    """

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'mode': (['percent', 'pixels'],), 'origin': (['topleft', 'bottomleft', 'topright', 'bottomright'],), 'x': ('FLOAT', {'default': 0, 'min': 0, 'max': VERY_BIG_SIZE, 'step': 1}), 'y': ('FLOAT', {'default': 0, 'min': 0, 'max': VERY_BIG_SIZE, 'step': 1}), 'width': ('FLOAT', {'default': 50, 'min': 0, 'max': VERY_BIG_SIZE, 'step': 1}), 'height': ('FLOAT', {'default': 50, 'min': 0, 'max': VERY_BIG_SIZE, 'step': 1}), 'image_width': ('INT', {'default': 512, 'min': 64, 'max': VERY_BIG_SIZE, 'step': 64}), 'image_height': ('INT', {'default': 512, 'min': 64, 'max': VERY_BIG_SIZE, 'step': 64})}, 'optional': {'copy_image_size': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'create_mask'
    CATEGORY = 'Masquerade Nodes'

    def create_mask(self, mode, origin, x, y, width, height, image_width, image_height, copy_image_size=None):
        min_x = x
        min_y = y
        max_x = min_x + width
        max_y = min_y + height
        if copy_image_size is not None:
            size = copy_image_size.size()
            image_width = size[2]
            image_height = size[1]
        if mode == 'percent':
            min_x = min_x / 100.0 * image_width
            max_x = max_x / 100.0 * image_width
            min_y = min_y / 100.0 * image_height
            max_y = max_y / 100.0 * image_height
        if origin == 'bottomleft' or origin == 'bottomright':
            (min_y, max_y) = (image_height - max_y, image_height - min_y)
        if origin == 'topright' or origin == 'bottomright':
            (min_x, max_x) = (image_width - max_x, image_width - min_x)
        mask = torch.zeros((image_height, image_width))
        mask[int(min_y):int(max_y) + 1, int(min_x):int(max_x) + 1] = 1
        return (mask.unsqueeze(0),)
```