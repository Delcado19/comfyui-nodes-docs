
# Documentation
- Class name: DilateErodeMask
- Category: mask/filters
- Output node: False

The DilateErodeMask node modifies mask images through dilation or erosion based on the specified radius and shape. This process adjusts the boundaries of objects in the mask, expanding or shrinking them to achieve the desired morphological effect.

# Input types
## Required
- masks
    - Specifies the mask image to process. Modifications to these masks via dilation or erosion alter the boundaries of the objects they contain based on the operation parameters.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- radius
    - Determines the degree of the dilation or erosion effect. A positive radius dilates the mask, expanding object boundaries, while a negative radius erodes the mask, shrinking the boundaries.
    - Comfy dtype: INT
    - Python dtype: int
- shape
    - Defines the shape of the structuring element used for the dilation or erosion process. Can be "box" or "circle", affecting the nature of the morphological transformation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- mask
    - The modified mask image after applying the dilation or erosion operation, reflecting the adjusted boundaries of objects in the mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DilateErodeMask:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "masks": ("MASK",),
                "radius": ("INT", {
                    "default": 0,
                    "min": -1023,
                    "max": 1023,
                    "step": 1
                }),
                "shape": (["box", "circle"],),
            },
        }

    RETURN_TYPES = ("MASK",)
    FUNCTION = "dilate_mask"

    CATEGORY = "mask/filters"

    def dilate_mask(self, masks, radius, shape):
        
        if radius == 0:
            return (masks,)
        
        s = abs(radius)
        d = s * 2 + 1
        k = np.zeros((d, d), np.uint8)
        if shape == "circle":
            k = cv2.circle(k, (s,s), s, 1, -1)
        else:
            k += 1
        
        dup = copy.deepcopy(masks.cpu().numpy())
        
        for index, mask in enumerate(dup):
            if radius > 0:
                dup[index] = cv2.dilate(mask, k, iterations=1)
            else:
                dup[index] = cv2.erode(mask, k, iterations=1)
        
        return (torch.from_numpy(dup),)

```
