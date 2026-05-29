
# Documentation
- Class name: JWImageResizeToSquare
- Category: jamesWalker55
- Output node: False

This node resizes the input image to a specified square dimension. It uses the selected interpolation method to resize the image while maintaining its aspect ratio. This process is particularly useful for images that require uniform sizing or for preparing image data for specific model inputs.

# Input types
## Required
- image
    - The input image that needs to be resized. It is the key to defining the visual content that will be adjusted.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size
    - Specifies the target width and height of the image, ensuring the output image is square. This parameter determines the final image dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation_mode
    - Determines the method used to resize the image, affecting the quality and characteristics of the resized image. Different interpolation modes may produce slightly different visual effects.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resized image, now converted to the specified square dimensions. The output image retains the original content but with altered dimensions.
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
