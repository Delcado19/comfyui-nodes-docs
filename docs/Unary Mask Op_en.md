# Documentation
- Class name: UnaryMaskOp
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The UnaryMaskOp node is designed to perform various unary operations on a given mask image. It provides a set of methods to manipulate masks, such as inverting the mask, averaging pixel values, rounding, clamping values to a range, and taking absolute values. These operations are essential for preprocessing steps in image processing tasks where different representations of the mask may be required.

# Input types
## Required
- image
    - The image parameter is critical for the UnaryMaskOp node as it represents the input mask image on which the unary operation will be performed. The node's functionality is directly related to the quality and format of this input, which affects the outcome of the operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- op
    - The operation parameter determines the specific unary operation that will be applied to the input mask. It is a critical component as it dictates the type of transformation that will occur, influencing the final result executed by the node.
    - Comfy dtype: COMBO['invert', 'average', 'round', 'clamp', 'abs']
    - Python dtype: str

# Output types
- result
    - The result parameter encapsulates the outcome of the unary operation applied to the input mask. It is an important output as it reflects the transformed mask, which can be used for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class UnaryMaskOp:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'op': (['invert', 'average', 'round', 'clamp', 'abs'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'op_mask'
    CATEGORY = 'Masquerade Nodes'

    def op_mask(self, image, op):
        image = tensor2mask(image)
        if op == 'invert':
            return (1.0 - image,)
        elif op == 'average':
            mean = torch.mean(torch.mean(image, dim=2), dim=1)
            return (mean.unsqueeze(1).unsqueeze(2).repeat(1, image.shape[1], image.shape[2]),)
        elif op == 'round':
            return (torch.round(image),)
        elif op == 'clamp':
            return (torch.min(torch.max(image, torch.tensor(0.0)), torch.tensor(1.0)),)
        elif op == 'abs':
            return (torch.abs(image),)
```