# Documentation
- Class name: Vec2ScalarOperation
- Category: math/vec2
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec2ScalarOperation node is designed to perform various mathematical operations between a two-dimensional vector (Vec2) and a scalar (float). It encapsulates the functionality to apply various vector-scalar operations, which are crucial in computational geometry and linear algebra. This node plays a key role in manipulating vector data in mathematical contexts.

# Input types
## Required
- op
    - The ‘op’ parameter specifies the type of mathematical operation to be performed between the vector and the scalar. It is crucial for determining the nature of the calculation that the node will perform. The choice of operation directly affects the result of the vector-scalar interaction.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The ‘a’ parameter represents the two-dimensional vector (Vec2) to be used in the operation. As a fundamental input, it is essential to the mathematical process and directly contributes to the final result of the calculation. The components of the vector will be manipulated according to the specified operation.
    - Comfy dtype: Vec2
    - Python dtype: Tuple[float, float]
- b
    - The ‘b’ parameter is the scalar value to be used in the operation together with the vector ‘a’. Its significance lies in its role as a multiplier or operand in the vector-scalar operation, affecting the final result of the calculation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result
    - The ‘result’ output is the transformed two-dimensional vector (Vec2) after applying the specified operation. It represents the final output of the vector-scalar calculation, directly reflecting the input parameters and the chosen operation.
    - Comfy dtype: VEC2
    - Python dtype: Tuple[float, float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
