# Documentation
- Class name: MaskCombineOp
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The MaskCombineOp node is designed to perform various operations on two input images, such as union, intersection, and multiplication, to combine them into a single image. It can handle different types of operations to achieve the desired visual effect, which is very useful in image processing and computer vision tasks.

# Input types
## Required
- image1
    - The first image to be combined with another image. It plays a key role in determining the final output of the node operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The second image to be combined with the first image. It is essential for achieving the desired combination effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- op
    - The operation to be performed on the two images. It defines how the images are combined and is a key parameter of the node's functionality.
    - Comfy dtype: COMBO['union (max)', 'intersection (min)', 'difference', 'multiply', 'multiply_alpha', 'add', 'greater_or_equal', 'greater']
    - Python dtype: str
- clamp_result
    - Determines whether the result should be clamped within a certain range after the operation. Clamping can prevent extreme values that certain operations may produce.
    - Comfy dtype: COMBO['yes', 'no']
    - Python dtype: str
- round_result
    - Specifies whether the result should be rounded to the nearest integer after the operation. Rounding is useful for certain types of image processing.
    - Comfy dtype: COMBO['no', 'yes']
    - Python dtype: str

# Output types
- result
    - The combined image produced by the operation performed by the node. It represents the visual result of the combination process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class MaskCombineOp:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image1': ('IMAGE',), 'image2': ('IMAGE',), 'op': (['union (max)', 'intersection (min)', 'difference', 'multiply', 'multiply_alpha', 'add', 'greater_or_equal', 'greater'],), 'clamp_result': (['yes', 'no'],), 'round_result': (['no', 'yes'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'combine'
    CATEGORY = 'Masquerade Nodes'

    def combine(self, image1, image2, op, clamp_result, round_result):
        (image1, image2) = tensors2common(image1, image2)
        if op == 'union (max)':
            result = torch.max(image1, image2)
        elif op == 'intersection (min)':
            result = torch.min(image1, image2)
        elif op == 'difference':
            result = image1 - image2
        elif op == 'multiply':
            result = image1 * image2
        elif op == 'multiply_alpha':
            image1 = tensor2rgba(image1)
            image2 = tensor2mask(image2)
            result = torch.cat((image1[:, :, :, :3], (image1[:, :, :, 3] * image2).unsqueeze(3)), dim=3)
        elif op == 'add':
            result = image1 + image2
        elif op == 'greater_or_equal':
            result = torch.where(image1 >= image2, 1.0, 0.0)
        elif op == 'greater':
            result = torch.where(image1 > image2, 1.0, 0.0)
        if clamp_result == 'yes':
            result = torch.min(torch.max(result, torch.tensor(0.0)), torch.tensor(1.0))
        if round_result == 'yes':
            result = torch.round(result)
        return (result,)
```