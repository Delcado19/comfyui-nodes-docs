
# Documentation
- Class name: BlurMaskFast
- Category: mask/filters
- Output node: False

The BlurMaskFast node applies Gaussian blur to a mask, softening edges and creating a smoother mask appearance. This operation is especially useful in image processing tasks that require reducing mask boundary sharpness.

# Input types
## Required
- masks
    - Specify the mask to be blurred. This input is crucial for defining the region where the blur effect will be applied.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- radius_x
    - Determine the horizontal radius of the Gaussian blur. A larger radius produces a more pronounced blur effect horizontally.
    - Comfy dtype: INT
    - Python dtype: int
- radius_y
    - Determine the vertical radius of the Gaussian blur. A larger radius produces a more pronounced blur effect vertically.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The output is the mask after Gaussian blur, with edges softer than the original mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class BlurMaskFast:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "masks": ("MASK",),
                "radius_x": ("INT", {
                    "default": 1,
                    "min": 0,
                    "max": 1023,
                    "step": 1
                }),
                "radius_y": ("INT", {
                    "default": 1,
                    "min": 0,
                    "max": 1023,
                    "step": 1
                }),
            },
        }

    RETURN_TYPES = ("MASK",)
    FUNCTION = "blur_mask"

    CATEGORY = "mask/filters"

    def blur_mask(self, masks, radius_x, radius_y):
        
        if radius_x + radius_y == 0:
            return (masks,)
        
        dx = radius_x * 2 + 1
        dy = radius_y * 2 + 1
        
        dup = copy.deepcopy(masks.cpu().numpy())
        
        for index, mask in enumerate(dup):
            dup[index] = cv2.GaussianBlur(mask, (dx, dy), 0)
        
        return (torch.from_numpy(dup),)

```
