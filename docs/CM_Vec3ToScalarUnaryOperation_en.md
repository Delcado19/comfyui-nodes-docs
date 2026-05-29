# Documentation
- Class name: Vec3ToScalarUnaryOperation
- Category: math/vec3
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec3ToScalarUnaryOperation node is designed to perform various unary operations on a three-dimensional vector, converting it into a scalar value. This node is essential for applications that need to reduce the magnitude or directional properties of a vector to a single numerical representation for further analysis or decision-making processes.

# Input types
## Required
- op
    - The 'op' parameter is a string that specifies the unary operation to be performed on the input vector. It is critical for determining the nature of the scalar output and the mathematical transformation applied to the vector.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The 'a' parameter represents the three-dimensional vector on which the unary operation will be performed. This is a necessary input, as the entire operation revolves around converting this vector into a scalar value.
    - Comfy dtype: Vec3
    - Python dtype: numpy.ndarray

# Output types
- result
    - The 'result' output is the scalar value derived from performing the unary operation on the input vector. It summarizes the essence of the vector in a single numerical form, facilitating its use in subsequent computational tasks.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
