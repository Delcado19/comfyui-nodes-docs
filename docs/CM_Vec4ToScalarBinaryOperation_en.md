# Documentation
- Class name: Vec4ToScalarBinaryOperation
- Category: math/vec4
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

Vec4ToScalarBinaryOperation node is designed to perform a binary operation on two four-dimensional vectors (Vec4), resulting in a scalar value. It encapsulates the mathematical logic required to perform such operations, abstracts the complexity, and provides an intuitive interface for vector-based calculations.

# Input types
## Required
- op
    - Parameter 'op' defines the binary operation to be performed on the input vectors. It is crucial because it determines the mathematical function applied to the vectors, directly impacting the result of the operation.
    - Comfy dtype: str
    - Python dtype: str
- a
    - Parameter 'a' represents the first four-dimensional vector (Vec4) in the binary operation. It is a required input as it constitutes one operand of the operation, contributing to the final scalar result.
    - Comfy dtype: Vec4
    - Python dtype: List[float]
- b
    - Parameter 'b' represents the second four-dimensional vector (Vec4) involved in the binary operation. It is a required input as it complements the first vector to complete the operation, affecting the scalar value of the result.
    - Comfy dtype: Vec4
    - Python dtype: List[float]

# Output types
- result
    - Parameter 'result' is the scalar output of the binary operation performed on the input vectors. It represents the final outcome of the mathematical process, encapsulating the result of the operation in a single numerical value.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
