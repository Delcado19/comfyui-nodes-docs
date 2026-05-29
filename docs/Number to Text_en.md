# Documentation
- Class name: WAS_Number_To_Text
- Category: WAS Suite/Number/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

This node converts a numeric input into a textual representation, making the number easier for downstream nodes or applications to understand and use.

# Input types
## Required
- number
    - The 'number' parameter is essential to the node's operation, as it serves as the input to be converted to text. This is a prerequisite for the node to perform its primary function.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float, complex]

# Output types
- text
    - The output 'text' represents the textual form of the input number, which is the result of the node's conversion process.
    - Comfy dtype: TEXT
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Number_To_Text:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'number': ('NUMBER',)}}
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'number_to_text'
    CATEGORY = 'WAS Suite/Number/Operations'

    def number_to_text(self, number):
        return (str(number),)
```