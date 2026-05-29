
# Documentation
- Class name: EqualizeHistogram
- Category: Bmad/CV/Thresholding
- Output node: False

The EqualizeHistogram node applies histogram equalization to an image by redistributing its intensity levels, thereby enhancing the image's contrast.

# Input types
## Required
- src
    - The source image to be processed. Histogram equalization will be applied to this image to enhance its contrast.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The image after histogram equalization processing, with enhanced contrast.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class EqualizeHistogram:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "src": ("IMAGE",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "eq"
    CATEGORY = "Bmad/CV/Thresholding"

    def eq(self, src):
        src = tensor2opencv(src, 1)
        eq = cv.equalizeHist(src)
        eq = cv.cvtColor(eq, cv.COLOR_GRAY2RGB)
        eq = opencv2tensor(eq)
        return (eq,)

```
