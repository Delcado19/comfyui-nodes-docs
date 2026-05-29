# Documentation
- Class name: MasksToMaskList
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The MasksToMaskList node is designed to process a series of mask images, converting them into a list of 3D mask tensors suitable for further operations in image processing tasks. It ensures that each mask is in the correct format, regardless of its initial dimensions, by applying necessary transformations.

# Input types
## Required
- masks
    - The 'masks' parameter is the collection of mask images that the node will process. This is crucial for the node's operation, as it determines the input data that will be converted into a list of 3D mask tensors.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]

# Output types
- mask_list
    - The 'mask_list' output is a series of processed 3D mask tensors ready for subsequent image processing tasks. Each tensor in the list corresponds to a converted mask from the input.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class MasksToMaskList:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'masks': ('MASK',)}}
    RETURN_TYPES = ('MASK',)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Operation'

    def doit(self, masks):
        if masks is None:
            empty_mask = torch.zeros((64, 64), dtype=torch.float32, device='cpu')
            return ([empty_mask],)
        res = []
        for mask in masks:
            res.append(mask)
        print(f'mask len: {len(res)}')
        res = [make_3d_mask(x) for x in res]
        return (res,)
```