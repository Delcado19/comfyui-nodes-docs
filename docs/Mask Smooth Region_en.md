# Documentation
- Class name: WAS_Mask_Smooth_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Smooth_Region node is designed to process input masks and apply smoothing effects to their regions. This is particularly useful for generating seamless textures or preparing masks for further image processing tasks. The node uses Gaussian blur technology to smooth regions within the mask, with the degree of smoothing controlled by the 'sigma' parameter. The node's functionality is optimized for both individual masks and mask batches, ensuring flexibility and efficiency across various applications.

# Input types
## Required
- masks
    - The 'masks' parameter is the key input to the node, expecting a mask or a batch of masks. This input directly affects the node's operation, as it determines the regions to be smoothed. This parameter is essential for the node to produce the desired output, impacting the final texture quality and the seamless tiling of images.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- sigma
    - The 'sigma' parameter defines the degree of smoothing to be applied to the mask regions. It is a floating-point number used to adjust the standard deviation of the Gaussian blur, with higher values resulting in more pronounced smoothing. This parameter is optional but has a significant impact on the node's output, allowing users to control the appearance of the smoothed regions.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MASKS
    - The 'MASKS' output provides the smoothed mask or batch of masks obtained by applying the Gaussian blur defined by the 'sigma' parameter. This output is important as it represents the processed data from the node, which can be used for subsequent operations or as the final output for texture generation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Smooth_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',), 'sigma': ('FLOAT', {'default': 5.0, 'min': 0.0, 'max': 128.0, 'step': 0.1})}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'smooth_region'

    def smooth_region(self, masks, sigma=128):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_np = np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
                pil_image = Image.fromarray(mask_np, mode='L')
                region_mask = self.WT.Masking.smooth_region(pil_image, sigma)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_np = np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
            pil_image = Image.fromarray(mask_np, mode='L')
            region_mask = self.WT.Masking.smooth_region(pil_image, sigma)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```