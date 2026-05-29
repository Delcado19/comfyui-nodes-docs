# Documentation
- Class name: BitwiseAndMask
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the BitwiseAndMask node is designed to perform a bitwise AND operation on two input masks. It is essential for applications that require combining mask layers, such as in image segmentation or data filtering processes. This method ensures that only the common elements of both masks are retained in the output, contributing to more refined and precise results.

# Input types
## Required
- mask1
    - The 'mask1' parameter is the first input mask for the bitwise AND operation. It plays a critical role in determining the final mask by contributing its structure and content. The execution of the node is directly influenced by the properties of 'mask1', which must be shape-aligned with 'mask2' for a valid bitwise operation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask2
    - The 'mask2' parameter is the second input mask used in the bitwise AND operation alongside 'mask1'. Its importance is equal to that of 'mask1', as it also defines the common regions that will appear in the resulting mask. The functionality of the node depends on the shape compatibility between 'mask1' and 'mask2'.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- mask
    - The 'mask' output is the result of the bitwise AND operation between 'mask1' and 'mask2'. It represents the common regions present in both input masks and is essential for further processing or analysis that requires a single combined mask representation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class BitwiseAndMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask1': ('MASK',), 'mask2': ('MASK',)}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Operation'

    def doit(self, mask1, mask2):
        mask = bitwise_and_masks(mask1, mask2)
        return (mask,)
```