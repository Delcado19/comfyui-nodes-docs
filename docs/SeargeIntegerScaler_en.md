# Documentation
- Class name: SeargeIntegerScaler
- Category: Searge/_deprecated_/Integers
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node scales and rounds the input integer value based on the provided factor and multiple. It ensures the output value remains an integer within the desired range and granularity.

# Input types
## Required
- value
    - The initial integer value to be scaled by the node operation. It is the foundation of the node's purpose, as it is the base value that will undergo transformation.
    - Comfy dtype: INT
    - Python dtype: int
- factor
    - The multiplier applied to the input value to determine the scale of the scaling. It is very important as it directly affects the magnitude of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- multiple_of
    - The value that the scaled result should be a multiple of, ensuring the output is rounded to the nearest acceptable value within the range.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- value
    - The processed integer value, now scaled and rounded according to the input parameters, representing the final output of the node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeIntegerScaler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'factor': ('FLOAT', {'default': 1.0, 'step': 0.01}), 'multiple_of': ('INT', {'default': 1, 'min': 0, 'max': 65536})}}
    RETURN_TYPES = ('INT',)
    RETURN_NAMES = ('value',)
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Integers'

    def get_value(self, value, factor, multiple_of):
        return (int(value * factor // multiple_of) * multiple_of,)
```