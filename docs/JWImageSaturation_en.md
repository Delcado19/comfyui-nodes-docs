
# Documentation
- Class name: JWImageSaturation
- Category: jamesWalker55
- Output node: False

The JWImageSaturation node adjusts the saturation level of an input image. By applying a specified adjustment factor, it enhances or reduces the intensity of image colors, enabling fine control over the visual appearance of the image.

# Input types
## Required
- image
    - The input image whose saturation needs to be adjusted. Saturation adjustment is achieved by changing the intensity of image colors.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- factor
    - A multiplier used to adjust the saturation level. When factor is greater than 1, saturation increases, making colors more vivid; when factor is less than 1, saturation decreases, making colors more muted.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output image after saturation adjustment.
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
