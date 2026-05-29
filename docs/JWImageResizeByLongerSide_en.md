
# Documentation
- Class name: JWImageResizeByLongerSide
- Category: jamesWalker55
- Output node: False

The JWImageResizeByLongerSide node resizes images by adjusting the longer side to a specified size while maintaining the original aspect ratio. It also allows applying different interpolation methods during resizing to control the visual quality of the output image.

# Input types
## Required
- image
    - The input image that needs to be resized. Maintaining the visual content of the image is critical during the resizing process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size
    - The target size for the longer side of the image. This parameter determines the new image dimensions while ensuring the original aspect ratio is preserved.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation_mode
    - Specifies the interpolation method used when resizing the image pixels. This parameter affects the visual quality of the output image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Outputs the resized image with its longer side adjusted to the specified size, maintaining the original aspect ratio.
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
