
# Documentation
- Class name: SaltMaskArbitaryRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltMaskArbitaryRegion node is used to filter arbitrary regions in a given mask based on specified size and threshold parameters. This node allows custom mask regions and is suitable for various applications such as image segmentation or object isolation. By adjusting the size and threshold parameters, users can precisely control the range and intensity of filtered regions, enabling flexible mask processing and optimization.

# Input types
## Required
- masks
    - The input mask is the object of the arbitrary region filtering operation. This parameter is critical for defining the region to be processed.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- size
    - Specifies the size parameter for arbitrary region filtering, directly affecting the scale of filtered regions in the mask. Adjusting this parameter controls the granularity of processing.
    - Comfy dtype: INT
    - Python dtype: int
- threshold
    - Determines the threshold for arbitrary region filtering, affecting which parts of the mask are included in the processing range. This parameter can be used to adjust filtering sensitivity.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output is the modified mask filtered according to the specified size and threshold parameters. This processed mask can be used for subsequent image processing or analysis tasks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskArbitaryRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
                    "required": {
                        "masks": ("MASK",),
                        "size": ("INT", {"default":256, "min":1, "max":4096, "step":1}),
                        "threshold": ("INT", {"default":128, "min":0, "max":255, "step":1}),
                    }
                }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "arbitrary_region"

    def arbitrary_region(self, masks, size=256, threshold=128):
        if not isinstance(threshold, list):
            threshold = [threshold]
        regions = []
        for i, mask in enumerate(masks):
            pil_image = mask2pil(mask.unsqueeze(0))
            region_mask = MaskFilters.arbitrary_region(pil_image, size, int(threshold[i if i < len(threshold) else -1]))
            region_tensor = pil2mask(region_mask)
            regions.append(region_tensor)
        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
