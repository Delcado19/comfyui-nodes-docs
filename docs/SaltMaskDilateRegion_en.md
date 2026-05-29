
# Documentation
- Class name: SaltMaskDilateRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/saltai-mlops/ComfyUI/blob/main/custom_nodes/salt_filters/salt_filters.py

The SaltMaskDilateRegion node applies a dilation filter to mask regions, effectively expanding the regions of interest within the mask based on a specified number of iterations. This node is designed to process and modify mask regions to highlight or amplify specific features within the mask.

# Input types
## Required
- masks
    - Input mask to be dilated. This parameter is critical for defining the region in the image that will undergo dilation, directly affecting the node's output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- iterations
    - Specifies the number of times the dilation operation is applied to the mask. This parameter controls the degree of dilation, affecting the size and visibility of features within the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output mask after dilation processing. These masks present the modified regions where the regions of interest have been expanded, demonstrating the effect of the dilation process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskDilateRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
                    "required": {
                        "masks": ("MASK",),
                        "iterations": ("INT", {"default":5, "min":1, "max":64, "step":1}),
                    }
                }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "dilate_region"

    def dilate_region(self, masks, iterations=5):
        if not isinstance(iterations, list):
            iterations = [iterations]
        regions = []
        for i, mask in enumerate(masks):
            pil_image = mask2pil(mask.unsqueeze(0))
            region_mask = MaskFilters.dilate_region(pil_image, iterations[i if i < len(iterations) else -1])
            region_tensor = pil2mask(region_mask)
            regions.append(region_tensor)
        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
