# Documentation
- Class name: WAS_Constant_Number
- Category: WAS Suite/Number
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Constant_Number node is designed to generate a constant based on a specified type. It provides a flexible way to return a number in different formats (such as integer, float, or boolean) depending on the input parameters. This node is particularly useful in scenarios where a constant value is needed for further processing or analysis.

# Input types
## Required
- number_type
    - The 'number_type' parameter defines the type of constant to be generated. It is critical because it determines the output format. The node will generate an integer, float, or boolean based on this parameter.
    - Comfy dtype: COMBO['integer', 'float', 'bool']
    - Python dtype: str
- number
    - The 'number' parameter is the base value used by the node to generate the constant. It plays an important role in determining the final output of the node, as the returned value is derived from this input.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- number_as_text
    - The optional 'number_as_text' parameter allows the node to interpret the input as a textual representation of a number, which can then be converted to the specified numeric type. This provides flexibility for numeric input.
    - Comfy dtype: str
    - Python dtype: Optional[str]

# Output types
- constant_number
    - The output 'constant_number' represents the constant generated in the specified type. It is the primary result of the node's operation and is important for any subsequent tasks that require this constant value.
    - Comfy dtype: COMBO[INT, FLOAT, NUMBER]
    - Python dtype: Union[int, float, bool]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Constant_Number:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'number_type': (['integer', 'float', 'bool'],), 'number': ('FLOAT', {'default': 0, 'min': -18446744073709551615, 'max': 18446744073709551615})}, 'optional': {'number_as_text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False})}}
    RETURN_TYPES = ('NUMBER', 'FLOAT', 'INT')
    FUNCTION = 'return_constant_number'
    CATEGORY = 'WAS Suite/Number'

    def return_constant_number(self, number_type, number, number_as_text=None):
        if number_as_text:
            if number_type == 'integer':
                number = int(number_as_text)
            elif number_type == 'float':
                number = float(number_as_text)
            else:
                number = bool(number_as_text)
        if number_type:
            if number_type == 'integer':
                return (int(number), float(number), int(number))
            elif number_type == 'integer':
                return (float(number), float(number), int(number))
            elif number_type == 'bool':
                boolean = 1 if float(number) > 0.5 else 0
                return (int(boolean), float(boolean), int(boolean))
            else:
                return (number, float(number), int(number))
```