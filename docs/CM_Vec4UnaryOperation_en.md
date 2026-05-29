# Documentation
- Class name: Vec4UnaryOperation
- Category: math/vec4
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec4UnaryOperation node is designed to perform various unary operations on four‑dimensional vectors. It can apply different mathematical transformations to a vector, which may be crucial in vector‑based calculations for graphics, physics, or other mathematical applications.

# Input types
## Required
- op
    - Parameter `op` specifies the unary operation to execute on vector `a`. It is a string representing the operation itself, essential for determining the transformation applied to the vector.
    - Comfy dtype: str
    - Python dtype: str
- a
    - Parameter `a` denotes the four‑dimensional vector on which the unary operation will be applied. This is a fundamental input, as the effect of the operation is directly reflected in the transformation of this vector.
    - Comfy dtype: Vec4
    - Python dtype: Tuple[float, float, float, float]

# Output types
- result
    - Parameter `result` represents the outcome of applying the unary operation to input vector `a`. It is the transformed vector that contains the effect of the operation.
    - Comfy dtype: Vec4
    - Python dtype: Tuple[float, float, float, float]

# Usage tips
- Infra type: CPU

# Source code
```
class Vec4UnaryOperation:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(VEC_UNARY_OPERATIONS.keys()),), 'a': DEFAULT_VEC4}}
    RETURN_TYPES = ('VEC4',)
    FUNCTION = 'op'
    CATEGORY = 'math/vec4'

    def op(self, op: str, a: Vec4) -> tuple[Vec4]:
        return (_vec4_from_numpy(VEC_UNARY_OPERATIONS[op](numpy.array(a))),)
```