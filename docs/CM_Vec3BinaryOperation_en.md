# Documentation
- Class name: Vec3BinaryOperation
- Category: math/vec3
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec3BinaryOperation node is designed to perform binary operations on two three-dimensional vectors. It is a fundamental building block for vector mathematics, enabling operations such as addition, subtraction, and scalar multiplication. In geometric computation, this node is essential for modeling and analysis where vector operations are indispensable.

# Input types
## Required
- op
    - The parameter 'op' specifies the binary operation to perform on the input vectors. It is one of a predefined set of vector operations and is critical for determining the type of computation the node will execute.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' represents the first three-dimensional vector in the operation. It is a fundamental input that directly influences the result of the binary operation performed by the node.
    - Comfy dtype: tuple[float, float, float]
    - Python dtype: Tuple[float, float, float]
- b
    - The parameter 'b' represents the second three-dimensional vector participating in the binary operation. It is a key input that, together with 'a', determines the final result of the computation.
    - Comfy dtype: tuple[float, float, float]
    - Python dtype: Tuple[float, float, float]

# Output types
- result
    - The output 'result' is the three-dimensional vector obtained from performing the binary operation on input vectors 'a' and 'b'. It contains the result of the vector computation and is a direct reflection of the specified operation 'op'.
    - Comfy dtype: tuple[float, float, float]
    - Python dtype: Tuple[float, float, float]

# Usage tips
- Infra type: CPU

# Source code
```
class Vec3BinaryOperation:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(VEC_BINARY_OPERATIONS.keys()),), 'a': DEFAULT_VEC3, 'b': DEFAULT_VEC3}}
    RETURN_TYPES = ('VEC3',)
    FUNCTION = 'op'
    CATEGORY = 'math/vec3'

    def op(self, op: str, a: Vec3, b: Vec3) -> tuple[Vec3]:
        return (_vec3_from_numpy(VEC_BINARY_OPERATIONS[op](numpy.array(a), numpy.array(b))),)
```