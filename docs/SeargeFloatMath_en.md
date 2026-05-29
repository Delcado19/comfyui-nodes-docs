# Documentation
- Class name: SeargeFloatMath
- Category: Searge/_deprecated_/Floats
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeFloatMath node is designed to perform basic arithmetic operations on floating-point numbers. It provides a range of operations such as multiplication, addition, subtraction, division, and combinations of multiplication and addition. The goal of this node is to offer a straightforward method for executing these fundamental mathematical functions, thereby facilitating the manipulation of floating-point values within a broader computational context.

# Input types
## Required
- op
    - The parameter 'op' determines the arithmetic operation to be performed. It is crucial as it indicates the mathematical procedure the node will execute, thereby influencing the result of the computation.
    - Comfy dtype: STRING
    - Python dtype: str
- a
    - The parameter 'a' represents one operand in the arithmetic operation. Its value significantly affects the final result, making it an essential component of the node's functionality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - The parameter 'b' serves as an operand in operations requiring two inputs, such as multiplication or division. Its presence depends on the chosen operation, but when required, it plays a vital role in the computation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- c
    - The parameter 'c' is another operand that participates in specific arithmetic operations, such as addition or subtraction. When necessary, it contributes to the final calculation, highlighting its importance in certain scenarios.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result
    - The output 'result' provides the outcome of the arithmetic operation performed by the node. It is a direct reflection of the input parameters and the selected operation, encapsulating the purpose of the node.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeFloatMath:
    OPERATIONS = ['a * b + c', 'a + c', 'a - c', 'a * b', 'a / b']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'op': (SeargeFloatMath.OPERATIONS, {'default': 'a * b + c'}), 'a': ('FLOAT', {'default': 0.0, 'step': 0.01}), 'b': ('FLOAT', {'default': 1.0, 'step': 0.01}), 'c': ('FLOAT', {'default': 0.0, 'step': 0.01})}}
    RETURN_TYPES = ('FLOAT',)
    RETURN_NAMES = ('result',)
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Floats'

    def get_value(self, op, a, b, c):
        res = 0.0
        if op == 'a * b + c':
            res = a * b + c
        elif op == 'a + c':
            res = a + c
        elif op == 'a - c':
            res = a - c
        elif op == 'a * b':
            res = a * b
        elif op == 'a / b':
            res = a / b
        return (res,)
```