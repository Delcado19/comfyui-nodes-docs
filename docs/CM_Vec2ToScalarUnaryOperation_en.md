# Documentation
- Class name: Vec2ToScalarUnaryOperation
- Category: math/vec2
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec2ToScalarUnaryOperation node performs various unary operations on a 2D vector, converting it to a scalar value. It encapsulates mathematical operations applicable to vectors, highlighting the node's role in vector-to-scalar conversion in calculations.

# Input types
## Required
- op
- Parameter `op` defines the unary operation to execute on vector `a`. It is crucial because it determines the specific mathematical function applied, affecting the node's output.
    - Comfy dtype: str
    - Python dtype: str
- a
- Parameter `a` represents the 2D vector on which the unary operation will be performed. Its importance lies in being the primary input for the node to produce a scalar result.
    - Comfy dtype: Vec2
    - Python dtype: numpy.ndarray

# Output types
- result
- Output `result` is the scalar value obtained after applying the specified unary operation to input vector `a`. It signifies the result of the node's mathematical processing.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class Vec2ToScalarUnaryOperation:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(VEC_TO_SCALAR_UNARY_OPERATION.keys()),), 'a': DEFAULT_VEC2}}
    RETURN_TYPES = ('FLOAT',)
    FUNCTION = 'op'
    CATEGORY = 'math/vec2'

    def op(self, op: str, a: Vec2) -> tuple[float]:
        return (VEC_TO_SCALAR_UNARY_OPERATION[op](numpy.array(a)),)
```