# Documentation
- Class name: SeargeFloatPair
- Category: Searge/_deprecated_/Floats
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class is designed to process and return a pair of floating-point values, emphasizing comparison and manipulation of numerical data within a deprecated framework.

# Input types
## Required
- value1
    - The first input value is a floating-point number that plays a crucial role in the node's operation, influencing the result of the computation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- value2
    - The second input value is another floating-point number, which, together with the first value, is essential for the node to perform its intended function.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- value 1
    - The first output is a floating-point number, representing the result of the node's processing of the initial input value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- value 2
    - The second output is a floating-point number, corresponding to the result of the second input value.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeFloatPair:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value1': ('FLOAT', {'default': 0.0, 'step': 0.01}), 'value2': ('FLOAT', {'default': 0.0, 'step': 0.01})}}
    RETURN_TYPES = ('FLOAT', 'FLOAT')
    RETURN_NAMES = ('value 1', 'value 2')
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Floats'

    def get_value(self, value1, value2):
        return (value1, value2)
```