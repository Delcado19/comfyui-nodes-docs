
# Documentation
- Class name: JWImageResizeByFactor
- Category: jamesWalker55
- Output node: False

This node resizes images by a specified scaling factor, allowing flexible image scaling with multiple interpolation modes to preserve image quality.

# Input types
## Required
- image
    - The input image to be resized. This parameter is critical as it provides the source image for the resize operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- factor
    - Specifies the scaling factor for image resizing. A factor greater than 1 enlarges the image, while a factor less than 1 shrinks it.
    - Comfy dtype: FLOAT
    - Python dtype: float
- interpolation_mode
    - Determines the interpolation method used between pixel values during the resize operation, affecting the quality and appearance of the output image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The image resized by the specified factor using the chosen interpolation mode.
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
