
# Documentation
- Class name: DifferenceChecker
- Category: image/filters
- Output node: False

The DifferenceChecker node is designed to compute the absolute difference between two images and scale it by a specified multiplier. This functionality is useful for highlighting differences or changes between two images and can be applied to various image processing and analysis tasks.

# Input types
## Required
- images1
    - The first set of images to compare. This input is crucial for establishing the baseline for comparison.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- images2
    - The second set of images to compare with the first. This input is critical for identifying differences from the baseline.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- multiplier
    - The scaling factor applied to the computed difference, allowing adjustment of the intensity of the differences.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output is an image or a set of images representing the scaled absolute differences between the input images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DifferenceChecker:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images1": ("IMAGE", ),
                "images2": ("IMAGE", ),
                "multiplier": ("FLOAT", {"default": 1.0, "min": 0.01, "max": 1000.0, "step": 0.01,  "round": 0.01}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "difference_checker"

    CATEGORY = "image/filters"

    def difference_checker(self, images1, images2, multiplier):
        t = copy.deepcopy(images1)
        t = torch.abs(images1 - images2) * multiplier
        return (torch.clamp(t, min=0, max=1),)

```
