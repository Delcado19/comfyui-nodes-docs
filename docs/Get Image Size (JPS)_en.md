
# Documentation
- Class name: Get Image Size (JPS)
- Category: JPS Nodes/Image
- Output node: False

The Get Image Size (JPS) node is designed to retrieve the size information of an image, specifically the width and height. It abstracts the process of analyzing image dimensions, providing a simple and direct way to obtain these basic properties.

# Input types
## Required
- image
    - The image whose size needs to be determined. This input is critical as it directly affects the output, providing the necessary data required to calculate the image dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width
    - The width of the input image, in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height of the input image, in pixels.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Get_Image_Size:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
            }
        }

    RETURN_TYPES = ("INT", "INT",)
    RETURN_NAMES = ("width", "height",)
    CATEGORY = "JPS Nodes/Image"

    FUNCTION = 'get_imagesize'

    def get_imagesize(self, image):
        samples = image.movedim(-1,1)
        size_w = samples.shape[3]
        size_h = samples.shape[2]

        return (size_w, size_h, )

```
