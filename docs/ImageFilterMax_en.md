
# Documentation
- Class name: ImageFilterMax
- Category: image/filter
- Output node: False

The ImageFilterMax node applies a maximum filter to the image, enhancing the brightest regions, which may help reduce noise or highlight features.

# Input types
## Required
- images
    - Specifies the image to be processed, serving as the primary input for the filtering operation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- size
    - Determines the size of the filter kernel, affecting the degree of the maximum filtering effect.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Outputs the processed image after applying the maximum filter, highlighting the brightest regions.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterMax:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "size": ("INT", {
                    "default": 2,
                    "min": 0,
                    "step": 2
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/filter"

    def node(self, images, size):
        return applyImageFilter(images, ImageFilter.MaxFilter(int(size) + 1))

```
