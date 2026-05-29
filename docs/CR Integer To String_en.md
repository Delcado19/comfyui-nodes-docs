# Documentation
- Class name: CR_IntegerToString
- Category: Comfyroll/Utils/Conversion
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_IntegerToString node is designed to seamlessly convert integer values into their corresponding string representations. This conversion process is essential in scenarios where numerical data needs to be interpreted or displayed in text format. The node plays a critical role in data manipulation and transformation tasks, ensuring accurate and reliable conversion from numeric to text form.

# Input types
## Required
- int_
    - The 'int_' parameter is the core input of the node, representing the integer value that needs to be converted to a string. Its conversion is crucial to the node's operation, as it directly affects the output and subsequent processing of the data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- STRING
    - The 'STRING' output parameter represents the string form of the input integer. It is the primary result of the node's conversion process, marking the successful transformation of numerical data into a human-readable format.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output provides a URL link to the documentation for further assistance. It is a useful resource for users seeking more information about the node's functionality and usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_IntegerToString:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'int_': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615, 'forceInput': True})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('STRING', 'show_help')
    FUNCTION = 'convert'
    CATEGORY = icons.get('Comfyroll/Utils/Conversion')

    def convert(self, int_):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Conversion-Nodes#cr-integer-to-string'
        return (f'{int_}', show_help)
```