
# Documentation
- Class name: ImageFilterSmoothMore
- Category: image/filter
- Output node: False

The ImageFilterSmoothMore node applies a stronger smoothing filter to the image, elevating its visual softness above the basic smoothing level.

# Input types
## Required
- images
    - Specifies the image to which the enhanced smoothing filter is applied, aiming to improve its visual softness.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - Returns the image after enhanced smoothing, presenting a softer visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterSmoothMore:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/filter"

    def node(self, images):
        return applyImageFilter(images, ImageFilter.SMOOTH_MORE)

```
