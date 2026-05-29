
# Documentation
- Class name: SaltMaskCropRegion
- Category: SALT/Masking/Process
- Output node: False

The SaltMaskCropRegion node focuses on cropping regions within masks based on specified criteria (such as dominant or minority regions) and applying padding around these regions. It aims to optimize mask data by isolating and resizing specific regions, facilitating targeted analysis or manipulation of mask-based data.

# Input types
## Required
- masks
    - The 'masks' parameter represents the input masks to be cropped. It is critical for determining regions within each mask that meet the specified cropping criteria, directly affecting the output cropped masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- padding
    - The 'padding' parameter specifies the amount of padding added around the cropped region. It influences the size of the output cropped mask by extending the cropped region, making mask usage more flexible.
    - Comfy dtype: INT
    - Python dtype: int
- region_type
    - The 'region_type' parameter determines the cropping criteria, selecting either 'dominant' or 'minority' regions within the mask. This choice guides the cropping process, targeting specific regions of interest.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- cropped_masks
    - The cropped mask after applying the specified cropping and padding, ready for further processing or analysis.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_data_batch
    - Detailed data batch describing the cropping operation performed, including dimensions and positions of the cropped regions.
    - Comfy dtype: CROP_DATA_BATCH
    - Python dtype: List[Dict]
- top_int
    - Integer value for the top boundary of the cropped region.
    - Comfy dtype: INT
    - Python dtype: int
- left_int
    - Integer value for the left boundary of the cropped region.
    - Comfy dtype: INT
    - Python dtype: int
- right_int
    - Integer value for the right boundary of the cropped region.
    - Comfy dtype: INT
    - Python dtype: int
- bottom_int
    - Integer value for the bottom boundary of the cropped region.
    - Comfy dtype: INT
    - Python dtype: int
- width_int
    - Integer value for the width of the cropped region, calculated from the cropping data.
    - Comfy dtype: INT
    - Python dtype: int
- height_int
    - Integer value for the height of the cropped region, calculated from the cropping data.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskCropRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",),
                "padding": ("INT",{"default": 24, "min": 0, "max": 4096, "step": 1}),
                "region_type": (["dominant", "minority"],),
            }
        }
    
    RETURN_TYPES = ("MASK", "CROP_DATA_BATCH", "INT", "INT", "INT", "INT", "INT", "INT")
    RETURN_NAMES = ("cropped_masks", "crop_data_batch", "top_int", "left_int", "right_int", "bottom_int", "width_int", "height_int")
    
    FUNCTION = "mask_crop_region"
    CATEGORY = f"{NAME}/Masking/Process"
    
    def mask_crop_region(self, masks, padding=24, region_type="dominant"):
        N = len(masks)
        cropped_masks = []
        crop_data_list = []
        master_size = None
        
        for n in range(N):
            mask = masks[n]
            mask_pil = mask2pil(mask.unsqueeze(0))
            if not master_size:
                master_size = mask_pil.size
            region_mask, crop_data = MaskFilters.crop_region(mask_pil, region_type, padding)
            region_mask = region_mask.resize(master_size)
            region_tensor = pil2mask(region_mask)
            cropped_masks.append(region_tensor)
            crop_data_list.append(crop_data)

        cropped_masks_batch = torch.cat(cropped_masks, dim=0)

        return (cropped_masks_batch, crop_data_list)

```
