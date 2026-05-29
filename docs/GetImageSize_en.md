
# Documentation
- Class name: GetImageSize
- Category: stability/image
- Output node: False

This node determines the image size by analyzing the image shape, specifically its width and height.

# Input types
## Required
- image
    - Image whose size needs to be determined. This input is essential for computing the image size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width
    - Width of the input image, derived from its shape.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the input image, derived from its shape.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [EmptyLatentImage](../../Comfy/Nodes/EmptyLatentImage.md)
    - Reroute



## Source code
```python
class GetImageSize:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
            }
        }

    RETURN_TYPES = ("INT", "INT")
    RETURN_NAMES = ("width", "height")

    FUNCTION = "get_size"

    CATEGORY = "stability/image"

    def get_size(self, image):
        _, height, width, _ = image.shape
        return (width, height)

```
