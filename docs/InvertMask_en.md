# Documentation
- Class name: InvertMask
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The `invert` method of the InvertMask node is designed to perform a simple yet crucial operation in image processing. It flips the input mask, effectively turning pixel values from 0 to 1 and vice versa, which is often required for certain types of image manipulation or enhancement tasks. This node plays a key role in changing the visual representation of the mask, providing a different perspective or approach for subsequent analysis or transformation.

# Input types
## Required
- mask
    - Parameter `mask` is the input to the `invert` method and is essential for the node's operation. It represents the original mask that needs to be flipped. The inversion process is fundamental because it can significantly alter the mask's context and usage in downstream tasks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- out
    - The output of the `invert` method is a new mask that is the inversion of the input mask. This output is important because it represents the transformed state of the original mask, ready for further image processing steps.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class InvertMask:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'mask': ('MASK',)}}
    CATEGORY = 'mask'
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'invert'

    def invert(self, mask):
        out = 1.0 - mask
        return (out,)
```