
# Documentation
- Class name: ttN float
- Category: ttN/util
- Output node: False

The ttN_FLOAT node is designed to convert floating-point numbers into different formats. It accepts a floating-point number as input and outputs the same value in float, integer, and string formats, enabling diverse data manipulation and representation.

# Input types
## Required
- float
    - The floating-point number to be converted. This input is critical as it determines the base value for the integer and string representations.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The original input floating-point number.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int
    - The integer representation of the input floating-point number.
    - Comfy dtype: INT
    - Python dtype: int
- text
    - The string representation of the input floating-point number.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ttN_FLOAT:
    version = '1.0.0'
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "float": ("FLOAT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                },
                "hidden": {"ttNnodeVersion": ttN_FLOAT.version},
        }

    RETURN_TYPES = ("FLOAT", "INT", "STRING",)
    RETURN_NAMES = ("float", "int", "text",)
    FUNCTION = "convert"

    CATEGORY = "ttN/util"

    @staticmethod
    def convert(float):
        return float, int(float), str(float)

```
