# Documentation
- Class name: String
- Category: EasyUse/Logic/Type
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node facilitates processing and manipulation of string data, enabling users to perform various operations on text inputs. It is designed to handle string conversion, transformation, and analysis in a straightforward manner, making it a fundamental component for tasks involving text data.

# Input types
## Required
- value
    - The 'value' parameter is essential to the node's operation, representing the text input to be processed. It serves as the foundation for all string operations and transformations, directly affecting the output and the effectiveness of the node's execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The output 'string' represents the result of the string processing performed by the node. It contains the outcome of the operations executed on the input text, signifying the node's primary functionality and its contribution to the workflow.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class String:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value': ('STRING', {'default': ''})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('string',)
    FUNCTION = 'execute'
    CATEGORY = 'EasyUse/Logic/Type'

    def execute(self, value):
        return (value,)
```