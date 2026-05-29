# Documentation
- Class name: WAS_Number_To_Float
- Category: WAS Suite/Number/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Number_To_Float node is designed to convert input numbers into their floating-point equivalents. This node plays a crucial role in data preprocessing for downstream operations by ensuring numerical consistency and compatibility.

# Input types
## Required
- number
    - The 'number' parameter is essential for the node's operation, as it is the input that will be converted to a floating-point number. This conversion is significant for maintaining numerical precision and facilitating further mathematical calculations.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float, str]

# Output types
- float_number
    - The 'float_number' output is the result of the conversion process, providing the floating-point representation of the input number. This output is critical for any subsequent numerical analysis or operations requiring decimal precision.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Number_To_Float:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'number': ('NUMBER',)}}
    RETURN_TYPES = ('FLOAT',)
    FUNCTION = 'number_to_float'
    CATEGORY = 'WAS Suite/Number/Operations'

    def number_to_float(self, number):
        return (float(number),)
```