# Documentation
- Class name: Vec2UnaryOperation
- Category: math/vec2
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec2UnaryOperation node is designed to perform various unary operations on two-dimensional vectors. It accepts an operation as input, which is a string representing a mathematical function, and applies that function to the vector 'a', resulting in a transformed vector. This node is essential in vector algebra within mathematical and computational contexts, where operations such as negation, inversion, or absolute value may be required.

# Input types
## Required
- op
    - The parameter 'op' specifies the unary operation to be applied to the vector 'a'. It is a string corresponding to a predefined mathematical function. This parameter is critical as it determines the nature of the transformation the input vector will undergo.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' is the two-dimensional vector on which the unary operation will be applied. This is a key input, as the entire operation revolves around transforming this vector according to the specified mathematical function.
    - Comfy dtype: VEC2
    - Python dtype: Tuple[float, float]

# Output types
- result
    - The output 'result' is the transformed vector after applying the unary operation specified by 'op' to the input vector 'a'. It represents the result of the mathematical transformation and is the primary output of the Vec2UnaryOperation node.
    - Comfy dtype: VEC2
    - Python dtype: Tuple[float, float]

# Usage tips
- Infra type: CPU

# Source code
```
class Vec2UnaryOperation:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(VEC_UNARY_OPERATIONS.keys()),), 'a': DEFAULT_VEC2}}
    RETURN_TYPES = ('VEC2',)
    FUNCTION = 'op'
    CATEGORY = 'math/vec2'

    def op(self, op: str, a: Vec2) -> tuple[Vec2]:
        return (_vec2_from_numpy(VEC_UNARY_OPERATIONS[op](numpy.array(a))),)
```