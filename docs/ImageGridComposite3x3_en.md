
# Documentation
- Class name: ImageGridComposite3x3
- Category: KJNodes/image
- Output node: False

The ImageGridComposite3x3 node is designed to stitch nine input images into a 3x3 grid, effectively creating a composite image that displays all inputs in a structured layout.

# Input types
## Required
- image1
    - The first image, which will be placed in the top-left corner of the 3x3 grid.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The second image, which will be placed in the top row of the 3x3 grid, immediately to the right of the first image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image3
    - The third image, which will be placed in the top row of the 3x3 grid, immediately to the right of the second image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image4
    - The fourth image, which will be placed in the middle row of the 3x3 grid, starting from the left.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image5
    - The center image of the 3x3 grid, surrounded by the other eight images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image6
    - The sixth image, which will be placed in the middle row of the 3x3 grid, immediately to the right of the fifth image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image7
    - The seventh image, which will be placed in the bottom row of the 3x3 grid, starting from the left.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image8
    - The eighth image, which will be placed in the bottom row of the 3x3 grid, immediately to the right of the seventh image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image9
    - The ninth and final image, which will be placed in the bottom-right corner of the 3x3 grid, completing the entire composite image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The composite image formed by stitching the nine input images into a 3x3 grid.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageGridComposite3x3:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "image1": ("IMAGE",),
            "image2": ("IMAGE",),
            "image3": ("IMAGE",),
            "image4": ("IMAGE",),
            "image5": ("IMAGE",),
            "image6": ("IMAGE",),
            "image7": ("IMAGE",),
            "image8": ("IMAGE",),
            "image9": ("IMAGE",),     
        }}

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "compositegrid"
    CATEGORY = "KJNodes/image"
    DESCRIPTION = """
Concatenates the 9 input images into a 3x3 grid. 
"""

    def compositegrid(self, image1, image2, image3, image4, image5, image6, image7, image8, image9):
        top_row = torch.cat((image1, image2, image3), dim=2)
        mid_row = torch.cat((image4, image5, image6), dim=2)
        bottom_row = torch.cat((image7, image8, image9), dim=2)
        grid = torch.cat((top_row, mid_row, bottom_row), dim=1)
        return (grid,)

```
