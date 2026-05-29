
# Documentation
- Class name: SaltMaskMinorityRegion
- Category: SALT/Masking/Filter
- Output node: False

This node aims to identify and separate minority regions within a given set of masks by applying a threshold to distinguish these regions. It focuses on highlighting less prevalent features in the mask data, potentially for further analysis or processing.

# Input types
## Required
- masks
    - The masks input represents the collection of mask images to be processed, with the goal of identifying minority regions within each mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- threshold
    - The threshold parameter determines the sensitivity of minority region detection, influencing which regions are considered minority based on their pixel intensity.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output is a mask tensor, where each mask corresponds to the minority regions separated from the original input masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskMinorityRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
                    "required": {
                        "masks": ("MASK",),
                        "threshold": ("INT", {"default":128, "min":0, "max":255, "step":1}),
                    }
                }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "minority_region"

    def minority_region(self, masks, threshold=128):
        if not isinstance(threshold, list):
            threshold = [threshold]
        regions = []
        for i, mask in enumerate(masks):
            pil_image = mask2pil(mask.unsqueeze(0))
            region_mask = MaskFilters.minority_region(pil_image, int(threshold[i if i < len(threshold) else -1]))
            region_tensor = pil2mask(region_mask)
            regions.append(region_tensor)
        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
