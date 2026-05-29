# Documentation
- Class name: Vec2ToScalarBinaryOperation
- Category: math/vec2
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec2ToScalarBinaryOperation node performs a binary operation on a 2D vector and converts it to a scalar value. It encapsulates the essence of vector arithmetic in a single operation, providing a simplified way to manipulate vector data and derive meaningful scalar output.

# Input types
## Required
- op
- The 'op' parameter is crucial because it determines the type of binary operation to perform on the input vectors. It defines the mathematical logic applied, thereby affecting the final scalar result.
    - Comfy dtype: str
    - Python dtype: str
- a
- The 'a' parameter represents the first vector in the binary operation. It is a fundamental component of the node's functionality, as the operation's outcome depends on the values within this vector.
    - Comfy dtype: Vec2
    - Python dtype: numpy.ndarray
- b
- The 'b' parameter represents the second vector involved in the binary operation. Its values are equally important in forming the operation result, ensuring comprehensive analysis of the vector pair.
    - Comfy dtype: Vec2
    - Python dtype: numpy.ndarray

# Output types
- result
- The 'result' output is the scalar value derived from the binary operation executed on the input vectors. It is the final outcome of the node's processing, representing the output after the mathematical computation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class Vec2ToScalarBinaryOperation:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(VEC_TO_SCALAR_BINARY_OPERATION.keys()),), 'a': DEFAULT_VEC2, 'b': DEFAULT_VEC2}}
    RETURN_TYPES = ('FLOAT',)
    FUNCTION = 'op'
    CATEGORY = 'math/vec2'

    def op(self, op: str, a: Vec2, b: Vec2) -> tuple[float]:
        return (VEC_TO_SCALAR_BINARY_OPERATION[op](numpy.array(a), numpy.array(b)),)
```