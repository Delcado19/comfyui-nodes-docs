# Documentation
- Class name: WAS_Text_To_String
- Category: WAS Suite/Text/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'text_to_string' method of the WAS_Text_To_String node is designed to convert input text into a standardized string format. It ensures the text is processed and returned in a consistent form that can be used for subsequent operations in the workflow.

# Input types
## Required
- text
    - The 'text' parameter is crucial for the node's operation because it defines the content to be converted to a string. Its role is to provide the raw material to be processed for the node, which is essential for the node's execution and result.
    - Comfy dtype: STRING
    - Python dtype: Union[str, List[str]]

# Output types
- output
    - The 'output' parameter represents the result of the 'text_to_string' method, i.e., the converted string. It is important because it is the main output of the node, containing the processed text.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_To_String:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'text_to_string'
    CATEGORY = 'WAS Suite/Text/Operations'

    def text_to_string(self, text):
        return (text,)
```