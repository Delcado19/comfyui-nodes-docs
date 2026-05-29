# Documentation
- Class name: CR_SetValueOnString
- Category: Comfyroll/Utils/Conditional
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SetValueOnString is a node that replaces parts of a string based on the presence of a specific substring. It evaluates a given test string within the input text, and depending on whether the test string is found, replaces the text with one value or another. This node is useful for creating dynamic text when certain conditions are met.

# Input types
## Required
- text
    - The 'text' parameter is the main content that the node will evaluate. It is crucial because it is the basis for determining whether 'test_string' exists and which replacement value will be used.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- test_string
    - The 'test_string' parameter is the substring that the node searches for in 'text'. If found, 'value_if_true' is used as the replacement; otherwise, 'value_if_false' is used.
    - Comfy dtype: STRING
    - Python dtype: str
- value_if_true
    - The 'value_if_true' parameter specifies the string that will replace 'text' if 'test_string' is found in 'text'.
    - Comfy dtype: STRING
    - Python dtype: str
- value_if_false
    - The 'value_if_false' parameter defines the string that will be used to replace 'text' if 'test_string' is not found in 'text'.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - The 'STRING' output is the result of the conditional replacement process. If 'test_string' exists in the input text, it is 'value_if_true'; if not, it is 'value_if_false'.
    - Comfy dtype: STRING
    - Python dtype: str
- BOOLEAN
    - The 'BOOLEAN' output indicates whether 'test_string' was found in the input text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_help
    - The 'show_help' output provides a URL link to the node's documentation for further assistance.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SetValueOnString:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {'multiline': False, 'default': '', 'forceInput': True})}, 'optional': {'test_string': ('STRING', {'multiline': False, 'default': ''}), 'value_if_true': ('STRING', {'multiline': False, 'default': ''}), 'value_if_false': ('STRING', {'multiline': False, 'default': ''})}}
    RETURN_TYPES = (any_type, 'BOOLEAN', 'STRING')
    RETURN_NAMES = ('STRING', 'BOOLEAN', 'show_help')
    FUNCTION = 'replace_text'
    CATEGORY = icons.get('Comfyroll/Utils/Conditional')

    def replace_text(self, text, test_string, value_if_true, value_if_false):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-set-value-on-string'
        if test_string in text:
            text_out = value_if_true
            bool_out = True
        else:
            text_out = value_if_false
            bool_out = False
        return (text_out, bool_out, show_help)
```