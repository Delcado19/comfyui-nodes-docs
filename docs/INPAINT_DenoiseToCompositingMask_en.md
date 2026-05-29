
# Documentation
- Class name: INPAINT_DenoiseToCompositingMask
- Category: inpaint
- Output node: False

The INPAINT_DenoiseToCompositingMask node is designed to transform a noisy mask into a cleaner, more compositing-friendly mask. It optimizes mask quality by adjusting the provided offset and threshold parameters, facilitating subsequent image processing tasks.

# Input types
## Required
- mask
    - The mask input is a critical component of the denoising process, serving as the primary data the node will process to generate a cleaner mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- offset
    - The offset parameter allows adjusting the starting point of mask intensity, setting a baseline to define what constitutes noise, thereby assisting the denoising process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold
    - The threshold parameter defines the upper limit of mask intensity to consider during denoising, helping to distinguish important parts of the mask from noise.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- mask
    - The output is a denoised mask, optimized for compositing tasks by adjusting its values within the specified range.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DenoiseToCompositingMask:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "mask": ("MASK",),
                "offset": (
                    "FLOAT",
                    {"default": 0.1, "min": 0.0, "max": 1.0, "step": 0.01},
                ),
                "threshold": (
                    "FLOAT",
                    {"default": 0.2, "min": 0.01, "max": 1.0, "step": 0.01},
                ),
            }
        }

    RETURN_TYPES = ("MASK",)
    CATEGORY = "inpaint"
    FUNCTION = "convert"

    def convert(self, mask: Tensor, offset: float, threshold: float):
        assert 0.0 <= offset < threshold <= 1.0, "Threshold must be higher than offset"
        mask = (mask - offset) * (1 / (threshold - offset))
        mask = mask.clamp(0, 1)
        return (mask,)

```
