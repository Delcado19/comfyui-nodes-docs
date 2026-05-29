
# Documentation
- Class name: SaltMaskSharpeningFilter
- Category: SALT/Masking/Filter
- Output node: False

SaltMaskSharpeningFilter node is used to apply a sharpening filter to a set of masks, enhancing their edges and details according to the specified intensity. This node aims to optimize the visual effect of masks by iteratively applying sharpening, making features in the masks more prominent.

# Input types
## Required
- masks
    - A collection of masks that require sharpening. This input is crucial for determining the area where the sharpening filter will be applied.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- strength
    - Defines the intensity of the sharpening effect. The higher the value, the more pronounced the sharpening on the masks.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output is a mask tensor that has been sharpened. Each mask undergoes the specified number of sharpening iterations to enhance its details.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskSharpeningFilter:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",),
            },
            "optional": {
                "strength": ("INT", {"default": 1, "min": 1, "max": 12, "step": 1}),
            }
        }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "sharpening_filter"

    def sharpening_filter(self, masks, strength=1.5):
        if not isinstance(strength, list):
            strength = [strength]

        strength = [int(val) for val in strength]

        regions = []
        for i, mask in enumerate(masks):
            pil_image = ImageOps.invert(mask2pil(mask.unsqueeze(0)))

            for _ in range(strength[i if i < len(strength) else -1]):
                pil_image = pil_image.filter(ImageFilter.SHARPEN)

            region_tensor = pil2mask(pil_image)
            regions.append(region_tensor)

        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
