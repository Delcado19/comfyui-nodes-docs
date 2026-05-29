
# Documentation
- Class name: MaskSmooth+
- Category: essentials
- Output node: False

The MaskSmooth node applies a Gaussian blur to a given mask, allowing users to adjust the blur intensity. This process smooths the mask edges, creating a more visually appealing result with softer transitions.

# Input types
## Required
- mask
    - The mask input represents the binary or grayscale image to which the Gaussian blur will be applied. It is the core element for achieving the smoothing effect.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- amount
    - The amount parameter controls the intensity of the Gaussian blur applied to the mask. Higher values produce more pronounced smoothing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The output is a modified version of the input mask after Gaussian blur processing, with its edges smoothed.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class MaskSmooth:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "mask": ("MASK",),
                "amount": ("INT", { "default": 0, "min": 0, "max": 127, "step": 1, }),
            }
        }

    RETURN_TYPES = ("MASK",)
    FUNCTION = "execute"
    CATEGORY = "essentials"

    def execute(self, mask, amount):
        if amount == 0:
            return (mask,)
        
        if amount % 2 == 0:
            amount += 1

        mask = mask > 0.5
        mask = T.functional.gaussian_blur(mask.unsqueeze(1), amount).squeeze(1).float()

        return (mask,)

```
