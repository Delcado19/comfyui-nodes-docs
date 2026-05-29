# Documentation
- Class name: CenterImage
- Category: ♾️Mixlab/Layer
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The CenterImage node is designed to process and center an image within a given canvas, focusing on a specified region. It achieves this by calculating the required coordinates and dimensions while accounting for the provided margins. The node's functionality extends beyond simple placement; it also generates a mask corresponding to the centered region, enhancing its applicability in various image processing tasks.

# Input types
## Required
- canvas
    - The canvas parameter is required, as it represents the base image on which the centering operation will be performed. It is the foundation for the node's execution and directly affects the output grid and mask.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- left
    - The left parameter specifies the left margin for the centering operation. It is essential for determining the exact position of the image within the canvas and contributes to the final centered appearance.
    - Comfy dtype: INT
    - Python dtype: int
- top
    - The top parameter defines the top margin during the centering process. It plays a significant role in the vertical placement of the image and influences the overall centered layout.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The right parameter sets the right margin of the image within the canvas. It is an important factor in horizontal positioning and helps precisely frame the centered image.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The bottom parameter indicates the bottom margin required for image centering. It is critical for vertical alignment and ensures the image is properly contained within the canvas boundaries.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- grid
    - The grid output provides the coordinates and dimensions of the centered image within the canvas. This information is essential for further image processing or manipulation tasks.
    - Comfy dtype: _GRID
    - Python dtype: Tuple[int, int, int, int]
- mask
    - The mask output is a binary image that depicts the region of the centered image. It is important for applications such as masking, filtering, or segmentation in image processing workflows.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CenterImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'canvas': ('IMAGE',), 'left': ('INT', {'default': 24, 'min': 0, 'max': 5000, 'step': 1, 'display': 'number'}), 'top': ('INT', {'default': 24, 'min': 0, 'max': 5000, 'step': 1, 'display': 'number'}), 'right': ('INT', {'default': 24, 'min': 0, 'max': 5000, 'step': 1, 'display': 'number'}), 'bottom': ('INT', {'default': 24, 'min': 0, 'max': 5000, 'step': 1, 'display': 'number'})}}
    RETURN_TYPES = ('_GRID', 'MASK')
    RETURN_NAMES = ('grid', 'mask')
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Layer'
    INPUT_IS_LIST = False

    def run(self, canvas, left, top, right, bottom):
        canvas = tensor2pil(canvas)
        grid = centerImage((left, top, right, bottom), canvas)
        mask = createMask(canvas, left, top, canvas.width - left - right, canvas.height - top - bottom)
        return (grid, pil2tensor(mask))
```