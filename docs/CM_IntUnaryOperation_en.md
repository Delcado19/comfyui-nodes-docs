# Documentation
- Class name: IntUnaryOperation
- Category: math/int
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The IntUnaryOperation node is designed to perform various unary operations on integer inputs, providing a flexible and efficient way to manipulate numerical data. It emphasizes the node's ability to transform integer values through a set of predefined mathematical operations without altering the fundamental nature of the input.

# Input types
## Required
- op
    - The 'op' parameter is critical, as it determines the specific unary operation to be applied to the integer input. It influences the node's execution by specifying the mathematical function to be used, thereby affecting the result of the operation.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The 'a' parameter represents the integer input for the unary operation. Its value directly influences the result of the operation, as it is the operand to which all mathematical functions will be applied.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- result
    - The output parameter 'result' represents the result of applying the unary operation to the input integer. It encapsulates the transformed value after the operation, reflecting the node's primary function—numerical manipulation.
    - Comfy dtype: int
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class IntUnaryOperation:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(INT_UNARY_OPERATIONS.keys()),), 'a': DEFAULT_INT}}
    RETURN_TYPES = ('INT',)
    FUNCTION = 'op'
    CATEGORY = 'math/int'

    def op(self, op: str, a: int) -> tuple[int]:
        return (INT_UNARY_OPERATIONS[op](a),)
```