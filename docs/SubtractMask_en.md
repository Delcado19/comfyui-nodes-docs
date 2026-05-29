# Documentation
- Class name: SubtractMask
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the SubtractMask node performs a subtraction operation on two mask images, providing a result mask representing the difference between the inputs. It is intended to be a basic operation in image processing workflows where certain areas need to be removed or added from an image.

# Input types
## Required
- mask1
    - The first mask used for the subtraction operation. It plays a crucial role in determining the outcome of the result mask as it defines the initial state of the mask from which the second mask will be subtracted.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask2
    - The second mask to be subtracted from the first mask. Its importance lies in modifying the content of the first mask, thus producing the final mask that reflects the effect of the subtraction.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- mask
    - The output mask is the result of the subtraction operation between the two input masks. It represents the area remaining after subtracting the second mask from the first mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class SubtractMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask1': ('MASK',), 'mask2': ('MASK',)}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Operation'

    def doit(self, mask1, mask2):
        mask = subtract_masks(mask1, mask2)
        return (mask,)
```