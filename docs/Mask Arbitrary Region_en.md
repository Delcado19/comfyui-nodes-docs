# Documentation
- Class name: WAS_Mask_Arbitrary_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The arbitrary_region method of the WAS_Mask_Arbitrary_Region node is designed to process input masks and generate tensors representing regions of interest based on provided size and threshold parameters. This method is particularly suitable for applications that require identifying and extracting specific regions in images, such as image editing, analysis, or machine learning tasks involving region focus.

# Input types
## Required
- masks
    - The input mask parameter is critical for the arbitrary_region method, as it defines the source from which regions of interest will be extracted. The quality and characteristics of the input mask directly affect the outcome of the region identification process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- size
    - The size parameter determines the dimensions of regions to be considered as regions of interest. It is a key factor in this method, as it directly impacts the scale of extracted regions.
    - Comfy dtype: INT
    - Python dtype: int
- threshold
    - The threshold parameter is used to set the sensitivity level for identifying regions of interest within the input mask. It plays an important role in the accuracy of region extraction.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The MASKS output parameter represents the tensor containing extracted regions of interest from the input mask. It is a significant output, as it provides the final result of the arbitrary_region method for further processing or analysis.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Arbitrary_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',), 'size': ('INT', {'default': 256, 'min': 1, 'max': 4096, 'step': 1}), 'threshold': ('INT', {'default': 128, 'min': 0, 'max': 255, 'step': 1})}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'arbitrary_region'

    def arbitrary_region(self, masks, size=256, threshold=128):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_np = np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
                pil_image = Image.fromarray(mask_np, mode='L')
                region_mask = self.WT.Masking.arbitrary_region(pil_image, size, threshold)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_np = np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
            pil_image = Image.fromarray(mask_np, mode='L')
            region_mask = self.WT.Masking.arbitrary_region(pil_image, size, threshold)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```