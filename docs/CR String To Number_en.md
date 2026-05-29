# Documentation
- Class name: CR_StringToNumber
- Category: Comfyroll/Utils/Conversion
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_StringToNumber node is designed to convert a given string into a numeric format, either integer or floating-point. It handles numeric strings by providing rounding options, ensuring the output meets specific requirements, thus offering flexibility.

# Input types
## Required
- text
    - The ‘text’ parameter is the string to be converted into a number. It is the essential input for the node's operation, as it directly affects the conversion process and the final numerical result.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- round_integer
    - The ‘round_integer’ parameter determines how the string is rounded to an integer if needed. It can be set to ‘round’ for standard rounding, ‘round down’ to always round down, or ‘round up’ to always round up, affecting the precision and accuracy of the integer output.
    - Comfy dtype: COMBO['round', 'round down', 'round up']
    - Python dtype: str

# Output types
- INT
    - The ‘INT’ output represents the string converted to an integer according to the specified rounding method. It is important for applications requiring integer values.
    - Comfy dtype: INT
    - Python dtype: int
- FLOAT
    - The ‘FLOAT’ output is the string converted to a floating-point number. It preserves the decimal precision of the original string and is useful for applications requiring precise numerical values.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The ‘show_help’ output provides a URL link to the documentation for further assistance. It is particularly useful for users seeking guidance on how to use the node or troubleshoot issues.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_StringToNumber:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': False, 'default': 'text', 'forceInput': True}), 'round_integer': (['round', 'round down', 'round up'],)}}
    RETURN_TYPES = ('INT', 'FLOAT', 'STRING')
    RETURN_NAMES = ('INT', 'FLOAT', 'show_help')
    FUNCTION = 'convert'
    CATEGORY = icons.get('Comfyroll/Utils/Conversion')

    def convert(self, text, round_integer):
        if text.startswith('-') and text[1:].replace('.', '', 1).isdigit():
            float_out = -float(text[1:])
        elif text.replace('.', '', 1).isdigit():
            float_out = float(text)
        else:
            print(f'[Error] CR String To Number. Not a number.')
            return {}
        if round_integer == 'round up':
            if text.startswith('-'):
                int_out = int(float_out)
            else:
                int_out = int(float_out) + 1
        elif round_integer == 'round down':
            if text.startswith('-'):
                int_out = int(float_out) - 1
            else:
                int_out = int(float_out)
        else:
            int_out = round(float_out)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Conversion-Nodes#cr-string-to-number'
        return (int_out, float_out, show_help)
```