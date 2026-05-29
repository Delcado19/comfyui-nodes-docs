# Documentation
- Class name: Float
- Category: EasyUse/Logic/Type
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node provides basic floating‑point operations, focusing on manipulating and calculating decimal values within a specified precision.

# Input types
## Required
- value
    - The `value` parameter is critical to the node's operation; it is the input decimal value for the node's action or calculation.
    - Comfy dtype: FLOAT
    - Python dtype: Union[Decimal, float, int]

# Output types
- float
    - The output `float` represents the result of the node's computation or operation, reflecting the processed value.
    - Comfy dtype: FLOAT
    - Python dtype: Union[Decimal, float]

# Usage tips
- Infra type: CPU

# Source code
```
class Float:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value': ('FLOAT', {'default': 0, 'step': 0.01})}}
    RETURN_TYPES = ('FLOAT',)
    RETURN_NAMES = ('float',)
    FUNCTION = 'execute'
    CATEGORY = 'EasyUse/Logic/Type'

    def execute(self, value):
        return (value,)
```