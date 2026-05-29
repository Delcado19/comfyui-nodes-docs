# Documentation
- Class name: Vec4ToScalarUnaryOperation
- Category: math/vec4
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

This node performs mathematical operations on a four-dimensional vector, converting it into a scalar value. It is designed to encapsulate a series of unary operations that can be applied to each element of the vector, thereby implementing complex mathematical transformations in a simplified and efficient manner.

# Input types
## Required
- op
    - The parameter 'op' specifies the unary operation to apply to each element of the input vector. It is crucial because it determines the type of mathematical transformation to be performed.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' represents the four-dimensional vector that the node will process. It is a basic input because the node’s functionality revolves around performing operations on this vector.
    - Comfy dtype: Vec4
    - Python dtype: numpy.ndarray

# Output types
- result
    - The parameter 'result' is the node’s output, a scalar value obtained by applying the specified unary operation to the input vector. It marks the completion of the node’s mathematical processing.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
