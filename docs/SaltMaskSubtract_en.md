
# Documentation
- Class name: SaltMaskSubtract
- Category: SALT/Masking/Filter
- Output node: False

The SaltMaskSubtract node is used to perform subtraction between two sets of masks, effectively calculating their differences to highlight or remove specific areas within the masks.

# Input types
## Required
- masks_a
    - The first set of masks serving as the minuend. This input is crucial for defining the basis of the subtraction operation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- masks_b
    - The second set of masks serving as the subtrahend. This input is essential for identifying areas to be removed or highlighted in the resulting mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - The result of subtracting the second set of masks from the first set, producing a new set of masks that emphasize the differences.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskSubtract:
    @classmethod
    def INPUT_TYPES(cls):
        return {
                    "required": {
                        "masks_a": ("MASK",),
                        "masks_b": ("MASK",),
                    }
                }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "subtract_masks"

    def subtract_masks(self, masks_a, masks_b):
        subtracted_masks = torch.clamp(masks_a - masks_b, 0, 255)
        return (subtracted_masks,)

```
