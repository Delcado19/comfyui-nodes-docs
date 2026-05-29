
# Documentation
- Class name: SaltMaskGaussianRegion
- Category: SALT/Masking/Filter
- Output node: False

The SaltMaskGaussianRegion node applies Gaussian filtering to the specified mask region, softening edges and blending areas to achieve a smoother appearance. This node is particularly suitable for image processing tasks that focus on enhancing or modifying the visual features of the mask region.

# Input types
## Required
- masks
    - The masks to which Gaussian filtering will be applied. These masks define the areas that need to be processed for a smoother appearance.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
- radius
    - Specifies the radius of the Gaussian filter. A larger radius produces a more pronounced smoothing effect, offering better control over the blending and softening of the masked regions.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MASKS
    - The modified mask after applying Gaussian filtering, displaying a smoother and more blended region effect.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskGaussianRegion:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",),
                "radius": ("FLOAT", {"default": 5.0, "min": 0.0, "max": 1024, "step": 0.1}),
            }
        }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "gaussian_region"

    def gaussian_region(self, masks, radius=5.0):
        if not isinstance(radius, list):
            radius = [radius]
        regions = []
        for i, mask in enumerate(masks):
            pil_image = mask2pil(mask.unsqueeze(0))
            region_mask = MaskFilters.gaussian_region(pil_image, radius[i if i < len(radius) else -1])
            region_tensor = pil2mask(region_mask)
            regions.append(region_tensor)
        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
