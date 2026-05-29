
# Documentation
- Class name: ImageFilterSmooth
- Category: image/filter
- Output node: False

The ImageFilterSmooth node applies a smoothing filter to an image, reducing noise and minor imperfections to improve visual quality without significantly altering image content. This processing effectively enhances overall perception, making the image appear softer and clearer.

# Input types
## Required
- images
    - Specify the image to which the smoothing filter should be applied. This parameter aims to improve overall appearance by reducing noise and minor imperfections.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - Return the image after smoothing filter processing. The processed image has reduced noise and minor imperfections, enhancing visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterSmooth:
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
        return applyImageFilter(images, ImageFilter.SMOOTH)

```
