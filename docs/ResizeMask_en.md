
# Documentation
- Class name: ResizeMask
- Category: KJNodes/masking
- Output node: False

The ResizeMask node is designed to resize a given single mask or a batch of masks to specified dimensions, with the option to keep the original aspect ratio. This node is a key component in image processing workflows, suitable for scenarios where masks need to be standardized or resized for subsequent processing.

# Input types
## Required
- mask
    - The input mask or a batch of masks to be resized. This parameter is core to the node operation, directly affecting the dimensions and proportions of the output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - The target width for the resize operation. It defines the horizontal dimension of the output mask.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The target height for the resize operation. It defines the vertical dimension of the output mask.
    - Comfy dtype: INT
    - Python dtype: int
- keep_proportions
    - A boolean flag indicating whether to keep the original aspect ratio of the mask when resizing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- mask
    - The resized mask or a batch of masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - The actual width of the resized mask, which may differ from the input target width if the aspect ratio is kept.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The actual height of the resized mask, which may differ from the input target height if the aspect ratio is kept.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ResizeMask:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "mask": ("MASK",),
                "width": ("INT", { "default": 512, "min": 0, "max": MAX_RESOLUTION, "step": 8, "display": "number" }),
                "height": ("INT", { "default": 512, "min": 0, "max": MAX_RESOLUTION, "step": 8, "display": "number" }),
                "keep_proportions": ("BOOLEAN", { "default": False }),
            }
        }

    RETURN_TYPES = ("MASK", "INT", "INT",)
    RETURN_NAMES = ("mask", "width", "height",)
    FUNCTION = "resize"
    CATEGORY = "KJNodes/masking"
    DESCRIPTION = """
Resizes the mask or batch of masks to the specified width and height.
"""

    def resize(self, mask, width, height, keep_proportions):
        if keep_proportions:
            _, oh, ow, _ = mask.shape
            width = ow if width == 0 else width
            height = oh if height == 0 else height
            ratio = min(width / ow, height / oh)
            width = round(ow*ratio)
            height = round(oh*ratio)
    
        outputs = mask.unsqueeze(0)  # Add an extra dimension for batch size
        outputs = F.interpolate(outputs, size=(height, width), mode="nearest")
        outputs = outputs.squeeze(0)  # Remove the extra dimension after interpolation

        return(outputs, outputs.shape[2], outputs.shape[1],)

```
