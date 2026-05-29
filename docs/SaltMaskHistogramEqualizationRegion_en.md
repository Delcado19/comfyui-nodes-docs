
# Documentation
- Class name: SaltMaskHistogramEqualizationRegion
- Category: SALT/Masking/Filter
- Output node: False

This node applies histogram equalization to each mask in a collection of masks to enhance the contrast within the masked regions. It aims to improve the visibility and distinguishability of features within each mask by adjusting the intensity distribution.

# Input types
## Required
- masks
    - The collection of masks to be processed. Each mask is enhanced individually through histogram equalization to improve its contrast.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - The contrast-enhanced masks, resulting from applying histogram equalization to each original mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskHistogramEqualizationRegion:
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

    FUNCTION = "histogram_equalization"

    def histogram_equalization(self, masks):
        regions = []
        for mask in masks:
            pil_image = mask2pil(mask.unsqueeze(0))
            image_array = np.array(pil_image.convert('L'))            
            equalized = cv2.equalizeHist(image_array)
            equalized_pil = ImageOps.invert(Image.fromarray(equalized))
            region_tensor = pil2mask(equalized_pil)
            regions.append(region_tensor)

        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
