# Documentation
- Class name: CR_StringToBoolean
- Category: Comfyroll/Utils/Conversion
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_StringToBoolean node converts a string representation of a boolean value to the corresponding boolean data type. It plays a key role in data preprocessing by ensuring the accuracy of boolean information in workflows, enabling seamless integration of text input with boolean‑based decision processes.

# Input types
## Required
- text
    - The `text` parameter is essential for the node’s operation because it represents the string to be converted to a boolean. Correct input is crucial for the node to run properly and produce an accurate boolean output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- BOOLEAN
    - The `BOOLEAN` output provides the converted boolean value derived from the input text. It is important because it directly influences subsequent steps that depend on boolean logic in the workflow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_help
    - The `show_help` output provides a URL link to the node’s documentation page, which can be useful for users seeking additional guidance or information on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_StringToBoolean:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {'multiline': False, 'default': '', 'forceInput': True})}}
    RETURN_TYPES = ('BOOLEAN', 'STRING')
    RETURN_NAMES = ('BOOLEAN', 'show_help')
    FUNCTION = 'convert'
    CATEGORY = icons.get('Comfyroll/Utils/Conversion')

    def convert(self, text):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Conversion-Nodes#cr-string-to-boolean'
        if text == 'True' or text == 'true':
            boolean_out = True
        if text == 'False' or text == 'false':
            boolean_out = False
        else:
            pass
        return (boolean_out, show_help)
```