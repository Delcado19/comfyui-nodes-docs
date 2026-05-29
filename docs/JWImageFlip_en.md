
# Documentation
- Class name: JWImageFlip
- Category: jamesWalker55
- Output node: False

The JWImageFlip node flips an image in a specified direction, either horizontally or vertically. This is a fundamental operation in image processing tasks, commonly used in scenarios where image orientation needs to be adjusted.

# Input types
## Required
- image
    - The image tensor to be flipped. This parameter is critical because it directly determines which image will be flipped, thereby affecting the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- direction
    - Specifies the flip direction, which can be "horizontal" or "vertical". This parameter determines how the image will be manipulated, thereby affecting the final orientation of the output image.
    - Comfy dtype: ['horizontal', 'vertical']
    - Python dtype: str

# Output types
- image
    - The flipped image tensor. This output is the direct result of applying the specified flip operation to the input image.
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
