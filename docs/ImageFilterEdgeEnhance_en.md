
# Documentation
- Class name: ImageFilterEdgeEnhance
- Category: image/filter
- Output node: False

The ImageFilterEdgeEnhance node applies an edge enhancement filter to the image, highlighting edges and making image details more prominent. This processing improves image clarity and visual impact, suitable for scenes that require emphasis on contours and structure.

# Input types
## Required
- images
    - The image that needs edge enhancement processing. This is the core input of the node, determining the foundation of the final enhancement effect. The quality and characteristics of the image will directly affect the edge enhancement result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The image after edge enhancement processing. These images will present sharper edges and more prominent details, with overall visual effects that are clearer and more striking.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterEdgeEnhance:
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
        return applyImageFilter(images, ImageFilter.EDGE_ENHANCE)

```
