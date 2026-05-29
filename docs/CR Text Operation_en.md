# Documentation
- Class name: CR_TextOperation
- Category: Comfyroll/Utils/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextOperation node is designed to perform various text operations. It accepts a string input and applies specified operations such as converting text to uppercase, lowercase, or title case. The node also handles more complex operations like reversing case, reversing text, trimming whitespace, and completely removing spaces. It serves as a versatile tool for preprocessing and transforming text data within workflows.

# Input types
## Required
- text
    - The 'text' parameter is the primary input for the node and is essential for all text operations. It determines the data that will be manipulated based on the selected operation. The node's functionality is directly tied to the content and format of the provided text.
    - Comfy dtype: STRING
    - Python dtype: str
- operation
    - The 'operation' parameter specifies the particular text operation to perform. It is a key component as it defines the type of transformation to apply to the input text, influencing the node's final output.
    - Comfy dtype: COMBO['uppercase', 'lowercase', 'capitalize', 'invert_case', 'reverse', 'trim', 'remove_spaces']
    - Python dtype: str

# Output types
- STRING
    - The 'STRING' output parameter represents the result of the text operation. It is the transformed text after applying the specified operation, demonstrating the node's capabilities.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output provides a URL link to documentation for further assistance. It is particularly useful for users seeking additional information about node operations or troubleshooting.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_TextOperation:

    @classmethod
    def INPUT_TYPES(cls):
        operations = ['uppercase', 'lowercase', 'capitalize', 'invert_case', 'reverse', 'trim', 'remove_spaces']
        return {'required': {'text': ('STRING', {'multiline': False, 'default': '', 'forceInput': True}), 'operation': (operations,)}}
    RETURN_TYPES = (any_type, 'STRING')
    RETURN_NAMES = ('STRING', 'show_help')
    FUNCTION = 'text_operation'
    CATEGORY = icons.get('Comfyroll/Utils/Text')

    def text_operation(self, text, operation):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-text_operation'
        if operation == 'uppercase':
            text_out = text.upper()
        elif operation == 'lowercase':
            text_out = text.lower()
        elif operation == 'capitalize':
            text_out = text.capitalize()
        elif operation == 'invert_case':
            text_out = text.swapcase()
        elif operation == 'reverse':
            text_out = text[::-1]
        elif operation == 'trim':
            text_out = text.strip()
        elif operation == 'remove_spaces':
            text_out = text.replace(' ', '')
        else:
            return 'CR Text Operation: Invalid operation.'
        return (text_out, show_help)
```