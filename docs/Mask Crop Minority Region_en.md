# Documentation
- Class name: WAS_Mask_Crop_Minority_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Crop_Minority_Region node is designed to process input images or tensors representing masks, and intelligently crop minority regions within them. This is particularly useful for focusing on less prominent regions in images for further analysis or processing. The node can handle both single masks and batches of masks, and applies padding to the cropped regions based on user specifications.

# Input types
## Required
- masks
    - Input masks are the primary input for this node, which can be a single mask or a stack of multiple masks representing image regions to be processed. The node will identify minority regions within these masks and perform cropping operations accordingly.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- padding
    - The padding parameter allows users to specify the amount of padding to add around the cropped minority regions. This is useful for preserving context around the cropped regions or for seamless integration with other image processing tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The node's output is the cropped minority regions from the input masks. They can be used for further processing or analysis tasks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Crop_Minority_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',), 'padding': ('INT', {'default': 24, 'min': 0, 'max': 4096, 'step': 1})}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'crop_minority_region'

    def crop_minority_region(self, masks, padding=24):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_pil = Image.fromarray(np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8))
                region_mask = self.WT.Masking.crop_minority_region(mask_pil, padding)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_pil = Image.fromarray(np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8))
            region_mask = self.WT.Masking.crop_minority_region(mask_pil, padding)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```