# Documentation
- Class name: MergeMasks
- Category: Video Helper Suite 🎥🅥🅗🅢/mask
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The MergeMasks node aims to merge two input masks into a single mask. It intelligently handles size differences between masks by using a specified merge strategy and scaling method, ensuring seamless integration of the masks. This node is particularly useful in scenarios where multiple mask layers need to be combined for further processing or visualization.

# Input types
## Required
- mask_A
    - The first mask to merge, which is a key component of the final combined mask. It determines the initial structure into which the second mask will be integrated.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_B
    - The second mask to merge, which will be aligned and integrated with the first mask according to the merge strategy.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- merge_strategy
    - Defines how the two masks should be merged, whether by matching the size of one mask to the other, or by choosing the smaller or larger of the two.
    - Comfy dtype: str
    - Python dtype: str
- scale_method
    - Specifies the method used to scale the masks to match sizes, which is crucial for the merge process.
    - Comfy dtype: str
    - Python dtype: str
- crop
    - Indicates the cropping technique to apply during scaling to ensure the masks align correctly after merging.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- MASK
    - The output is the combined mask resulting from the merge process, representing the integrated structure of the input masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- count
    - Provides the count of masks that have been merged, offering insight into the number of layers integrated in the final mask.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class MergeMasks:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask_A': ('MASK',), 'mask_B': ('MASK',), 'merge_strategy': (MergeStrategies.list_all,), 'scale_method': (ScaleMethods.list_all,), 'crop': (CropMethods.list_all,)}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢/mask'
    RETURN_TYPES = ('MASK', 'INT')
    RETURN_NAMES = ('MASK', 'count')
    FUNCTION = 'merge'

    def merge(self, mask_A: Tensor, mask_B: Tensor, merge_strategy: str, scale_method: str, crop: str):
        masks = []
        if mask_A.shape[2] != mask_B.shape[2] or mask_A.shape[1] != mask_B.shape[1]:
            A_size = mask_A.shape[2] * mask_A.shape[1]
            B_size = mask_B.shape[2] * mask_B.shape[1]
            use_A_as_template = True
            if merge_strategy == MergeStrategies.MATCH_A:
                pass
            elif merge_strategy == MergeStrategies.MATCH_B:
                use_A_as_template = False
            elif merge_strategy in (MergeStrategies.MATCH_SMALLER, MergeStrategies.MATCH_LARGER):
                if A_size <= B_size:
                    use_A_as_template = True if merge_strategy == MergeStrategies.MATCH_SMALLER else False
            mask_A = torch.unsqueeze(mask_A, 1)
            mask_B = torch.unsqueeze(mask_B, 1)
            if use_A_as_template:
                mask_B = comfy.utils.common_upscale(mask_B, mask_A.shape[3], mask_A.shape[2], scale_method, crop)
            else:
                mask_A = comfy.utils.common_upscale(mask_A, mask_B.shape[3], mask_B.shape[2], scale_method, crop)
            mask_A = torch.squeeze(mask_A, 1)
            mask_B = torch.squeeze(mask_B, 1)
        masks.append(mask_A)
        masks.append(mask_B)
        all_masks = torch.cat(masks, dim=0)
        return (all_masks, all_masks.size(0))
```