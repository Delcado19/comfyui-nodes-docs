# Documentation
- Class name: WAS_Number_To_Int
- Category: WAS Suite/Number/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'number_to_int' method of the WAS_Number_To_Int node is designed to convert input numbers into their integer equivalents. It plays a critical role in data preprocessing by ensuring numerical consistency and facilitating further numerical operations.

# Input types
## Required
- number
    - The 'number' parameter is essential for the node's operation, as it is the input to be converted into an integer. It is important because the accuracy and completeness of the conversion depend on the quality of this input.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float, str]

# Output types
- int_value
    - The 'int_value' output represents the integer conversion result of the input number. It is important because it directly reflects the outcome of the node's primary function, providing a consistent and usable format for downstream processes.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Number_To_Int:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'number': ('NUMBER',)}}
    RETURN_TYPES = ('INT',)
    FUNCTION = 'number_to_int'
    CATEGORY = 'WAS Suite/Number/Operations'

    def number_to_int(self, number):
        return (int(number),)
```