
# Documentation
- Class name: ImageFilterEdgeEnhanceMore
- Category: image/filter
- Output node: False

The ImageFilterEdgeEnhanceMore node applies an edge enhancement filter to strengthen edges in an image, making them more prominent. This node is part of a series of image filter nodes designed to modify and enhance the visual appearance of images by applying specific filter effects.

# Input types
## Required
- images
    - The image to which the edge enhancement filter should be applied. This input is crucial for defining the visual content that will undergo enhancement processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is the image processed with the edge enhancement filter, with more prominent edges.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterEdgeEnhanceMore:
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
        return applyImageFilter(images, ImageFilter.EDGE_ENHANCE_MORE)

```
