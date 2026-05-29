# Documentation
- Class name: WAS_Number_To_String
- Category: WAS Suite/Number/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Number_To_String node converts a numeric value into its corresponding string representation. This node plays a critical role in data preprocessing and transformation workflows, enabling seamless integration of numeric data into systems that require text input.

# Input types
## Required
- number
    - The 'number' parameter is essential to the node's operation, as it is the input value that needs to be converted to a string. It significantly influences the node's execution by determining the content of the output string.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]

# Output types
- string
    - The 'string' output parameter represents the textual form of the input number. It is important because it provides the transformed data that can be used in various downstream applications or processes.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Number_To_String:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'number': ('NUMBER',)}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'number_to_string'
    CATEGORY = 'WAS Suite/Number/Operations'

    def number_to_string(self, number):
        return (str(number),)
```