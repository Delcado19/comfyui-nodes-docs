# Documentation
- Class name: WAS_Mask_Minority_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The minority_region method is designed to process an input mask and identify minority regions within it. It converts the mask to a PIL image, applies a threshold to distinguish different regions, and then isolates the smallest region. This method is particularly useful for applications that focus on less prominent or minority regions in an image, such as in image segmentation or feature extraction tasks.

# Input types
## Required
- masks
    - The input mask parameter is critical for the minority_region method, as it defines the regions of interest within the image. This parameter affects how the method identifies and processes minority regions, and is essential to the accuracy of the results.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]
## Optional
- threshold
    - The threshold parameter is used to determine the cutoff point between different regions within the mask. It plays an important role in the minority_region method by influencing which regions are considered part of the minority. The default value is set to 128, allowing some flexibility when applying the threshold.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The MASKS output parameter represents the minority regions processed from the input mask. It is a critical output, as it provides the final result of the minority_region method, highlighting the less prominent regions in the original image.
    - Comfy dtype: MASK
    - Python dtype: Tuple[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Minority_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',), 'threshold': ('INT', {'default': 128, 'min': 0, 'max': 255, 'step': 1})}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'minority_region'

    def minority_region(self, masks, threshold=128):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_np = np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
                pil_image = Image.fromarray(mask_np, mode='L')
                region_mask = self.WT.Masking.minority_region(pil_image, threshold)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_np = np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
            pil_image = Image.fromarray(mask_np, mode='L')
            region_mask = self.WT.Masking.minority_region(pil_image, threshold)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```