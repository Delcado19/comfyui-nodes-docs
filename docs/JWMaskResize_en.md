
# Documentation
- Class name: JWMaskResize
- Category: jamesWalker55
- Output node: False

The JWMaskResize node is specifically designed to resize masks to a specified size, offering multiple interpolation modes to meet different resizing needs.

# Input types
## Required
- mask
    - The input mask that needs to be resized. This parameter is critical as it determines the content that will be resized.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- height
    - The target height of the resized mask. This parameter directly affects the dimensions of the output mask.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The target width of the resized mask. This parameter directly affects the dimensions of the output mask.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation_mode
    - Specifies the interpolation method used during the resizing process, providing flexibility for the adjustment process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- mask
    - The resized mask, adjusted according to the specified dimensions and chosen interpolation method.
    - Comfy dtype: MASK
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
