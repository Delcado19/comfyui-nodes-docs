# Documentation
- Class name: IntUnaryCondition
- Category: math/int
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The IntUnaryCondition node is designed to evaluate a single integer against a set of unary conditions. It is a fundamental building block for more complex mathematical operations, allowing determination of whether an integer meets a specific condition without altering its value.

# Input types
## Required
- op
    - The parameter `op` is a string that defines the unary condition to check for integer `a`. It is crucial to the node's operation because it determines the specific condition to evaluate.
    - Comfy dtype: STRING
    - Python dtype: str
- a
    - The parameter `a` represents the integer to be evaluated according to the unary condition specified by `op`. It is a basic input to the node as it is the subject of the condition check.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- BOOL
    - The IntUnaryCondition node outputs a boolean indicating whether integer `a` satisfies the unary condition defined by `op`. This result is important for decision-making in subsequent operations.
    - Comfy dtype: BOOL
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class IntUnaryCondition:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(INT_UNARY_CONDITIONS.keys()),), 'a': DEFAULT_INT}}
    RETURN_TYPES = ('BOOL',)
    FUNCTION = 'op'
    CATEGORY = 'math/int'

    def op(self, op: str, a: int) -> tuple[bool]:
        return (INT_UNARY_CONDITIONS[op](a),)
```