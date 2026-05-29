
# Documentation
- Class name: RoundMask
- Category: KJNodes/masking
- Output node: False

The RoundMask node converts an input mask or batch of masks into binary masks, rounding values to the nearest binary value (0 or 1). This is critical for tasks requiring clear, explicit mask boundaries without gradients.

# Input types
## Required
- mask
    - Input mask or batch of masks to be rounded to binary. This is critical for achieving clear and explicit mask boundaries in various image processing tasks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- mask
    - Output is a binary mask or batch of binary masks, where each pixel value is rounded to the nearest binary value (0 or 1), ensuring clear and explicit boundaries.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RoundMask:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "mask": ("MASK",),  
        }}

    RETURN_TYPES = ("MASK",)
    FUNCTION = "round"
    CATEGORY = "KJNodes/masking"
    DESCRIPTION = """
Rounds the mask or batch of masks to a binary mask.  
<img src="https://github.com/kijai/ComfyUI-KJNodes/assets/40791699/52c85202-f74e-4b96-9dac-c8bda5ddcc40" width="300" height="250" alt="RoundMask example">

"""

    def round(self, mask):
        mask = mask.round()
        return (mask,)

```
