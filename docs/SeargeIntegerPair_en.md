# Documentation
- Class name: SeargeIntegerPair
- Category: Searge/_deprecated_/Integers
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node is designed to process and return pairs of integers, serving as a fundamental component in workflows involving numerical analysis or data manipulation.

# Input types
## Required
- value1
    - The first integer in the pair, crucial for the node's operation as it forms the basis of the numerical relationship.
    - Comfy dtype: INT
    - Python dtype: int
- value2
    - The second integer in the pair, together with the first value, completes the set and influences the node's output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- value 1
    - The first element of the output tuple, representing the initial integer value provided to the node.
    - Comfy dtype: INT
    - Python dtype: int
- value 2
    - The second element of the output tuple, representing the second integer value provided to the node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeIntegerPair:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value1': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'value2': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('INT', 'INT')
    RETURN_NAMES = ('value 1', 'value 2')
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Integers'

    def get_value(self, value1, value2):
        return (value1, value2)
```