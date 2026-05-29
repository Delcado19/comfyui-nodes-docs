# Documentation
- Class name: Vec2BinaryOperation
- Category: math/vec2
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec2BinaryOperation node is designed to perform binary operations on two-dimensional vectors. It handles various vector operations such as addition, subtraction, multiplication, and division, providing a versatile tool for vector math within applications. This node plays a key role in manipulating vector data, enabling users to perform complex calculations with ease and precision.

# Input types
## Required
- op
    - The 'op' parameter defines the type of binary operation to perform on the input vectors. It is critical for determining the mathematical operation the node will execute, directly affecting the calculation result. The choice of operation can significantly impact the result and subsequent analysis or processing steps.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The 'a' parameter represents the first vector in the binary operation. It is a required input, as it constitutes half of the operands needed for the vector operation. The values and properties of vector 'a' will greatly influence the final result of the calculation, making it a critical element in the node's functionality.
    - Comfy dtype: Vec2
    - Python dtype: Tuple[float, float]
- b
    - The 'b' parameter represents the second vector participating in the binary operation. Like 'a', it is a required input that completes the set of operands needed for the vector operation. The attributes and values in vector 'b' are essential to the calculation process and the node's ability to produce accurate and meaningful results.
    - Comfy dtype: Vec2
    - Python dtype: Tuple[float, float]

# Output types
- result
    - The 'result' output parameter contains the result of the binary operation performed on the input vectors. It is a critical output, as it conveys the final computed value, representing the node's primary function and purpose in the computational workflow.
    - Comfy dtype: Vec2
    - Python dtype: Tuple[float, float]

# Usage tips
- Infra type: CPU

# Source code
```
class Vec2BinaryOperation:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(VEC_BINARY_OPERATIONS.keys()),), 'a': DEFAULT_VEC2, 'b': DEFAULT_VEC2}}
    RETURN_TYPES = ('VEC2',)
    FUNCTION = 'op'
    CATEGORY = 'math/vec2'

    def op(self, op: str, a: Vec2, b: Vec2) -> tuple[Vec2]:
        return (_vec2_from_numpy(VEC_BINARY_OPERATIONS[op](numpy.array(a), numpy.array(b))),)
```