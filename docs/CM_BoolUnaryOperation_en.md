# Documentation
- Class name: BoolUnaryOperation
- Category: math/bool
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The BoolUnaryOperation node is designed to perform unary operations on boolean values. It accepts a boolean input, applies the specified unary operation, and produces a boolean output. This node is essential for manipulating boolean logic in a streamlined and efficient manner.

# Input types
## Required
- op
    - The parameter 'op' specifies the unary operation to be applied to the boolean input. It is crucial for determining the logic that the node will process.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' represents the boolean value to which the unary operation will be applied. It plays a central role in the execution of the node, as it is the object of the operation.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- result
    - The parameter 'result' is the output of the unary operation performed on the input boolean value. It marks the result of the logical operation within the node.
    - Comfy dtype: bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class BoolUnaryOperation:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(BOOL_UNARY_OPERATIONS.keys()),), 'a': DEFAULT_BOOL}}
    RETURN_TYPES = ('BOOL',)
    FUNCTION = 'op'
    CATEGORY = 'math/bool'

    def op(self, op: str, a: bool) -> tuple[bool]:
        return (BOOL_UNARY_OPERATIONS[op](a),)
```