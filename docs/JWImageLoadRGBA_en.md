
# Documentation
- Class name: JWImageLoadRGBA
- Category: jamesWalker55
- Output node: False

The JWImageLoadRGBA node is specifically designed for loading RGBA format images. It separates the image into color components and alpha channel, effectively creating a mask based on the alpha channel.

# Input types
## Required
- path
    - Specifies the image file path to load. This is critical for locating and loading RGBA format images.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - Represents the color components of the loaded image, excluding the alpha channel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Represents the inverted alpha channel of the image, used as a mask.
    - Comfy dtype: MASK
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
