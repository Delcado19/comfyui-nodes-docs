# Documentation
- Class name: StringConstant
- Category: KJNodes/constants
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

StringConstant node aims to provide a fixed string value in data processing workflows. It serves as a tool for situations that require a fixed string as input for subsequent operations, without needing dynamic changes.

# Input types
## Required
- string
    - The 'string' parameter is crucial for defining the constant string value that the node will output. It plays a key role in the node's operation because it directly determines the data passed to downstream processes.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- output
    - The 'output' parameter represents the string value returned by the node. It is important because it is the node's sole output, ensuring that the provided string is correctly used in subsequent steps of the workflow.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class StringConstant:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'string': ('STRING', {'default': '', 'multiline': False})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'passtring'
    CATEGORY = 'KJNodes/constants'

    def passtring(self, string):
        return (string,)
```