# Documentation
- Class name: WAS_Mask_Floor_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The floor_region method processes a given mask to identify the lowest-intensity region within it. It operates by converting the mask to a NumPy array, applying a threshold to isolate non-black pixels, and determining the minimum value among those pixels. The method handles both single masks and batches of masks, returning a tensor representing the processed region.

# Input types
## Required
- masks
    - The input mask parameter is critical for the floor_region method, as it defines the mask or batch of masks to be processed. The node's execution depends on this input to identify and operate on regions within the masks based on their intensity values.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - The output parameter MASKS represents the result of the floor_region method processing. It is a tensor containing the lowest-intensity regions identified in the input masks, demonstrating the node's capability to isolate and highlight specific regions based on their intensity values.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Floor_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',)}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'floor_region'

    def floor_region(self, masks):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_np = np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
                pil_image = Image.fromarray(mask_np, mode='L')
                region_mask = self.WT.Masking.floor_region(pil_image)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_np = np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
            pil_image = Image.fromarray(mask_np, mode='L')
            region_mask = self.WT.Masking.floor_region(pil_image)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```