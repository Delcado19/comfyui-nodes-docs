
# Documentation
- Class name: DF_Get_image_size
- Category: Derfuu_Nodes/Functions
- Output node: False

This node aims to calculate and return the dimensions of an image, specifically its width and height. It simplifies the complexity of dealing with image data structures and provides a straightforward method to obtain image dimension information.

# Input types
## Required
- image
    - The 'image' parameter is crucial as it represents the image data that will be used to determine the dimensions. This parameter directly influences the node's ability to compute and return the correct image dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- WIDTH
    - Represents the width of the image, in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- HEIGHT
    - Represents the height of the image, in pixels.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class GetImageSize:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": Field.image(),
            }
        }

    RETURN_TYPES = ("INT", "INT",)
    RETURN_NAMES = ("WIDTH", "HEIGHT")
    CATEGORY = TREE_FUNCTIONS

    FUNCTION = 'get_size'

    def get_size(self, image):
        size = sizes.get_image_size(image)
        return (size[0], size[1], )

```
