# Documentation
- Class name: WAS_Mask_Fill_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Fill_Region node processes image masks and fills specified regions, which is critical for applications involving image segmentation or region-based operations. It leverages the WAS_Tools_Class to perform the actual fill, ensuring the filled region is properly integrated into the mask. This node is particularly useful when creating seamless textures or composite images where continuity of regions matters.

# Input types
## Required
- masks
    - The 'masks' parameter is a key input to the node, defining the binary masks to be processed. It is essential to the node's execution, as it directly affects the regions to be filled. This parameter expects an array of masks, where each mask corresponds to a region to be filled.
    - Comfy dtype: np.ndarray
    - Python dtype: numpy.ndarray

# Output types
- MASKS
    - The 'MASKS' output parameter represents the result of the node's operation, an array of filled regions within the masks. This output is important as it provides processed masks that can be used for further analysis or rendering in various applications.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Fill_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',)}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'fill_region'

    def fill_region(self, masks):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_np = np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
                pil_image = Image.fromarray(mask_np, mode='L')
                region_mask = self.WT.Masking.fill_region(pil_image)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_np = np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
            pil_image = Image.fromarray(mask_np, mode='L')
            region_mask = self.WT.Masking.fill_region(pil_image)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```