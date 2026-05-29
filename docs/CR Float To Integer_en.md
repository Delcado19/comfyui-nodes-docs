# Documentation
- Class name: CR_FloatToInteger
- Category: Comfyroll/Utils/Conversion
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_FloatToInteger node is designed to convert floating-point numbers to their integer equivalents. It plays a key role in data processing by ensuring numerical consistency and compatibility across different compute tasks. This node is especially useful when only integer values are acceptable or required.

# Input types
## Required
- _float
    - _float parameter is essential for the node's operation because it is the input floating-point number to be converted to an integer. Its conversion is indispensable for various mathematical and logical operations that require integer input.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- INT
    - INT output represents the integer conversion of the input floating-point number. It is important because it provides a discrete value that can be used in calculations where only integer values are allowed.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - show_help output provides a URL link to documentation for further assistance. It serves as a useful resource for users seeking more information about the node's functionality and usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_FloatToInteger:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'_float': ('FLOAT', {'default': 0.0, 'forceInput': True, 'forceInput': True})}}
    RETURN_TYPES = ('INT', 'STRING')
    RETURN_NAMES = ('INT', 'show_help')
    FUNCTION = 'convert'
    CATEGORY = icons.get('Comfyroll/Utils/Conversion')

    def convert(self, _float):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Conversion-Nodes#cr-float-to-integer'
        return (int(_float), show_help)
```