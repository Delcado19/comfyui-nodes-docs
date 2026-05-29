# Documentation
- Class name: OutputString
- Category: utils
- Output node: True
- Repo Ref: https://github.com/adieyal/comfyui-dynamicprompts.git

This node is designed to process and output text data, serving as a key utility in various workflows that require string manipulation or display.

# Input types
## Required
- text
- Text input is essential because it is the primary data for node operations. It influences the entire node output and determines the content and structure of the resulting string.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui.string
- Output represents the processed text data, the result of the node's string operations. It is important because it conveys the final outcome of the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class OutputString:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {})}}
    RETURN_TYPES = ()
    FUNCTION = 'output_string'
    OUTPUT_NODE = True
    CATEGORY = 'utils'

    def output_string(self, string):
        return ({'ui': {'string': string}},)
```