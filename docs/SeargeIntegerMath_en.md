# Documentation
- Class name: SeargeIntegerMath
- Category: Searge/_deprecated_/Integers
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node performs various integer arithmetic operations based on user-selected options, facilitating the processing and conversion of integer data within the system.

# Input types
## Required
- op
    - The operation parameter determines the arithmetic function to be applied, which is the cornerstone of the node's calculation process.
    - Comfy dtype: COMBO[SeargeIntegerMath.OPERATIONS]
    - Python dtype: str
- a
    - Parameter 'a' represents the first operand in integer arithmetic operations, playing a crucial role in determining the operation result.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - Parameter 'b' is the second operand for multiplication and division operations, significantly affecting the final result.
    - Comfy dtype: INT
    - Python dtype: int
- c
    - Parameter 'c' is the third operand in addition and subtraction operations, affecting the overall calculation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - Output 'result' displays the calculated value after applying the selected arithmetic operation, representing the final outcome of the node's function.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeIntegerMath:
    OPERATIONS = ['a * b + c', 'a + c', 'a - c', 'a * b', 'a / b']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'op': (SeargeIntegerMath.OPERATIONS, {'default': 'a * b + c'}), 'a': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'b': ('INT', {'default': 1, 'min': 0, 'max': 18446744073709551615}), 'c': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('INT',)
    RETURN_NAMES = ('result',)
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Integers'

    def get_value(self, op, a, b, c):
        res = 0
        if op == 'a * b + c':
            res = a * b + c
        elif op == 'a + c':
            res = a + c
        elif op == 'a - c':
            res = a - c
        elif op == 'a * b':
            res = a * b
        elif op == 'a / b':
            res = a // b
        return (int(res),)
```