
# Documentation
- Class name: ttN int
- Category: ttN/util
- Output node: False

This node processes integer values, providing functionality to convert integer inputs into multiple formats including their original integer form, floating-point representation, and string representation. This conversion process facilitates the use of integer values in different scenarios requiring specific data types.

# Input types
## Required
- int
    - Accepts an integer value as input and converts it into multiple formats. This parameter is central to the node's operation, transforming numeric data into forms suitable for various application requirements.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - Returns the original integer input, preserving its integer-formatted value.
    - Comfy dtype: INT
    - Python dtype: int
- float
    - Provides the floating-point representation of the input integer, suitable for applications requiring floating-point numbers.
    - Comfy dtype: FLOAT
    - Python dtype: float
- text
    - Converts the input integer into a string representation, facilitating use in scenarios requiring text data.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [VHS_VideoCombine](../../ComfyUI-VideoHelperSuite/Nodes/VHS_VideoCombine.md)



## Source code
```python
class ttN_INT:
    version = '1.0.0'
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "int": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                },
                "hidden": {"ttNnodeVersion": ttN_INT.version},
        }

    RETURN_TYPES = ("INT", "FLOAT", "STRING",)
    RETURN_NAMES = ("int", "float", "text",)
    FUNCTION = "convert"

    CATEGORY = "ttN/util"

    @staticmethod
    def convert(int):
        return int, float(int), str(int)

```
