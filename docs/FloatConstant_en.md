# Documentation
- Class name: FloatConstant
- Category: KJNodes/constants
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The FloatConstant node is designed to provide a constant floating-point value in data processing or machine learning workflows. It ensures a consistent and predefined value is available for subsequent operations, contributing to system performance stability and predictability.

# Input types
## Required
- value
    - The 'value' parameter is the core of the FloatConstant node, defining the specific floating-point number that will be output. It plays a critical role in the node's operation, as it directly influences the node's result without further computation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- value
    - The 'value' output represents the constant floating-point number provided by the FloatConstant node. It is important because it serves as a reliable and invariant input for downstream processes in the workflow.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class FloatConstant:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value': ('FLOAT', {'default': 0.0, 'min': -18446744073709551615, 'max': 18446744073709551615, 'step': 0.001})}}
    RETURN_TYPES = ('FLOAT',)
    RETURN_NAMES = ('value',)
    FUNCTION = 'get_value'
    CATEGORY = 'KJNodes/constants'

    def get_value(self, value):
        return (value,)
```