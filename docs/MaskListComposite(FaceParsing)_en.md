# Documentation
- Class name: MaskListComposite
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The MaskListComposite node is designed to perform a specified logical or arithmetic operation on a series of binary masks. It processes input masks sequentially, applying the chosen operation to combine them into a single result mask. This node is critical in tasks that require operating on and combining binary facial feature masks, such as feature extraction in face segmentation or facial parsing.

# Input types
## Required
- mask
    - The `mask` parameter is the set of binary masks to be combined using the operation specified by the `operation` parameter. It is essential to the node's function because it determines the inputs that will undergo the logical or arithmetic operation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- operation
    - The `operation` parameter indicates the type of operation to perform on the input masks. It can be one of `multiply`, `add`, `and`, `or`, or `xor`, and it significantly influences the final result of the mask combination process.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- result
    - The `result` parameter is the node's output, representing the combined mask after applying the specified operation to the input masks. It encapsulates the node's processing result and is crucial for downstream tasks that depend on the synthesized mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class MaskListComposite:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'mask': ('MASK', {}), 'operation': (['multiply', 'add', 'and', 'or', 'xor'],)}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, mask: Tensor, operation: str):
        mask_result = mask[0]
        for item in mask[1:]:
            if operation == 'multiply':
                mask_result = mask_result * item
            if operation == 'add':
                mask_result = mask_result + item
            if operation == 'and':
                mask_result = mask_result & item
            if operation == 'or':
                mask_result = mask_result | item
            if operation == 'xor':
                mask_result = mask_result ^ item
        return (mask_result.unsqueeze(0),)
```