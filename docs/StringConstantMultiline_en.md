# Documentation
- Class name: StringConstantMultiline
- Category: KJNodes/constants
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The `StringConstantMultiline` node is designed to process and manipulate multiline strings. It provides functionality to convert multiline input into a single string, optionally stripping newline characters to create a continuous block of text. This node is particularly useful for tasks requiring clean, formatted text for further processing or display.

# Input types
## Required
- string
    - The "string" parameter is the primary input to the node, expecting a multiline string. It plays a critical role in the node's operation, as it is the text that will be processed. The node's ability to handle multiline input is important for applications requiring text manipulation across multiple lines.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- strip_newlines
    - The "strip_newlines" parameter is an optional boolean flag that determines whether newline characters should be removed from the input string. When set to True, it ensures the output is a single continuous block of text without newlines, which is important for certain text processing tasks.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- new_string
    - The "new_string" output is a processed version of the input string, with newline characters potentially removed depending on the "strip_newlines" parameter. This output is important as it represents the final formatted text that can be used for subsequent operations or analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class StringConstantMultiline:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'string': ('STRING', {'default': '', 'multiline': True}), 'strip_newlines': ('BOOLEAN', {'default': True})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'stringify'
    CATEGORY = 'KJNodes/constants'

    def stringify(self, string, strip_newlines):
        new_string = []
        for line in io.StringIO(string):
            if not line.strip().startswith('\n') and strip_newlines:
                line = line.replace('\n', '')
            new_string.append(line)
        new_string = '\n'.join(new_string)
        return (new_string,)
```