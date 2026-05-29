# Documentation
- Class name: CR_TextInputSwitch
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextInputSwitch node is designed to facilitate conditional selection of text input based on a given integer input. It provides a simple mechanism for switching between two text inputs, which is particularly useful in scenarios where different text outputs need to be selected based on input values.

# Input types
## Required
- Input
    - The 'Input' parameter is crucial as it determines which text input will be selected. It operates within an integer range, where an input of 1 corresponds to 'text1' and an input of 2 corresponds to 'text2', thereby controlling the node's output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- text1
    - The 'text1' parameter is an optional string input that represents the text to return when the 'Input' parameter is set to 1. It plays an important role in defining the output for one of the possible input conditions.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - The 'text2' parameter is another optional string input that represents the text to return when the 'Input' parameter is set to 2. It complements the 'text1' parameter by providing alternative text output for different input conditions.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - The main output of the node is a string that corresponds to either 'text1' or 'text2' depending on the value of the 'Input' parameter. This output is important as it represents the selected text after the conditional switch.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output provides a URL link to the node documentation page, allowing users to easily access more information and guidance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_TextInputSwitch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'Input': ('INT', {'default': 1, 'min': 1, 'max': 2})}, 'optional': {'text1': ('STRING', {'forceInput': True}), 'text2': ('STRING', {'forceInput': True})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('STRING', 'show_help')
    FUNCTION = 'switch'
    CATEGORY = icons.get('Comfyroll/Utils/Logic')

    def switch(self, Input, text1=None, text2=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Logic-Nodes#cr-text-input-switch'
        if Input == 1:
            return (text1, show_help)
        else:
            return (text2, show_help)
```