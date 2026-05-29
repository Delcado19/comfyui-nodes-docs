
# Documentation
- Class name: SaltMaskAdaptiveThresholdingRegion
- Category: SALT/Masking/Filter
- Output node: False

This node applies adaptive thresholding to a set of mask images, converting them to binary images based on local pixel value variations. It enhances feature visibility across differently lit regions by dynamically adjusting the threshold across the entire image.

# Input types
## Required
- masks
    - Input masks that require adaptive thresholding. These masks will be converted to binary images using local adaptive thresholds.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
## Optional
- block_size
    - The size of the local region used to calculate each pixel's threshold. It determines how adaptive the thresholding process is to local lighting variations.
    - Comfy dtype: INT
    - Python dtype: List[int] or int
- constant
    - A constant subtracted from the mean or weighted mean calculated from the block_size. This is used to fine-tune the thresholding process.
    - Comfy dtype: INT
    - Python dtype: List[int] or int

# Output types
- MASKS
    - Output tensor containing the regions after adaptive thresholding, with enhanced local features in the masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskAdaptiveThresholdingRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",),
            },
            "optional": {
                "block_size": ("INT", {"default": 11, "min": 3, "max": 255, "step": 2}),
                "constant": ("INT", {"default": 2, "min": 0, "max": 10, "step": 1}),
            }
        }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "adaptive_thresholding"

    def adaptive_thresholding(self, masks, block_size=11, constant=2):
        if not isinstance(block_size, list):
            block_size = [block_size]
        if not isinstance(constant, list):
            constant = [constant]

        block_size = [closest_odd(val) for val in block_size]
        
        regions = []
        for i, mask in enumerate(masks):
            pil_image = mask2pil(mask.unsqueeze(0))
            image_array = np.array(pil_image.convert('L'))
            
            current_block_size = block_size[i if i < len(block_size) else -1]
            current_C = constant[i if i < len(constant) else -1]
            
            adaptive_thresh = cv2.adaptiveThreshold(image_array, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                                    cv2.THRESH_BINARY, current_block_size, current_C)

            adaptive_pil = ImageOps.invert(Image.fromarray(adaptive_thresh))
            region_tensor = pil2mask(adaptive_pil)
            regions.append(region_tensor)

        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
