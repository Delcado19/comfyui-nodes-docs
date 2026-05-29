# Documentation
- Class name: Vec2BinaryCondition
- Category: math/vec2
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec2BinaryCondition node is designed to perform binary operations on 2D vectors, providing a method to compare and evaluate vector pairs based on specified conditions. It is important in mathematical operations where the result is a boolean value indicating the outcome of the applied binary condition.

# Input types
## Required
- op
    - The 'op' parameter defines the binary condition to apply to the vector inputs. It is crucial as it determines the nature of the comparison or operation performed, directly affecting the node's output.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The 'a' parameter represents the first vector in the binary operation. It is critical as it forms half of the comparison or operation, and the node's functionality depends on the values in this vector.
    - Comfy dtype: Vec2
    - Python dtype: Vec2
- b
    - The 'b' parameter denotes the second vector involved in the binary operation. It is important as it completes the required pair for the operation, and the node's validity relies on the interaction between 'a' and 'b'.
    - Comfy dtype: Vec2
    - Python dtype: Vec2

# Output types
- result
    - The 'result' output represents the outcome of the binary condition applied to the input vectors. It is a boolean value that encapsulates the success or failure of the condition check.
    - Comfy dtype: BOOL
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class Vec2BinaryCondition:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(VEC_BINARY_CONDITIONS.keys()),), 'a': DEFAULT_VEC2, 'b': DEFAULT_VEC2}}
    RETURN_TYPES = ('BOOL',)
    FUNCTION = 'op'
    CATEGORY = 'math/vec2'

    def op(self, op: str, a: Vec2, b: Vec2) -> tuple[bool]:
        return (VEC_BINARY_CONDITIONS[op](numpy.array(a), numpy.array(b)),)
```