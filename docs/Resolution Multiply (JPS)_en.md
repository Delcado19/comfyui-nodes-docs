
# Documentation
- Class name: Resolution Multiply (JPS)
- Category: JPS Nodes/Math
- Output node: False

The Resolution Multiply node scales an image’s dimensions by a specified factor, effectively multiplying the image’s width and height by this factor to produce new dimensions. This node is useful when adjusting image resolution, such as preparing images for processing or display at different sizes.

# Input types
## Required
- width
    - Specify the image’s original width. The width will be scaled by the factor to compute the new width.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specify the image’s original height. The height will be scaled by the factor to compute the new height.
    - Comfy dtype: INT
    - Python dtype: int
- factor
    - The multiplier used to scale the image’s width and height. A factor greater than 1 increases the image size, while a factor less than 1 decreases it (though the node’s constraints do not allow reduction).
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width_resized
    - The new width of the image after scaling by the specified factor.
    - Comfy dtype: INT
    - Python dtype: int
- height_resized
    - The new height of the image after scaling by the specified factor.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Math_Resolution_Multiply:
    
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "width": ("INT", {"default": 1024, "min": 256, "max": 8192, "step": 16}),
                "height": ("INT", {"default": 1024, "min": 256, "max": 8192, "step": 16}),
                "factor": ("INT", {"default": 2, "min": 1, "max": 8, "step": 1}),
        }}
    RETURN_TYPES = ("INT","INT")
    RETURN_NAMES = ("width_resized", "height_resized")
    FUNCTION = "get_newres"

    CATEGORY="JPS Nodes/Math"

    def get_newres(self,width,height,factor):
        factor = int(factor)
        width = int(width)
        width_resized = int(width) * int(factor)
        height = int(height)
        height_resized = int (height) * int(factor)
            
        return(int(width_resized),int(height_resized))

```
