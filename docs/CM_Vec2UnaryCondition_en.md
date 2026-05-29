# Documentation
- Class name: Vec2UnaryCondition
- Category: math/vec2
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec2UnaryCondition node is designed to perform various unary operations on two-dimensional vectors. It applies the specified condition to each element of the vector and returns a boolean result indicating the outcome of each element operation.

# Input types
## Required
- op
    - The parameter 'op' defines the unary condition that will be applied to the vector elements. It is crucial for determining the nature of the operation and the expected result.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' represents the two-dimensional vector on which the unary condition will be evaluated. It is key to the node's execution as it provides the input data for the operation.
    - Comfy dtype: Vec2
    - Python dtype: Vec2

# Output types
- result
    - The output 'result' is a tuple of boolean values corresponding to the evaluation of the unary condition on each element of the input vector.
    - Comfy dtype: tuple[bool]
    - Python dtype: Tuple[bool]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
