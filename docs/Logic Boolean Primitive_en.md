# Documentation
- Class name: WAS_Boolean_Primitive
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `do` method of the WAS_Boolean_Primitive node is designed to process and return a boolean value. It serves as a fundamental building block in logical operations, ensuring the integrity of boolean computations within the workflow.

# Input types
## Required
- boolean
    - The "boolean" parameter is critical to the node's operation, as it directly influences the logical result of the "do" method. It is the primary input that determines the node's behavior and resulting boolean value.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- result
    - The "result" output parameter represents the result of the boolean operation performed by the "do" method. It is important because it provides the final boolean value after processing the input.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Boolean_Primitive:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'boolean': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('BOOLEAN',)
    FUNCTION = 'do'
    CATEGORY = 'WAS Suite/Logic'

    def do(self, boolean):
        return (boolean,)
```