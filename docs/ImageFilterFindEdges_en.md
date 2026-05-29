
# Documentation
- Class name: ImageFilterFindEdges
- Category: image/filter
- Output node: False

The ImageFilterFindEdges node applies an edge detection filter to a set of images, highlighting edges in each image. This process enhances the visual distinction of boundaries and lines, making it easier to identify shapes and features.

# Input types
## Required
- images
    - The images parameter represents the collection of images to which the edge detection filter will be applied. It is essential for defining the input data to be transformed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is a set of images processed with the edge detection filter, in which the visibility of edges and lines is enhanced.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterFindEdges:
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
        return applyImageFilter(images, ImageFilter.FIND_EDGES)

```
