# Documentation
- Class name: ImageColorToMask
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageColorToMask node is designed to convert a color image into a binary mask based on a specified color. It identifies pixels in the image that match the given color and converts those pixels into a mask, thereby highlighting regions of interest. This node plays a critical role in applications that require color-based masking, such as object detection and segmentation.

# Input types
## Required
- image
    - The 'image' parameter is the input color image that the node will process. It is fundamental to the node's operation, as it is the source from which the mask is derived. The content of the image directly affects the accuracy of the mask and the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- color
    - The 'color' parameter defines the specific color in the image that should be converted into a mask. It is a critical parameter, as it determines which pixels will be included in the final mask. The color is specified in a numerical format, allowing precise targeting of the desired hue.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The 'mask' output is a binary representation of the input image, where the specified color has been converted into a mask. It is important because it provides a clear delineation between regions of interest and the rest of the image, which can be used for further analysis or processing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class ImageColorToMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'color': ('INT', {'default': 0, 'min': 0, 'max': 16777215, 'step': 1, 'display': 'color'})}}
    CATEGORY = 'mask'
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'image_to_mask'

    def image_to_mask(self, image, color):
        temp = (torch.clamp(image, 0, 1.0) * 255.0).round().to(torch.int)
        temp = torch.bitwise_left_shift(temp[:, :, :, 0], 16) + torch.bitwise_left_shift(temp[:, :, :, 1], 8) + temp[:, :, :, 2]
        mask = torch.where(temp == color, 255, 0).float()
        return (mask,)
```