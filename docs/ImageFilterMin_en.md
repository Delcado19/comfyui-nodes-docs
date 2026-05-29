
# Documentation
- Class name: ImageFilterMin
- Category: image/filter
- Output node: False

The ImageFilterMin node is an image processing tool that enhances dark areas of an image and potentially reduces noise by applying a minimum filter. This filter selects the minimum pixel value within a neighborhood defined by the filter size, making it useful in image processing tasks that require reducing high-frequency noise or emphasizing darker regions.

# Input types
## Required
- images
    - Specifies the image to be processed. This parameter is crucial as it determines which inputs the minimum filter will be applied to, directly affecting the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size
    - Defines the size of the neighborhood around each pixel considered for minimum filtering. Larger sizes may result in more pronounced smoothing and noise reduction.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The resulting image after applying the minimum filter, which emphasizes darker areas and reduces noise.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterMin:
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
        return applyImageFilter(images, ImageFilter.MinFilter(int(size) + 1))

```
