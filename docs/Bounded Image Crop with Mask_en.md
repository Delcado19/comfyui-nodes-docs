# Documentation
- Class name: WAS_Bounded_Image_Crop_With_Mask
- Category: WAS Suite/Image/Bound
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `bounded_image_crop_with_mask` aims to intelligently crop an image based on boundaries defined by a corresponding mask. It enhances the image by focusing on the region of interest outlined by the mask, while applying padding to ensure the cropped region maintains the desired aspect ratio or size.

# Input types
## Required
- image
    - The input image to be cropped according to the mask. It is the primary object of the operation and determines what will be retained after cropping.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, PIL.Image.Image]
- mask
    - A mask that defines the region of interest within the image. It is used to identify the boundaries of the cropping operation and is critical for determining which parts of the image are important.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, PIL.Image.Image]
## Optional
- padding_left
    - The amount of padding to add to the left side of the cropped image. This parameter is optional and can be adjusted to control the final width of the cropped region.
    - Comfy dtype: INT
    - Python dtype: int
- padding_right
    - The amount of padding to add to the right side of the cropped image. It works together with the left-side padding to ensure the cropped image meets specific dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- padding_top
    - The amount of padding to add to the top of the cropped image. This padding helps maintain the aspect ratio of the cropped portion or achieve the desired height.
    - Comfy dtype: INT
    - Python dtype: int
- padding_bottom
    - The amount of padding to add to the bottom of the cropped image. It ensures the cropped image has sufficient space below the region of interest defined by the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- cropped_image
    - The resulting image after the cropping operation, including the region of interest defined by the mask and the applied padding.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_bounds
    - The coordinates defining the boundaries of the cropped region within the original image.
    - Comfy dtype: IMAGE_BOUNDS
    - Python dtype: List[Tuple[int, int, int, int]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Bounded_Image_Crop_With_Mask:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {'required': {'image': ('IMAGE',), 'mask': ('MASK',), 'padding_left': ('INT', {'default': 64, 'min': 0, 'max': 18446744073709551615}), 'padding_right': ('INT', {'default': 64, 'min': 0, 'max': 18446744073709551615}), 'padding_top': ('INT', {'default': 64, 'min': 0, 'max': 18446744073709551615}), 'padding_bottom': ('INT', {'default': 64, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('IMAGE', 'IMAGE_BOUNDS')
    FUNCTION = 'bounded_image_crop_with_mask'
    CATEGORY = 'WAS Suite/Image/Bound'

    def bounded_image_crop_with_mask(self, image, mask, padding_left, padding_right, padding_top, padding_bottom):
        image = image.unsqueeze(0) if image.dim() == 3 else image
        mask = mask.unsqueeze(0) if mask.dim() == 2 else mask
        mask_len = 1 if len(image) != len(mask) else len(image)
        cropped_images = []
        all_bounds = []
        for i in range(len(image)):
            if mask_len == 1 and i == 0 or mask_len > 0:
                rows = torch.any(mask[i], dim=1)
                cols = torch.any(mask[i], dim=0)
                (rmin, rmax) = torch.where(rows)[0][[0, -1]]
                (cmin, cmax) = torch.where(cols)[0][[0, -1]]
                rmin = max(rmin - padding_top, 0)
                rmax = min(rmax + padding_bottom, mask[i].shape[0] - 1)
                cmin = max(cmin - padding_left, 0)
                cmax = min(cmax + padding_right, mask[i].shape[1] - 1)
            all_bounds.append([rmin, rmax, cmin, cmax])
            cropped_images.append(image[i][rmin:rmax + 1, cmin:cmax + 1, :])
            return (torch.stack(cropped_images), all_bounds)
```