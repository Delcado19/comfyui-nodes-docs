# Documentation
- Class name: WAS_Image_Size_To_Number
- Category: WAS Suite/Number/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Size_To_Number node aims to extract the size of an image and convert it into numeric values. It provides a straightforward way to obtain the width and height of an image in different formats, facilitating further processing or analysis that requires numeric size information.

# Input types
## Required
- image
    - The image parameter is crucial for the operation of the node, as it is the source from which dimensions are extracted. It directly affects the node's output by determining the returned numeric values.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or numpy.ndarray

# Output types
- width_num
    - width_num represents an integer value of the image width. It is important because it provides a numeric measure of the image width, which can be used for various purposes such as resizing or layout calculations.
    - Comfy dtype: NUMBER
    - Python dtype: int
- height_num
    - height_num represents an integer value of the image height. It is crucial for applications that need to know the vertical extent of an image, such as printing or display adjustments.
    - Comfy dtype: NUMBER
    - Python dtype: int
- width_float
    - width_float provides the image width as a floating-point number, allowing for more precise measurements and calculations when necessary.
    - Comfy dtype: FLOAT
    - Python dtype: float
- height_float
    - height_float provides the image height as a floating-point number, which is very useful for applications requiring high precision in vertical measurements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width_int
    - width_int is another integer representation of the image width, providing an interchangeable value that can be used with width_num for different applications.
    - Comfy dtype: INT
    - Python dtype: int
- height_int
    - height_int is another integer representation of the image height, offering an alternative value for applications that may prefer or require this specific format.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Size_To_Number:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',)}}
    RETURN_TYPES = ('NUMBER', 'NUMBER', 'FLOAT', 'FLOAT', 'INT', 'INT')
    RETURN_NAMES = ('width_num', 'height_num', 'width_float', 'height_float', 'width_int', 'height_int')
    FUNCTION = 'image_width_height'
    CATEGORY = 'WAS Suite/Number/Operations'

    def image_width_height(self, image):
        image = tensor2pil(image)
        if image.size:
            return (image.size[0], image.size[1], float(image.size[0]), float(image.size[1]), image.size[0], image.size[1])
        return (0, 0, 0, 0, 0, 0)
```