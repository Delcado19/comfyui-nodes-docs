# Documentation
- Class name: WAS_Mask_Dominant_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The dominant_region method aims to identify and isolate the most prominent region in a given mask image. It processes the input image to highlight the largest contiguous area based on a specified threshold. This method is particularly suitable for applications where the focus is on the main subject or features in an image, such as image segmentation or feature extraction tasks.

# Input types
## Required
- masks
    - The input mask parameter is critical to the node's operation because it defines the image data to be processed. The node relies on this input to identify the dominant region in the image, making it a key component that directly affects the node's function execution and results.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- threshold
    - The threshold parameter plays an important role in determining the visibility of seams in the image. By adjusting the threshold, users can control the balance between seam visibility and result image size, which is crucial for applications requiring seamless textures or patterns.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output MASKS parameter represents the processed image data where the dominant region has been identified and isolated. This output is important because it provides the result of the node's operation, which can be further used in downstream processes or applications.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Dominant_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',), 'threshold': ('INT', {'default': 128, 'min': 0, 'max': 255, 'step': 1})}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'dominant_region'

    def dominant_region(self, masks, threshold=128):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_pil = Image.fromarray(np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8))
                region_mask = self.WT.Masking.dominant_region(mask_pil, threshold)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_pil = Image.fromarray(np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8))
            region_mask = self.WT.Masking.dominant_region(mask_pil, threshold)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```