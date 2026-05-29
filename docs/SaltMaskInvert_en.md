
# Documentation
- Class name: SaltMaskInvert
- Category: SALT/Masking/Filter
- Output node: False

The SaltMaskInvert node inverts pixel values in masked regions, flipping foreground and background of the mask. This operation is critical for image processing tasks that need to focus on the inverse of a given region.

# Input types
## Required
- masks
    - Input mask to be inverted. This parameter is critical as it directly affects the inversion process, determining which regions of the mask will be flipped.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - Inverted mask with pixel values opposite to the original input. This output is important for subsequent image processing or analysis tasks that require the inverted mask region.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskInvert:
    @classmethod
    def INPUT_TYPES(cls):
        return {
                    "required": {
                        "masks": ("MASK",),
                    }
                }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "add_masks"

    def add_masks(self, masks):
        return (1. - masks,)

```
