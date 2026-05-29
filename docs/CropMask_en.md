# Documentation
- Class name: CropMask
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CropMask node is designed to extract a specified region of interest from a larger mask image. It operates by defining a rectangular area using provided coordinates and dimensions, allowing precise cropping of the desired portion. This node is essential for focusing analysis on specific areas within an image, improving the efficiency and relevance of subsequent processing steps.

# Input types
## Required
- mask
    - The 'mask' parameter is the input mask image from which the region will be cropped. It is the foundational data on which the node operates, and the node's output directly depends on the content and structure of this input.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- x
    - The 'x' parameter specifies the horizontal starting point for the cropping operation. It is critical for determining the exact position within the mask where cropping will begin.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The 'y' parameter defines the vertical starting point for the cropping operation. It works together with the 'x' parameter to precisely specify the top-left corner of the cropping rectangle.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The 'width' parameter sets the width of the cropping rectangle. It determines the horizontal extent of the region to be extracted from the mask image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter establishes the vertical dimension of the cropping rectangle. It is critical for defining the vertical extent of the region to be cropped from the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- cropped_mask
    - The 'cropped_mask' output is the result of the cropping operation, showcasing a smaller portion of the original mask as specified by the input parameters. This output is important for further processing or analysis that requires a focused view of a specific region within the mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CropMask:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'mask': ('MASK',), 'x': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 1}), 'y': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 1}), 'width': ('INT', {'default': 512, 'min': 1, 'max': MAX_RESOLUTION, 'step': 1}), 'height': ('INT', {'default': 512, 'min': 1, 'max': MAX_RESOLUTION, 'step': 1})}}
    CATEGORY = 'mask'
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'crop'

    def crop(self, mask, x, y, width, height):
        mask = mask.reshape((-1, mask.shape[-2], mask.shape[-1]))
        out = mask[:, y:y + height, x:x + width]
        return (out,)
```