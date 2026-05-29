# Documentation
- Class name: WAS_Mask_Subtract
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `subtract_masks` method of the WAS_Mask_Subtract node performs element-wise subtraction on two sets of masks, ensuring the result falls within valid pixel value ranges. It is designed to facilitate operations that require removing one mask from another, such as in image processing or masking applications.

# Input types
## Required
- masks_a
    - The first set of masks used for the subtraction operation. This parameter is critical as it defines the base from which the second set of masks will be subtracted.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- masks_b
    - The second set of masks to be subtracted from the first set. This parameter significantly affects the result of the operation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - The result of the subtraction operation on the two sets of masks, clamped to ensure valid pixel values.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Subtract:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks_a': ('MASK',), 'masks_b': ('MASK',)}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'subtract_masks'

    def subtract_masks(self, masks_a, masks_b):
        subtracted_masks = torch.clamp(masks_a - masks_b, 0, 255)
        return (subtracted_masks,)
```