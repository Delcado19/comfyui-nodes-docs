# Documentation
- Class name: CR_StringToCombo
- Category: Comfyroll/Utils/Conversion
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_StringToCombo node is designed to convert text strings into a list of values, providing a more efficient way to process and manipulate text data. It plays a key role in data transformation, especially when handling comma-separated values.

# Input types
## Required
- text
    - The 'text' parameter is critical to the node's operation, as it is the input text to be converted. Its importance lies in determining the content and structure of the output list, making it a fundamental part of the conversion process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- any
    - The 'any' output represents the converted value list derived from the input text. It is important because it is the primary result of the node's conversion functionality, containing the transformed data for further use.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
    - The 'show_help' output provides a URL link to the node's documentation page, giving users a direct reference for further information and guidance on using the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_StringToCombo:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {'multiline': False, 'default': '', 'forceInput': True})}}
    RETURN_TYPES = (any, 'STRING')
    RETURN_NAMES = ('any', 'show_help')
    FUNCTION = 'convert'
    CATEGORY = icons.get('Comfyroll/Utils/Conversion')

    def convert(self, text):
        text_list = list()
        if text != '':
            values = text.split(',')
            text_list = values[0]
            print(text_list)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Conversion-Nodes#cr-string-to-combo'
        return (text_list, show_help)
```