# Documentation
- Class name: CR_FloatToString
- Category: Comfyroll/Utils/Conversion
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_FloatToString node converts a floating-point number to its string representation. This conversion is essential for applications that need to display or process numeric data in text format. The node plays a core role in data preprocessing, suitable for generating reports, interfacing with systems that require text input, or integrating with databases that store numeric data as strings.

# Input types
## Required
- float_
    - The 'float_' parameter is a floating-point number that the node will convert to a string. This is a basic input because all node operations revolve around this value. The conversion ensures the numeric data can be used in contexts that require a string format.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- STRING
    - The 'STRING' output provides the string representation of the input float. This output is important as it is the primary result of the node, allowing users to use the converted string in subsequent processes or applications.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output is a URL string that directs users to the node's help documentation. It serves as a convenient reference when users need additional information or guidance to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_FloatToString:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'float_': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1000000.0, 'forceInput': True})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('STRING', 'show_help')
    FUNCTION = 'convert'
    CATEGORY = icons.get('Comfyroll/Utils/Conversion')

    def convert(self, float_):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Conversion-Nodes#cr-float-to-string'
        return (f'{float_}', show_help)
```