# Documentation
- Class name: CR_TextInputSwitch4way
- Category: Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_TextInputSwitch4way is a utility node designed to conditionally output text based on input selection. It enables branching of text-based information flow within workflows by selecting one of four provided text strings. The node determines which text string to output by evaluating the 'Input' parameter, enabling dynamic content display.

# Input types
## Required
- Input
    - 'Input' parameter is critical because it determines which of the four text strings will be selected for output. It acts as the decision factor within the node, guiding the flow of text information based on its integer value.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- text1
    - 'text1' parameter is one of the optional text inputs available to the node. It represents the text string that is output when 'Input' is set to 1, allowing customized content based on user-defined criteria.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - 'text2' parameter is another optional text input for the node. It is used when 'Input' is set to 2, ensuring the node can provide a different text string as part of conditional output.
    - Comfy dtype: STRING
    - Python dtype: str
- text3
    - 'text3' parameter is another optional text input for the node. It becomes relevant when 'Input' is set to 3, allowing the node to display a different text segment within the workflow.
    - Comfy dtype: STRING
    - Python dtype: str
- text4
    - 'text4' parameter is the final optional text input for the node. It is selected for output when 'Input' is set to 4, completing the set of conditional text options available within the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - The node's primary output is a text string determined by the 'Input' parameter. It represents the selected text based on user choice, providing a clear result for the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The secondary output 'show_help' provides a URL link to the node's documentation page. This is useful for users seeking additional information or guidance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_TextInputSwitch4way:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'Input': ('INT', {'default': 1, 'min': 1, 'max': 4})}, 'optional': {'text1': ('STRING', {'forceInput': True}), 'text2': ('STRING', {'forceInput': True}), 'text3': ('STRING', {'forceInput': True}), 'text4': ('STRING', {'forceInput': True})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('STRING', 'show_help')
    FUNCTION = 'switch'
    CATEGORY = icons.get('Comfyroll/Utils/Logic')

    def switch(self, Input, text1=None, text2=None, text3=None, text4=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Logic-Nodes#cr-text-input-switch-4-way'
        if Input == 1:
            return (text1, show_help)
        elif Input == 2:
            return (text2, show_help)
        elif Input == 3:
            return (text3, show_help)
        else:
            return (text4, show_help)
```