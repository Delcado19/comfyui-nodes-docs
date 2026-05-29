
# Documentation
- Class name: ImageFilterEmboss
- Category: image/filter
- Output node: False

The ImageFilterEmboss node applies an emboss filter to an image, creating a three-dimensional effect by highlighting edges and textures. This filter enhances the sense of depth in the image, making it appear as if it were a raised or recessed carving.

# Input types
## Required
- images
    - The image to which the emboss filter will be applied. This input is crucial for defining the visual content that will be transformed. It serves as the foundation for the filter effect, determining the detail and quality of the final embossed result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is the image processed with the emboss effect, with enhanced textures and edges. This processed image typically exhibits a unique sense of depth and texture, giving a flat image a sense of depth and layering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterEmboss:
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
        return applyImageFilter(images, ImageFilter.EMBOSS)

```
