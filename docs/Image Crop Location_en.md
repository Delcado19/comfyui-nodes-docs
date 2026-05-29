# Documentation
- Class name: WAS_Image_Crop_Location
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `image_crop_location` is designed to precisely crop an image based on specified coordinates. It allows selecting a rectangular region within the image by defining the top, left, right, and bottom boundaries. This method is essential for focusing on regions of interest within an image, potentially enhancing subsequent image processing tasks by concentrating on relevant visual content.

# Input types
## Required
- image
    - The input image is the primary data object for node operations. It is critical to the node's functionality, as the entire operation revolves around manipulating this image. The image parameter directly affects the node's execution and the final cropped image produced.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
## Optional
- top
    - The 'top' parameter specifies the vertical starting point for the crop operation. It is important because it determines the upper boundary of the cropped region. This parameter works with 'bottom' to define the height of the crop.
    - Comfy dtype: INT
    - Python dtype: int
- left
    - The 'left' parameter sets the horizontal starting point for the crop. It is important because it establishes the left boundary of the region to be cropped. Together with 'right', it helps determine the width of the final cropped portion.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The 'right' parameter defines the horizontal ending point for the crop. It is critical for determining the width of the crop by calculating the difference between 'right' and 'left'. It ensures the correct width is maintained in the cropped image.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The 'bottom' parameter indicates the vertical ending point for the crop. It is crucial because it sets the lower boundary of the crop. Together with 'top', it determines the vertical extent of the cropped region.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- cropped_image
    - The output 'cropped_image' is the result of the crop operation. It represents the region within the input image that falls within the specified boundaries. This output is important as it is the primary product of the node's functionality, providing a focused view of the image content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- crop_data
    - The output 'crop_data' provides metadata about the crop operation, including the size of the cropped image and the coordinates of the cropped region. This information is valuable for understanding the specifics of the crop and can be used for further processing or analysis.
    - Comfy dtype: CROP_DATA
    - Python dtype: Tuple[int, Tuple[int, int, int, int]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Crop_Location:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'top': ('INT', {'default': 0, 'max': 10000000, 'min': 0, 'step': 1}), 'left': ('INT', {'default': 0, 'max': 10000000, 'min': 0, 'step': 1}), 'right': ('INT', {'default': 256, 'max': 10000000, 'min': 0, 'step': 1}), 'bottom': ('INT', {'default': 256, 'max': 10000000, 'min': 0, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'CROP_DATA')
    FUNCTION = 'image_crop_location'
    CATEGORY = 'WAS Suite/Image/Process'

    def image_crop_location(self, image, top=0, left=0, right=256, bottom=256):
        image = tensor2pil(image)
        (img_width, img_height) = image.size
        crop_top = max(top, 0)
        crop_left = max(left, 0)
        crop_bottom = min(bottom, img_height)
        crop_right = min(right, img_width)
        crop_width = crop_right - crop_left
        crop_height = crop_bottom - crop_top
        if crop_width <= 0 or crop_height <= 0:
            raise ValueError('Invalid crop dimensions. Please check the values for top, left, right, and bottom.')
        crop = image.crop((crop_left, crop_top, crop_right, crop_bottom))
        crop_data = (crop.size, (crop_left, crop_top, crop_right, crop_bottom))
        crop = crop.resize((crop.size[0] // 8 * 8, crop.size[1] // 8 * 8))
        return (pil2tensor(crop), crop_data)
```