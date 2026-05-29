# Documentation
- Class name: WAS_Image_Crop_Square_Location
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Crop_Square_Location node processes images by cropping them into a square based on specified position coordinates. It intelligently adjusts the crop region to ensure the resulting image is square, even if the specified area is not perfectly square. This node is particularly useful for applications requiring uniform image dimensions, such as social media posts or data inputs for machine learning models.

# Input types
## Required
- image
    - The image parameter is the input image that the node will process. It is essential to the node's operation, as it is the subject of the crop action. The content and dimensions of the image will directly affect the outcome of the cropping process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
## Optional
- x
    - The x parameter specifies the horizontal coordinate from which the crop operation will center. It plays a critical role in determining the position of the cropped region within the image. If no specific value is provided, the default value ensures a center crop.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y parameter defines the vertical coordinate from which the crop operation will center. Similar to the x parameter, it is crucial for precisely locating the crop position within the image. If no user-specified value is provided, the default value ensures a center crop.
    - Comfy dtype: INT
    - Python dtype: int
- size
    - The size parameter determines the side length of the square crop. It is a key factor in achieving the desired output dimensions. The node ensures the crop is as close to this size as possible without exceeding the image boundaries.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- cropped_image
    - The cropped image output is the result of the cropping process. It is a square image derived from the input image, centered on the specified position coordinates. This output is important for applications requiring standardized image formats.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- crop_data
    - The crop_data output provides metadata about the cropping process, including the size of the cropped image and the coordinates of the crop region. This information may be useful for further image processing or analysis.
    - Comfy dtype: CROP_DATA
    - Python dtype: Tuple[int, Tuple[int, int, int, int]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Crop_Square_Location:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'x': ('INT', {'default': 0, 'max': 24576, 'min': 0, 'step': 1}), 'y': ('INT', {'default': 0, 'max': 24576, 'min': 0, 'step': 1}), 'size': ('INT', {'default': 256, 'max': 4096, 'min': 5, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'CROP_DATA')
    FUNCTION = 'image_crop_location'
    CATEGORY = 'WAS Suite/Image/Process'

    def image_crop_location(self, image, x=256, y=256, size=512):
        image = tensor2pil(image)
        (img_width, img_height) = image.size
        exp_size = size // 2
        left = max(x - exp_size, 0)
        top = max(y - exp_size, 0)
        right = min(x + exp_size, img_width)
        bottom = min(y + exp_size, img_height)
        if right - left < size:
            if right < img_width:
                right = min(right + size - (right - left), img_width)
            elif left > 0:
                left = max(left - (size - (right - left)), 0)
        if bottom - top < size:
            if bottom < img_height:
                bottom = min(bottom + size - (bottom - top), img_height)
            elif top > 0:
                top = max(top - (size - (bottom - top)), 0)
        crop = image.crop((left, top, right, bottom))
        crop_data = (crop.size, (left, top, right, bottom))
        crop = crop.resize((crop.size[0] // 8 * 8, crop.size[1] // 8 * 8))
        return (pil2tensor(crop), crop_data)
```