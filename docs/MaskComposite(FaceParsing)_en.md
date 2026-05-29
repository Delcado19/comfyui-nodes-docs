# Documentation
- Class name: MaskComposite
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The MaskComposite node aims to perform various logical and arithmetic operations on two mask tensors. It plays a key role in image processing tasks, especially in the field of face parsing, where it can combine masks to refine the segmentation of facial features. This node operates on the principle of element-wise operations, ensuring that the output mask is the result of the specified operation applied to each pair of corresponding elements in the input masks.

# Input types
## Required
- destination
    - The destination parameter is a tensor representing the initial mask to which the operation will be applied. It is crucial to the node's execution as it determines the base mask that will be modified according to the specified operation.
    - Comfy dtype: "MASK"
    - Python dtype: torch.Tensor
- source
    - The source parameter is another tensor that will be combined with the destination tensor to perform the specified operation. It is essential as it provides the secondary input that will interact with the destination mask to produce the final mask result.
    - Comfy dtype: "MASK"
    - Python dtype: torch.Tensor
- operation
    - The operation parameter indicates the type of element-wise operation to be performed between the destination and source tensors. It is a key determinant of how the final mask is computed, allowing various forms of mask operations.
    - Comfy dtype: COMBO["multiply", "add", "subtract", "and", "or", "xor"]
    - Python dtype: str

# Output types
- mask_result
    - The mask_result output parameter is the tensor obtained after applying the specified operation to the input destination and source tensors. It represents the final combined mask after the operation is executed.
    - Comfy dtype: "MASK"
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class MaskComposite:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'destination': ('MASK', {}), 'source': ('MASK', {}), 'operation': (['multiply', 'add', 'subtract', 'and', 'or', 'xor'],)}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, destination: Tensor, source: Tensor, operation: str):
        mask_result = destination
        if operation == 'multiply':
            mask_result = mask_result * source
        if operation == 'add':
            mask_result = mask_result + source
        if operation == 'subtract':
            mask_result = mask_result - source
        if operation == 'and':
            mask_result = mask_result & source
        if operation == 'or':
            mask_result = mask_result | source
        if operation == 'xor':
            mask_result = mask_result ^ source
        return (mask_result,)
```