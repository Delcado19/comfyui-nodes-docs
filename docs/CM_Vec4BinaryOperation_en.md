# Documentation
- Class name: Vec4BinaryOperation
- Category: math/vec4
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec4BinaryOperation node performs a binary operation on two four‑dimensional vectors (Vec4). It handles various operations specified by the *op* parameter, allowing element‑wise computation between vectors *a* and *b*. This node is essential in vector algebra for mathematical and computational contexts, enabling users to manipulate and analyze vector data efficiently.

# Input types
## Required
- op
    - The *op* parameter determines the type of binary operation to perform on the input vectors. It is critical because it selects the mathematical function applied to the vectors, directly affecting the node’s output.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The *a* parameter represents the first four‑dimensional vector (Vec4) in the binary operation. It is important as one of the operands, directly influencing the final result.
    - Comfy dtype: Vec4
    - Python dtype: Tuple[float, float, float, float]
- b
    - The *b* parameter represents the second four‑dimensional vector (Vec4) participating in the binary operation. It is important as the second operand, affecting the node’s output.
    - Comfy dtype: Vec4
    - Python dtype: Tuple[float, float, float, float]

# Output types
- result
    - The *result* parameter stores the outcome of the binary operation between vectors *a* and *b*. It is important because it represents the final vector computed after applying the operation.
    - Comfy dtype: Vec4
    - Python dtype: Tuple[float, float, float, float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
