
# Documentation
- Class name: ImageFilterContour
- Category: image/filter
- Output node: False

ImageFilterContour node is an image processing tool that can apply contour filter to images, enhance image edges to create a clear contour effect. This node is mainly used for image processing tasks that aim to emphasize object boundaries and features in images.

# Input types
## Required
- images
    - images parameter represents the set of images to which the contour filter will be applied. It is key to defining the input data, which will undergo transformations to highlight edges and features.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is a modified version of the input image. Each image is processed to emphasize its contours, making edges and features more prominent.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterContour:
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
        return applyImageFilter(images, ImageFilter.CONTOUR)

```
