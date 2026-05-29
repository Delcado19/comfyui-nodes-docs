# Documentation
- Class name: ImagePadForOutpaint
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ImagePadForOutpaint node expands image borders, useful for outpainting tasks. It adds a specified number of pixels to each side and optionally applies feathering to smoothly blend new edges with the original image.

# Input types
## Required
- image
- Image parameter is the input image to be padded. It is crucial because it determines the content to be expanded.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- left
- left parameter specifies the number of pixels to add on the left side. It determines the final width of the expanded image.
    - Comfy dtype: INT
    - Python dtype: int
- top
- top parameter specifies the number of pixels to add on the top side. It controls vertical expansion of the image.
    - Comfy dtype: INT
    - Python dtype: int
- right
- right parameter specifies the number of pixels to add on the right side. It affects the final width of the expanded image.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
- bottom parameter specifies the number of pixels to add on the bottom side. It is essential for controlling horizontal expansion of the image.
    - Comfy dtype: INT
    - Python dtype: int
- feathering
- feathering parameter controls the smoothness of the transition between the original area and the newly added area. Higher values create a more gradual transition.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- new_image
- new_image output is the result of the expansion, showing the original image padded on each side by the specified amounts.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
- mask output is a binary image that separates the original image area from the newly added region, primarily for blending purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class ImagePadForOutpaint:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'left': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'top': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'right': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'bottom': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'feathering': ('INT', {'default': 40, 'min': 0, 'max': MAX_RESOLUTION, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'expand_image'
    CATEGORY = 'image'

    def expand_image(self, image, left, top, right, bottom, feathering):
        (d1, d2, d3, d4) = image.size()
        new_image = torch.ones((d1, d2 + top + bottom, d3 + left + right, d4), dtype=torch.float32) * 0.5
        new_image[:, top:top + d2, left:left + d3, :] = image
        mask = torch.ones((d2 + top + bottom, d3 + left + right), dtype=torch.float32)
        t = torch.zeros((d2, d3), dtype=torch.float32)
        if feathering > 0 and feathering * 2 < d2 and (feathering * 2 < d3):
            for i in range(d2):
                for j in range(d3):
                    dt = i if top != 0 else d2
                    db = d2 - i if bottom != 0 else d2
                    dl = j if left != 0 else d3
                    dr = d3 - j if right != 0 else d3
                    d = min(dt, db, dl, dr)
                    if d >= feathering:
                        continue
                    v = (feathering - d) / feathering
                    t[i, j] = v * v
        mask[top:top + d2, left:left + d3] = t
        return (new_image, mask)
```