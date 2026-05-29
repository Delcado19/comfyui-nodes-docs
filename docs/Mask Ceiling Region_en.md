# Documentation
- Class name: WAS_Mask_Ceiling_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The ceiling_region method of the WAS_Mask_Ceiling_Region node is designed to process an input mask and identify the topmost region within it. It works by converting the mask to a PIL image, applying a ceiling effect to isolate the top area, and then converting the result back to a tensor format suitable for further image processing tasks.

# Input types
## Required
- masks
    - The input mask parameter is crucial for the ceiling_region method as it provides the raw mask data that the node will process. This parameter directly affects the node's output, determining which areas in the image are identified as the topmost region.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - The MASKS output parameter represents a tensor containing the processed region from the input mask. This output is important as it is the result of the node's processing and is used for subsequent tasks in the image analysis pipeline.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Ceiling_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',)}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'ceiling_region'

    def ceiling_region(self, masks):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_np = np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
                pil_image = Image.fromarray(mask_np, mode='L')
                region_mask = self.WT.Masking.ceiling_region(pil_image)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_np = np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
            pil_image = Image.fromarray(mask_np, mode='L')
            region_mask = self.WT.Masking.ceiling_region(pil_image)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```