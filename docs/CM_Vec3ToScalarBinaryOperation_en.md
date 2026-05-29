# Documentation
- Class name: Vec3ToScalarBinaryOperation
- Category: math/vec3
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec3ToScalarBinaryOperation node is designed to perform a binary operation on two three-dimensional vectors, resulting in a scalar value. It encapsulates the mathematical logic of vector operations and is optimized for computational efficiency, ensuring that the node contributes to the entire system by providing accurate and reliable vector calculations.

# Input types
## Required
- op
    - The parameter 'op' defines the binary operation to be performed on the input vectors. It is crucial because it determines the mathematical function applied to the vectors, affecting the result computed by the node.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' represents the first vector in the binary operation. It is essential for providing one of the operands required for the vector calculation, influencing the final scalar result.
    - Comfy dtype: Vec3
    - Python dtype: numpy.ndarray
- b
    - The parameter 'b' denotes the second vector involved in the binary operation. It is indispensable for providing the other operand required for the vector calculation, directly affecting the node's output.
    - Comfy dtype: Vec3
    - Python dtype: numpy.ndarray

# Output types
- result
    - The 'result' output provides the scalar value obtained from performing the binary operation on the input vectors. It is important because it contains the result of the node's mathematical processing.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
