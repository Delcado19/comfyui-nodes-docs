
# Documentation
- Class name: Width_Height Literal
- Category: ImageSaverTools/utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Width/Height Literal node provides a simple, direct way to specify and pass fixed width and height values as parameters in a node-based processing workflow. This node simplifies size configuration for various operations, ensuring downstream nodes receive consistent and accurate size specifications.

# Input types
## Required
- int
    - This parameter specifies the integer value for width or height. It is the core input of the node and directly determines the output size parameter.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - Outputs an integer value representing the specified width or height. This output can be used by other nodes as a size parameter, ensuring consistency and accuracy of dimensions throughout the processing workflow.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [Image Generate Gradient](../../was-node-suite-comfyui/Nodes/Image Generate Gradient.md)
    - Generate Noise Image
    - [Image Perlin Noise](../../was-node-suite-comfyui/Nodes/Image Perlin Noise.md)



## Source code
```python
class SizeLiteral:
    RETURN_TYPES = ("INT",)
    FUNCTION = "get_int"
    CATEGORY = "ImageSaverTools/utils"

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"int": ("INT", {"default": 512, "min": 1, "max": MAX_RESOLUTION, "step": 8})}}

    def get_int(self, int):
        return (int,)

```
