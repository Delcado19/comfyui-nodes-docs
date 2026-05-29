# Documentation
- Class name: LatentCompositeMasked
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'composite' method of the LatentCompositeMasked node aims to blend the source latent sample into a specified position in the target latent sample. It intelligently manages the compositing operation by considering optional masking and resizing parameters to achieve seamless integration.

# Input types
## Required
- destination
    - “destination” parameter represents the latent sample into which the source sample will be composited. It is crucial to the node's operation as it defines the basis for blending the source sample.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- source
    - “source” parameter is the latent sample to be placed on the target. It plays a key role in the node's functionality as it provides the content to be composited.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- x
    - “x” parameter specifies the horizontal position where the source sample will be placed in the target. It is important as it determines the exact location of the compositing operation.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - “y” parameter defines the vertical position where the source sample will be placed in the target. It is an important factor in the node's execution as it determines the vertical placement of the composited content.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- resize_source
    - “resize_source” parameter is an optional flag that, when set to True, resizes the source to match the target's dimensions before the compositing operation. It enhances the node's flexibility in handling different latent sizes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask
    - “mask” parameter is an optional tensor that defines the mask of the source sample. It is used to control which parts of the source are visible after the compositing operation, adding a layer of control on the final output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- composited_latent
    - “composited_latent” output represents the final latent sample after the compositing operation. It encapsulates the result of blending the source into the target at the specified position with optional masking and resizing.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class LatentCompositeMasked:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'destination': ('LATENT',), 'source': ('LATENT',), 'x': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'y': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'resize_source': ('BOOLEAN', {'default': False})}, 'optional': {'mask': ('MASK',)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'composite'
    CATEGORY = 'latent'

    def composite(self, destination, source, x, y, resize_source, mask=None):
        output = destination.copy()
        destination = destination['samples'].clone()
        source = source['samples']
        output['samples'] = composite(destination, source, x, y, mask, 8, resize_source)
        return (output,)
```