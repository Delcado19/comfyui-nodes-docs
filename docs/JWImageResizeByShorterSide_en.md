
# Documentation
- Class name: JWImageResizeByShorterSide
- Category: jamesWalker55
- Output node: False

The JWImageResizeByShorterSide node is used to resize images by adjusting the shorter side to a specified size while maintaining the aspect ratio. This node supports multiple interpolation methods to accommodate different image scaling needs.

# Input types
## Required
- image
    - The image tensor to be resized. This is the key input defining the visual content to be resized.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size
    - The target size for the shorter side of the image. This parameter ensures that the aspect ratio is maintained during resizing.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation_mode
    - Specifies the method used to interpolate pixels in the resized image. This affects the visual quality of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resized image tensor. The output image has the shorter side adjusted to the specified size while maintaining the original aspect ratio.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
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
