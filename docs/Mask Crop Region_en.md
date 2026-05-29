# Documentation
- Class name: WAS_Mask_Crop_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Crop_Region node processes images by identifying and cropping regions within a mask. It uses padding and region type parameters to control cropping behavior, ensuring resulting image segments integrate seamlessly for applications like game development or 3D modeling. This node plays a crucial role in image preprocessing for more tailored and visually coherent results.

# Input types
## Required
- mask
    - The mask parameter is a binary image array defining the region to crop from the original image. It is essential to the node's operation as it directly affects which image portions are selected for cropping.
    - Comfy dtype: np.ndarray
    - Python dtype: numpy.ndarray
## Optional
- padding
    - The padding parameter adds a border around the cropped region, helping smooth edges or preserve contextually important image content.
    - Comfy dtype: int
    - Python dtype: int
- region_type
    - The region_type parameter determines the cropping strategy: whether to focus on the primary or secondary region within the mask. This affects the final composition of the cropped image.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- cropped_mask
    - The cropped_mask output is the tensor representation of the resulting cropped region within the mask. It marks successful isolation of the desired region within the image.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- crop_data
    - The crop_data output provides detailed information about the dimensions and position of the cropped region, essential for further image processing or analysis.
    - Comfy dtype: Tuple[int, Tuple[int, int, int, int]]
    - Python dtype: Tuple[int, Tuple[int, int, int, int]]
- top_int
    - The top_int output represents the vertical position of the cropped region from the top of the image.
    - Comfy dtype: int
    - Python dtype: int
- left_int
    - The left_int output represents the horizontal position of the cropped region from the left side of the image.
    - Comfy dtype: int
    - Python dtype: int
- right_int
    - The right_int output specifies the horizontal position of the right edge of the cropped region within the image.
    - Comfy dtype: int
    - Python dtype: int
- bottom_int
    - The bottom_int output represents the vertical position of the bottom edge of the cropped region within the image.
    - Comfy dtype: int
    - Python dtype: int
- width_int
    - The width_int output provides the width of the cropped region, important for resizing or positioning image segments.
    - Comfy dtype: int
    - Python dtype: int
- height_int
    - The height_int output provides the height of the cropped region, a key measurement for maintaining aspect ratios or scaling image segments.
    - Comfy dtype: int
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Crop_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'mask': ('MASK',), 'padding': ('INT', {'default': 24, 'min': 0, 'max': 4096, 'step': 1}), 'region_type': (['dominant', 'minority'],)}}
    RETURN_TYPES = ('MASK', 'CROP_DATA', 'INT', 'INT', 'INT', 'INT', 'INT', 'INT')
    RETURN_NAMES = ('cropped_mask', 'crop_data', 'top_int', 'left_int', 'right_int', 'bottom_int', 'width_int', 'height_int')
    FUNCTION = 'mask_crop_region'
    CATEGORY = 'WAS Suite/Image/Masking'

    def mask_crop_region(self, mask, padding=24, region_type='dominant'):
        mask_pil = Image.fromarray(np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8))
        (region_mask, crop_data) = self.WT.Masking.crop_region(mask_pil, region_type, padding)
        region_tensor = pil2mask(ImageOps.invert(region_mask)).unsqueeze(0).unsqueeze(1)
        ((width, height), (left, top, right, bottom)) = crop_data
        return (region_tensor, crop_data, top, left, right, bottom, width, height)
```