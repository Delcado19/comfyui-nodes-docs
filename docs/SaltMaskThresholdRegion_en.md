
# Documentation
- Class name: SaltMaskThresholdRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node applies a threshold filter to the mask region, segmenting them according to specified black and white thresholds. It is designed to isolate and enhance regions within the mask, making it easier to distinguish them based on varying intensity levels.

# Input types
## Required
- masks
    - The input mask to process. These masks are segmented based on the provided thresholds, which determine the intensity levels that define region boundaries.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
- black_threshold
    - Lower bound of pixel intensity. Pixels below this value are set to black, aiding the segmentation of darker areas in the mask.
    - Comfy dtype: INT
    - Python dtype: int
- white_threshold
    - Upper bound of pixel intensity. Pixels above this value are set to white, aiding the segmentation of brighter areas in the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output mask after applying the threshold filter, with regions segmented based on the specified black and white thresholds.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskThresholdRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
                    "required": {
                        "masks": ("MASK",),
                        "black_threshold": ("INT",{"default":75, "min":0, "max": 255, "step": 1}),
                        "white_threshold": ("INT",{"default":175, "min":0, "max": 255, "step": 1}),
                    }
                }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "threshold_region"

    def threshold_region(self, masks, black_threshold=75, white_threshold=255):
        if not isinstance(black_threshold, list):
            black_threshold = [black_threshold]
        if not isinstance(white_threshold, list):
            white_threshold = [white_threshold]
        regions = []
        for i, mask in enumerate(masks):
            pil_image = mask2pil(mask.unsqueeze(0))
            region_mask = MaskFilters.threshold_region(
                pil_image, 
                int(black_threshold[i if i < len(black_threshold) else -1]), 
                int(white_threshold[i if i < len(white_threshold) else -1])
            )
            region_tensor = pil2mask(region_mask)
            regions.append(region_tensor)
        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
