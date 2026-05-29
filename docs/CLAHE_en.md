
# Documentation
- Class name: CLAHE
- Category: Bmad/CV/Thresholding
- Output node: False

The CLAHE node applies the Contrast Limited Adaptive Histogram Equalization algorithm to enhance image contrast. It enhances contrast by locally adjusting image intensity while considering specific parameters such as clip limit and grid size for finer control over the processing.

# Input types
## Required
- src
    - The source image to be processed. It serves as the input on which the CLAHE algorithm will be applied to enhance local contrast.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- clip_limit
    - Defines the threshold for the contrast limit. This parameter helps control the degree of contrast enhancement, preventing excessive noise amplification in relatively uniform regions of the image.
    - Comfy dtype: INT
    - Python dtype: int
- tile_grid_x
    - Specifies the number of tiles in the horizontal direction of the image. It determines the granularity of the contrast enhancement process.
    - Comfy dtype: INT
    - Python dtype: int
- tile_grid_y
    - Specifies the number of tiles in the vertical direction of the image. Similar to tile_grid_x, it affects the granularity of contrast enhancement.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image after applying CLAHE. It is an enhanced version of the input image with improved local contrast.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class CLAHE:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "src": ("IMAGE",),
                "clip_limit": ("INT", {"default": 2, "step": 1}),
                # 40 is the default in documentation, but prob. a bit high no?
                "tile_grid_x": ("INT", {"default": 8, "min": 2, "step": 1}),
                "tile_grid_y": ("INT", {"default": 8, "min": 2, "step": 1}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "eq"
    CATEGORY = "Bmad/CV/Thresholding"

    def eq(self, src, clip_limit, tile_grid_x, tile_grid_y):
        src = tensor2opencv(src, 1)
        clahe = cv.createCLAHE(clipLimit=clip_limit, tileGridSize=(tile_grid_x, tile_grid_y))
        eq = clahe.apply(src)
        eq = cv.cvtColor(eq, cv.COLOR_GRAY2RGB)
        eq = opencv2tensor(eq)
        return (eq,)

```
