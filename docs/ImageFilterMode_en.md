
# Documentation
- Class name: ImageFilterMode
- Category: image/filter
- Output node: False

The ImageFilterMode node applies a mode filter to an image. The filter replaces each pixel’s value with the most frequent value within a specified neighborhood size, thereby enhancing uniformity or reducing noise.

# Input types
## Required
- images
    - Specify the image to process, which serves as the primary input for the mode filtering operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size
    - Determine the size of the neighborhood around each pixel considered when computing the mode, affecting the degree of filtering.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Return the image after applying the mode filter, showing enhanced uniformity or reduced noise.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterMode:
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
        return applyImageFilter(images, ImageFilter.ModeFilter(int(size) + 1))

```
