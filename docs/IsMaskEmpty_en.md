# Documentation
- Class name: IsMaskEmptyNode
- Category: util
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

The IsMaskEmptyNode class is designed to evaluate the inner content of a mask tensor, determining whether it consists entirely of zero values. This node plays a key role in image processing and machine learning workflows, where the presence of an empty mask is of significant importance. It abstracts a binary result that contributes to the decision-making process, which can be used to trigger subsequent actions or filter out unnecessary data.

# Input types
## Required
- mask
    - The parameter 'mask' is a tensor representing the mask to evaluate. It is crucial to the node's operation because it directly affects whether the mask is considered empty. The tensor should contain numerical values, where zeros indicate empty or unimportant regions.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Output types
- boolean_number
    - The output 'boolean_number' is a numerical representation of a boolean value that indicates whether the input mask is empty. A value of 1 means the mask is empty (all zeros), while a value of 0 means the mask contains non-zero elements.
    - Comfy dtype: int
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class IsMaskEmptyNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',)}}
    RETURN_TYPES = ['NUMBER']
    RETURN_NAMES = ['boolean_number']
    FUNCTION = 'main'
    CATEGORY = 'util'

    def main(self, mask):
        return (torch.all(mask == 0).int().item(),)
```