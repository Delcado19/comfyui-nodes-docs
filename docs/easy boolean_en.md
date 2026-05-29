# Documentation
- Class name: Boolean
- Category: EasyUse/Logic/Type
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node class encapsulates the logic for processing boolean values, enabling basic operations and transformations on logical data processing.

# Input types
## Required
- value
    - The 'value' parameter is critical, as it determines the input for boolean operations. It is the foundational element for applying node logic and directly affects the result of node execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- boolean
    - The output 'boolean' represents the result of the boolean operation executed by the node. This is a key piece of data that can be used for further logical decisions or as a condition in the workflow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class Boolean:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('BOOLEAN',)
    RETURN_NAMES = ('boolean',)
    FUNCTION = 'execute'
    CATEGORY = 'EasyUse/Logic/Type'

    def execute(self, value):
        return (value,)
```