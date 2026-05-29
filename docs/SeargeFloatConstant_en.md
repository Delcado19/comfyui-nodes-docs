# Documentation
- Class name: SeargeFloatConstant
- Category: Searge/_deprecated_/Floats
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

SeargeFloatConstant is a node designed to provide a constant floating-point value within a workflow. It ensures consistent and immutable values across different parts of the system or experiment, improving result reliability and reproducibility.

# Input types
## Required
- value
- The parameter 'value' is the constant floating-point number this node will provide. It plays a key role in maintaining system stability by offering a fixed reference point for calculations and comparisons.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- value
- The output 'value' is the constant floating-point number set as input. It is important because it represents the unchanged, predefined constant that will be used in subsequent operations or analyses.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeFloatConstant:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value': ('FLOAT', {'default': 0.0, 'step': 0.01})}}
    RETURN_TYPES = ('FLOAT',)
    RETURN_NAMES = ('value',)
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Floats'

    def get_value(self, value):
        return (value,)
```