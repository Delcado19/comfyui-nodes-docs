# Documentation
- Class name: WAS_Logical_NOT
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Logical_NOT node applies a logical NOT operation to a boolean input. It inverts the truth value, providing a simple mechanism for negating boolean conditions in workflows. This node plays a key role in decision-making processes when a boolean state needs to be inverted.

# Input types
## Required
- boolean
    - The "boolean" parameter is the key input to the WAS_Logical_NOT node. It is a boolean value that the node will negate. This parameter's importance lies in its ability to control the logical state of subsequent operations, making it essential for conditional workflows.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- result
    - The 'result' output of the WAS_Logical_NOT node represents the logical NOT of the input boolean value. Its importance lies in directly influencing the logical flow within the system, enabling the construction of complex conditional statements.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Logical_NOT:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'boolean': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('BOOLEAN',)
    FUNCTION = 'do'
    CATEGORY = 'WAS Suite/Logic'

    def do(self, boolean):
        return (not boolean,)
```