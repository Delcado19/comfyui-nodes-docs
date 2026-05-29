
# Documentation
- Class name: SaltMaskErodeRegion
- Category: SALT/Masking/Filter
- Output node: False

This node applies an erosion filter to the masked region, effectively shrinking the masked area according to the specified number of iterations. It is designed to optimize mask boundaries by eroding the edges of the masked region.

# Input types
## Required
- masks
    - The input mask to be eroded. This parameter is essential for defining the region to be processed and optimized by the erosion operation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- iterations
    - Specifies the number of times the erosion operation is applied to each mask, allowing adjustment of the effect's intensity.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output mask after applying the erosion filter, showing the optimized and shrunken masked region.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskErodeRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
                    "required": {
                        "masks": ("MASK",),
                        "iterations": ("INT", {"default":5, "min":1, "max":64, "step":1}),
                    }
                }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "erode_region"

    def erode_region(self, masks, iterations=5):
        if not isinstance(iterations, list):
            iterations = [iterations]
        regions = []
        for i, mask in enumerate(masks):
            pil_image = mask2pil(mask.unsqueeze(0))
            region_mask = MaskFilters.erode_region(pil_image, iterations[i if i < len(iterations) else -1])
            region_tensor = pil2mask(region_mask)
            regions.append(region_tensor)
        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
