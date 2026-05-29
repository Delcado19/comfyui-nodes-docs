# Documentation
- Class name: AddMask
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The AddMask node is designed to perform pixel-wise addition of two binary masks. It is used to combine mask images in a way that preserves the integrity of the original masks while creating a new mask that represents their union.

# Input types
## Required
- mask1
    - The first mask to be added. It is a key component as it helps form the resulting mask, determining the regions that will be included in the final combined mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask2
    - The second mask to be added. Like the first mask, it plays an important role in defining the output mask by contributing regions to be included in the combined result.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- mask
    - The output is a new binary mask obtained by adding the input masks. It represents the union of the two input masks, indicating the regions where both masks overlap.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class AddMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask1': ('MASK',), 'mask2': ('MASK',)}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Operation'

    def doit(self, mask1, mask2):
        mask = add_masks(mask1, mask2)
        return (mask,)
```