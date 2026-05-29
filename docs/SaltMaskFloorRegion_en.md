
# Documentation
- Class name: SaltMaskFloorRegion
- Category: SALT/Masking/Filter
- Output node: False

The SaltMaskFloorRegion node is designed to identify and extract floor regions from given masks. It processes each mask to extract the floor region and converts it into a tensor representing the floor area.

# Input types
## Required
- masks
    - Input masks from which floor regions need to be identified. These masks are processed to extract floor regions and have a significant impact on the node's output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - Output tensor representing the isolated floor regions from the input masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskFloorRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",),
            }
        }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "floor_region"

    def floor_region(self, masks):
        regions = []
        for mask in masks:
            pil_image = mask2pil(mask.unsqueeze(0))
            region_mask = MaskFilters.floor_region(pil_image)
            region_tensor = pil2mask(region_mask)
            regions.append(region_tensor)
        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
