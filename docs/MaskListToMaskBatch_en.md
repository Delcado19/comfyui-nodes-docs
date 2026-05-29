# Documentation
- Class name: MaskListToMaskBatch
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The MaskListToMaskBatch node is designed to combine a series of mask images into a single batch tensor. It processes each mask in the list, ensuring they are in a 3D format suitable for batch processing, handling both single and multiple masks effectively. This node plays a key role in preparing batch input data required by downstream machine learning models.

# Input types
## Required
- mask
    - The ‘mask’ parameter is the list of mask images processed by the node. It is critical to the node’s operation because it directly affects the output batch tensor. The node handles this list by converting each mask to a 3D format (if needed) and then concatenating them into a single tensor for batch processing.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]

# Output types
- mask_batch
    - The output of the MaskListToMaskBatch node is a single tensor representing a batch of masks. This tensor is formatted to be compatible with machine‑learning models expecting batch input data, which is essential for subsequent model training or inference stages.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class MaskListToMaskBatch:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',)}}
    INPUT_IS_LIST = True
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Operation'

    def doit(self, mask):
        if len(mask) == 1:
            mask = make_3d_mask(mask[0])
            return (mask,)
        elif len(mask) > 1:
            mask1 = make_3d_mask(mask[0])
            for mask2 in mask[1:]:
                mask2 = make_3d_mask(mask2)
                if mask1.shape[1:] != mask2.shape[1:]:
                    mask2 = comfy.utils.common_upscale(mask2.movedim(-1, 1), mask1.shape[2], mask1.shape[1], 'lanczos', 'center').movedim(1, -1)
                mask1 = torch.cat((mask1, mask2), dim=0)
            return (mask1,)
        else:
            empty_mask = torch.zeros((1, 64, 64), dtype=torch.float32, device='cpu').unsqueeze(0)
            return (empty_mask,)
```