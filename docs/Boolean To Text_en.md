# Documentation
- Class name: WAS_Boolean_To_Text
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Boolean_To_Text node is designed to convert boolean values into a text representation of 'True' or 'False'. It serves as a simple and effective bridge, connecting boolean logic with text output, facilitating the integration of boolean operations with text-based systems or processes.

# Input types
## Required
- boolean
    - The parameter 'boolean' is crucial to the node's operation because it is the input that determines the node's output. It directly affects the node's execution by indicating whether to return the text 'True' or 'False'.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text
    - The output parameter 'text' represents the text equivalent of the input boolean value. It is important because it provides a clear and direct way to convert boolean logic into a human-readable format.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Boolean_To_Text:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'boolean': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'do'
    CATEGORY = 'WAS Suite/Logic'

    def do(self, boolean):
        if boolean:
            return ('True',)
        return ('False',)
```