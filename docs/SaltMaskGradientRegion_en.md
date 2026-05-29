
# Documentation
- Class name: SaltMaskGradientRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/DimaChaichan/LAiChanRYFork

The SaltMaskGradientRegion node is primarily used to apply a gradient filter to mask regions, enhancing edges and transition areas within the mask to highlight areas of change. This node is designed to process mask inputs and apply morphological gradient operations to emphasize contours and transition parts within the mask region.

# Input types
## Required
- masks
    - The masks input represents the mask region to which the gradient filter will be applied. This input is critical for defining the region of interest that requires edge enhancement and transition highlighting.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
## Optional
- kernel_size
    - The kernel_size parameter specifies the kernel size used in the morphological gradient operation. It affects the degree of edge enhancement and transition highlighting within the mask region.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output MASKS is the result of applying the gradient filter to the input mask region, characterized by enhanced edges and transition areas.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskGradientRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",),
            },
            "optional": {
                "kernel_size": ("INT", {"default": 3, "min": 1, "max": 31, "step": 2}),
            }
        }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "gradient_region"

    def gradient_region(self, masks, kernel_size=3):
        if not isinstance(kernel_size, list):
            kernel_size = [kernel_size]
        regions = []
        for i, mask in enumerate(masks):
            pil_image = mask2pil(mask.unsqueeze(0))
            image_array = np.array(pil_image.convert('L'))

            current_kernel_size = kernel_size[i if i < len(kernel_size) else -1]
            kernel = np.ones((current_kernel_size, current_kernel_size), np.uint8)

            gradient = cv2.morphologyEx(image_array, cv2.MORPH_GRADIENT, kernel)
            gradient_pil = Image.fromarray(gradient)

            region_tensor = pil2mask(gradient_pil)
            regions.append(region_tensor)

        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
