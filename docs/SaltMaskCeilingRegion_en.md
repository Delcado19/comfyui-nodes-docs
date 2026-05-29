
# Documentation
- Class name: SaltMaskCeilingRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltMaskCeilingRegion node is specifically used to identify and extract ceiling regions from a given set of masks. It processes each mask to highlight the ceiling region, facilitating focused analysis or modification of these specific areas. This node is particularly useful when processing indoor scene images, helping to isolate ceiling regions for subsequent processing or special effects applications.

# Input types
## Required
- masks
    - This parameter is the input mask used for ceiling region identification. It is crucial for determining the part of each mask that corresponds to the ceiling region. The input mask determines the scope of the node's work and the quality of the final output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - The output MASKS are the processed masks, in which the ceiling regions have been identified and separated from the original input masks. These processed masks can be used for further image processing tasks, such as ceiling texture replacement, lighting effect simulation, etc.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskCeilingRegion:
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

    FUNCTION = "ceiling_region"
    
    def ceiling_region(self, masks):
        regions = []
        for mask in masks:
            pil_image = mask2pil(mask.unsqueeze(0))
            region_mask = MaskFilters.ceiling_region(pil_image)
            region_tensor = pil2mask(region_mask)
            regions.append(region_tensor)
        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
