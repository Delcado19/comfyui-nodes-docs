
# Documentation
- Class name: JWImageLoadRGB
- Category: jamesWalker55
- Output node: False

This node is designed to load an image from a specified path and convert it to RGB format. It abstracts the complexity of image file handling and conversion, providing a direct method for working with image data in RGB format.

# Input types
## Required
- path
    - Specifies the path of the image file to load. This parameter is critical, as it determines which image file the node will process and convert to RGB format.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The output is the image data converted to RGB format, ready for further processing or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
@register_node("JWImageLoadRGB", "Image Load RGB")
class _:
    CATEGORY = "jamesWalker55"
    INPUT_TYPES = lambda: {
        "required": {
            "path": ("STRING", {"default": "./image.png"}),
        }
    }
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    def execute(self, path: str):
        assert isinstance(path, str)

        img = load_image(path)
        return (img,)

```
