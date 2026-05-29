
# Documentation
- Class name: IG Float
- Category: 🐓 IG Nodes/Primitives
- Output node: False

The IG Float node is designed to handle floating-point numbers within a specified range, providing precise numerical input for various computational tasks. It serves as a foundational building block in operations requiring decimal values, facilitating accurate calculations and data manipulation.

# Input types
## Required
- value
    - Specifies the floating-point number to be processed. This parameter is critical for defining the numerical input the node will handle, directly influencing the output based on the given value.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - Returns the processed floating-point number, identical to the input value. This output is essential for further numerical computations or as input to other nodes requiring decimal values.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IG_Float:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "value": ("FLOAT", {"default": 0, "min": -sys.float_info.max, "max": sys.float_info.max, "step": FLOAT_STEP}),
            },
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "main"
    CATEGORY = TREE_PRIMITIVES

    def main(self, value):
        return (value,)

```
