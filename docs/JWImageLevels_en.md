
# Documentation
- Class name: JWImageLevels
- Category: jamesWalker55
- Output node: False

The JWImageLevels node enhances visual contrast or corrects exposure by adjusting the intensity levels of an image within a specified range. It linearly rescales the image's colors between given minimum and maximum values, clipping any values outside the range.

# Input types
## Required
- image
    - The input image tensor to be adjusted. This tensor undergoes a linear transformation based on the specified minimum and maximum values, affecting its overall brightness and contrast.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- min
    - The lower bound of the intensity range. Pixels with intensity below this value will be set to the minimum (black), effectively darkening the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max
    - The upper bound of the intensity range. Pixels with intensity above this value will be set to the maximum (white), effectively brightening the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output image tensor with adjusted intensity levels, where pixel values are rescaled to fit the newly specified range.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
@register_node("JWImageMix", "Image Mix")
class _:
    CATEGORY = "jamesWalker55"
    BLEND_TYPES = ("mix", "multiply")

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "blend_type": (cls.BLEND_TYPES, {"default": "mix"}),
                "factor": ("FLOAT", {"min": 0, "max": 1, "step": 0.01, "default": 0.5}),
                "image_a": ("IMAGE",),
                "image_b": ("IMAGE",),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    def execute(
        self,
        blend_type: str,
        factor: float,
        image_a: torch.Tensor,
        image_b: torch.Tensor,
    ):
        assert blend_type in self.BLEND_TYPES
        assert isinstance(factor, float)
        assert isinstance(image_a, torch.Tensor)
        assert isinstance(image_b, torch.Tensor)

        assert image_a.shape == image_b.shape

        if blend_type == "mix":
            mixed = image_a * (1 - factor) + image_b * factor
        elif blend_type == "multiply":
            mixed = image_a * (1 - factor + image_b * factor)
        else:
            raise NotImplementedError(f"Blend type not yet implemented: {blend_type}")

        return (mixed,)

```
