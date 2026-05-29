
# Documentation
- Class name: SaltMaskContourExtraction
- Category: SALT/Masking/Filter
- Output node: False

This node aims to extract contours from mask regions using multiple thresholds. It applies a series of thresholds to identify and draw contours of regions of interest within the mask, effectively highlighting their boundaries.

# Input types
## Required
- masks
    - Input masks from which contours need to be extracted. These masks serve as the primary data for applying the contour extraction process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

## Optional
- thresholds
    - A list of thresholds used to identify contours within the mask. Each threshold defines a specific intensity level for detecting and drawing contours, enabling multi-faceted analysis of the mask regions.
    - Comfy dtype: INT
    - Python dtype: List[int]

# Output types
- MASKS
    - The output consists of tensors representing the contours extracted from the input masks. These tensors highlight the boundaries of regions within the mask according to the specified thresholds.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskContourExtraction:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",),
            },
            "optional": {
                "thresholds": ("INT", {"default": 128, "min": 0, "max": 255, "step": 1}),
            }
        }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "contour_extraction"

    def contour_extraction(self, masks, thresholds=[50, 100, 150, 200]):
        regions = []

        if not isinstance(thresholds, list):
            thresholds = [thresholds]

        for mask in masks:
            pil_image = ImageOps.invert(mask2pil(mask.unsqueeze(0)))
            image_array = np.array(pil_image.convert('L'))

            combined_contours = np.zeros_like(image_array)

            for threshold in thresholds:
                _, thresh_image = cv2.threshold(image_array, threshold, 255, cv2.THRESH_BINARY)
                contours, _ = cv2.findContours(thresh_image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
                cv2.drawContours(combined_contours, contours, -1, (255, 255, 255), 1)

            contour_pil = Image.fromarray(combined_contours)
            region_tensor = pil2mask(contour_pil)
            regions.append(region_tensor)

        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
