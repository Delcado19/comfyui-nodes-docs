# Documentation
- Class name: WAS_Mask_Erode_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The erode_region method processes input masks by applying an erosion effect to trim the boundaries of mask regions. This is particularly useful in image processing tasks such as noise removal or isolating distinct regions in an image. It operates by iteratively shrinking mask regions, creating smoother and more defined boundaries. The degree of erosion can be controlled via the iteration parameter, allowing fine-tuning of the effect.

# Input types
## Required
- masks
    - The input mask parameter is essential for the erode_region method, as it defines the image regions that will undergo erosion. This parameter directly affects the node's execution and results, determining which parts of the image will be impacted by the erosion process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- iterations
    - The iteration count parameter controls the degree of erosion applied to the input mask. Higher values result in more pronounced erosion, leading to a more significant reduction in mask region size. This parameter is critical for adjusting erosion intensity to achieve the desired visual effect.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The MASKS output parameter represents the final mask after the erosion process has been applied. It is a critical output, as it reflects the final state of image regions post-erosion, containing information needed for further processing or analysis in subsequent workflows.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Erode_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',), 'iterations': ('INT', {'default': 5, 'min': 1, 'max': 64, 'step': 1})}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'erode_region'

    def erode_region(self, masks, iterations=5):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_np = np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
                pil_image = Image.fromarray(mask_np, mode='L')
                region_mask = self.WT.Masking.erode_region(pil_image, iterations)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_np = np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
            pil_image = Image.fromarray(mask_np, mode='L')
            region_mask = self.WT.Masking.erode_region(pil_image, iterations)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```