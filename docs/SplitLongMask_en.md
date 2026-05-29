# Documentation
- Class name: SplitLongMask
- Category: ♾️Mixlab/Mask
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The SplitLongMask node splits a single large mask into multiple smaller masks based on a specified count or height. This process improves mask manageability and applicability across various scenarios, such as image segmentation or object tracking, where smaller, more manageable units are preferred.

# Input types
## Required
- long_mask
    - The long_mask parameter is the primary input of the SplitLongMask node. It represents the large mask to be split. The quality and dimensions of this mask directly affect the output, determining the characteristics of the resulting smaller masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- count
    - The count parameter specifies the desired number of smaller masks to output. It plays a critical role in determining the size and quantity of the resulting masks, which is essential for applications requiring specific mask segment distributions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- masks
    - The masks output of the SplitLongMask node is a list of smaller masks derived from the original long_mask. These masks are critical for applications that benefit from segmented mask inputs, such as image processing or machine learning tasks involving mask-based operations.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class SplitLongMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'long_mask': ('MASK',), 'count': ('INT', {'default': 1, 'min': 1, 'max': 1024, 'step': 1})}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Mask'
    OUTPUT_IS_LIST = (True,)

    def run(self, long_mask, count):
        masks = []
        nh = long_mask.shape[0] // count
        if nh * count == long_mask.shape[0]:
            masks = split_mask_by_new_height(long_mask, nh)
        else:
            masks = split_mask_by_new_height(long_mask, long_mask.shape[0])
        return (masks,)
```