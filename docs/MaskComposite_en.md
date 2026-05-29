# Documentation
- Class name: MaskComposite
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MaskComposite node is designed to perform various operations on mask images, allowing the combination of source and target masks based on a specified operation. It plays a critical role in image processing workflows that require mask operations, such as in computer vision or graphic design applications.

# Input types
## Required
- destination
    - The target parameter is the base mask that will be modified through the operation. It is crucial because it determines the initial state of the mask before any modifications are applied.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- source
    - The source parameter represents the mask to be combined with the target mask. Its role is essential as it contributes to the final result of the mask operation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- x
    - The x parameter specifies the horizontal position of the source mask relative to the target mask. It is important because it determines the placement of the source within the target mask.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y parameter defines the vertical position of the source mask relative to the target mask. Its importance lies in determining the vertical placement of the source within the target mask.
    - Comfy dtype: INT
    - Python dtype: int
- operation
    - The operation parameter indicates the type of combination to be performed between the source and target masks. It is critical because it defines the logic of how the masks are merged.
    - Comfy dtype: COMBO['multiply', 'add', 'subtract', 'and', 'or', 'xor']
    - Python dtype: str

# Output types
- output
    - The output parameter is the result of the mask combination operation. It contains the final state of the mask after all transformations have been applied.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class MaskComposite:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'destination': ('MASK',), 'source': ('MASK',), 'x': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 1}), 'y': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 1}), 'operation': (['multiply', 'add', 'subtract', 'and', 'or', 'xor'],)}}
    CATEGORY = 'mask'
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'combine'

    def combine(self, destination, source, x, y, operation):
        output = destination.reshape((-1, destination.shape[-2], destination.shape[-1])).clone()
        source = source.reshape((-1, source.shape[-2], source.shape[-1]))
        (left, top) = (x, y)
        (right, bottom) = (min(left + source.shape[-1], destination.shape[-1]), min(top + source.shape[-2], destination.shape[-2]))
        (visible_width, visible_height) = (right - left, bottom - top)
        source_portion = source[:, :visible_height, :visible_width]
        destination_portion = destination[:, top:bottom, left:right]
        if operation == 'multiply':
            output[:, top:bottom, left:right] = destination_portion * source_portion
        elif operation == 'add':
            output[:, top:bottom, left:right] = destination_portion + source_portion
        elif operation == 'subtract':
            output[:, top:bottom, left:right] = destination_portion - source_portion
        elif operation == 'and':
            output[:, top:bottom, left:right] = torch.bitwise_and(destination_portion.round().bool(), source_portion.round().bool()).float()
        elif operation == 'or':
            output[:, top:bottom, left:right] = torch.bitwise_or(destination_portion.round().bool(), source_portion.round().bool()).float()
        elif operation == 'xor':
            output[:, top:bottom, left:right] = torch.bitwise_xor(destination_portion.round().bool(), source_portion.round().bool()).float()
        output = torch.clamp(output, 0.0, 1.0)
        return (output,)
```