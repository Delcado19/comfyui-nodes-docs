# Documentation
- Class name: WAS_Mask_Gaussian_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The gaussian_region method of the WAS_Mask_Gaussian_Region node is designed to process input masks by applying a Gaussian blur effect, which is useful for generating smooth transitions in image regions. This method enhances the visual quality of textures by reducing visible seams, making it suitable for applications requiring seamless textures, such as game development and 3D modeling.

# Input types
## Required
- masks
    - The input mask parameter is critical for the node's operation, as it defines the image region that will undergo the Gaussian blur effect. This parameter directly affects the result of texture processing, determining the smoothness and continuity of the generated image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- radius
    - The radius parameter determines the degree of Gaussian blur applied to the input mask. A larger radius results in a more pronounced blur effect, which can be used to create softer transitions between different regions of the image. This parameter is crucial for fine-tuning the visual appearance of the final texture.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MASKS
    - The MASKS output provides the processed image mask with Gaussian blur applied. This output is important because it represents the final result of the node's operation and can be used for further image processing tasks or integrated into larger workflows.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Gaussian_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',), 'radius': ('FLOAT', {'default': 5.0, 'min': 0.0, 'max': 1024, 'step': 0.1})}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'gaussian_region'

    def gaussian_region(self, masks, radius=5.0):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_np = np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
                pil_image = Image.fromarray(mask_np, mode='L')
                region_mask = self.WT.Masking.gaussian_region(pil_image, radius)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_np = np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
            pil_image = Image.fromarray(mask_np, mode='L')
            region_mask = self.WT.Masking.gaussian_region(pil_image, radius)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```