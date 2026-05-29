# Documentation
- Class name: ImageCompositeMasked
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'composite' method of the ImageCompositeMasked node is designed to seamlessly blend a source image into a target image at a specified location, optionally using a mask to define the blending region. It contributes to the overall image editing process by allowing precise control over image composition.

# Input types
## Required
- destination
- The target image serves as the base for compositing the source image. This is a key parameter because it determines the canvas on which compositing occurs.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- source
- The source image to be placed on the target image. It plays a crucial role in the composition process because it is the primary visual element being manipulated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- x
- The x coordinate determines the horizontal position of the source image on the target image. This is an important parameter because it controls the alignment of the source image within the target image.
    - Comfy dtype: INT
    - Python dtype: int
- y
- The y coordinate specifies the vertical position of the source image on the target image. It is essential for controlling the vertical placement of the source image in the composition.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- resize_source
- The 'resize_source' parameter decides whether the source image should be resized to fit the dimensions of the target image. It is important for adjusting the scale of the source image in the composition.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask
- The optional mask parameter allows specifying the region of the source image that should be visible in the composite. It is useful for creating complex image compositions where only certain parts of the source image need to be displayed.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- output
- The output of the 'composite' method is the final composited image, which results from blending the source image into the target image at the specified location and under the influence of an optional mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class ImageCompositeMasked:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'destination': ('IMAGE',), 'source': ('IMAGE',), 'x': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 1}), 'y': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 1}), 'resize_source': ('BOOLEAN', {'default': False})}, 'optional': {'mask': ('MASK',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'composite'
    CATEGORY = 'image'

    def composite(self, destination, source, x, y, resize_source, mask=None):
        destination = destination.clone().movedim(-1, 1)
        output = composite(destination, source.movedim(-1, 1), x, y, mask, 1, resize_source).movedim(1, -1)
        return (output,)
```