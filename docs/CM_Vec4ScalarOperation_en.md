# Documentation
- Class name: Vec4ScalarOperation
- Category: math/vec4
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec4ScalarOperation node performs scalar operations on four-dimensional vectors, providing a method for manipulating vector data through various mathematical operations. It is designed to be flexible and efficient, allowing direct application in scenarios requiring vector arithmetic.

# Input types
## Required
- op
    - The operation parameter defines the specific scalar operation to be performed on the vector. It is crucial as it determines the mathematical function applied to each component of the vector.
    - Comfy dtype: str
    - Python dtype: str
- a
    - Parameter 'a' represents the four-dimensional vector on which the scalar operation will be performed. It is crucial as it is the primary input that the node operates on to produce the result.
    - Comfy dtype: Vec4
    - Python dtype: Tuple[float, float, float, float]
- b
    - Scalar 'b' is a floating-point number used with vector 'a' for the operation defined by 'op'. It plays an important role in the calculation as it directly affects the result of the vector transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result
    - The result of the scalar operation performed on input vector 'a'. It contains the result of applying the specified mathematical function to each component of the vector.
    - Comfy dtype: VEC4
    - Python dtype: Tuple[float, float, float, float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
