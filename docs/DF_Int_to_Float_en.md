
# Documentation
- Class name: DF_Int_to_Float
- Category: Derfuu_Nodes/Functions/Converters
- Output node: False

The DF_Int_to_Float node converts integer values to floating-point numbers for operations requiring decimal precision. This conversion is essential for using integer inputs in calculations that demand higher precision.

# Input types
## Required
- Value
    - The Value parameter represents the integer input to be converted to a float. This conversion is critical for enabling precise calculations that integers alone cannot accommodate.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- float
    - The output is the floating-point representation of the input integer, allowing decimal precision in subsequent operations.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Int2Float:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Value": Field.int(),
            }
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "get_value"
    CATEGORY = TREE_CONVERTERS

    def get_value(self, Value):
        return (float(Value),)

```
