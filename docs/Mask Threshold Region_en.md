# Documentation
- Class name: WAS_Mask_Threshold_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Threshold_Region node applies thresholding to image masks to distinguish regions within an image. It uses black and white thresholds to create a binary mask, segmenting the image based on pixel intensity. This node is essential for image segmentation, object detection, and any application that requires distinguishing image areas by color or brightness levels.

# Input types
## Required
- masks
- The input mask is the primary source of the node's operation. It generates thresholded regions within the image. This parameter is crucial because all node functions revolve around manipulating and analyzing these masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- black_threshold
- The black_threshold parameter defines the lower intensity limit at which a pixel is considered part of a black region. It plays a vital role in determining how the image is segmented into different areas based on color intensity.
    - Comfy dtype: INT
    - Python dtype: int
- white_threshold
- The white_threshold parameter sets the upper intensity limit at which a pixel is considered part of a white region. It is a key parameter controlling the segmentation process and defining white areas within the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
- The MASKS output consists of image masks processed after thresholding. This output is important because it represents the final segmented regions of the input image according to the specified thresholds.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Threshold_Region:

    def __init__(self):
        self.WT = WAS_Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',), 'black_threshold': ('INT', {'default': 75, 'min': 0, 'max': 255, 'step': 1}), 'white_threshold': ('INT', {'default': 175, 'min': 0, 'max': 255, 'step': 1})}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('MASKS',)
    FUNCTION = 'threshold_region'

    def threshold_region(self, masks, black_threshold=75, white_threshold=255):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_np = np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
                pil_image = Image.fromarray(mask_np, mode='L')
                region_mask = self.WT.Masking.threshold_region(pil_image, black_threshold, white_threshold)
                region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_np = np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
            pil_image = Image.fromarray(mask_np, mode='L')
            region_mask = self.WT.Masking.threshold_region(pil_image, black_threshold, white_threshold)
            region_tensor = pil2mask(region_mask).unsqueeze(0).unsqueeze(1)
            return (region_tensor,)
```