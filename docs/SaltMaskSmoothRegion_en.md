
# Documentation
- Class name: SaltMaskSmoothRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SaltMaskSmoothRegion node is used to apply a smoothing filter to mask regions, controlled by a specified sigma value. This process enhances the visual quality of mask regions by reducing noise and irregularity.

# Input types
## Required
- masks
    - masks parameter represents the input masks that need smoothing, and is the main data for node processing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- sigma
    - sigma parameter controls the smoothness of the smoothing filter applied to the mask region, directly affecting the smoothing effect and the degree of noise reduction.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MASKS
    - output is the mask tensor after smoothing processing according to the specified sigma value, providing higher visual quality by reducing noise and irregularity.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskSmoothRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
                    "required": {
                        "masks": ("MASK",),
                        "sigma": ("FLOAT", {"default":5.0, "min":0.0, "max":128.0, "step":0.1}),
                    }
                }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "smooth_region"

    def smooth_region(self, masks, sigma=128):
        if not isinstance(sigma, list):
            sigma = [sigma]
        regions = []
        for i, mask in enumerate(masks):
            pil_image = mask2pil(mask.unsqueeze(0))
            region_mask = MaskFilters.smooth_region(pil_image, sigma[i if i < len(sigma) else -1])
            region_tensor = pil2mask(region_mask)
            regions.append(region_tensor)
        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
