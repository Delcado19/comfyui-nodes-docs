# Documentation
- Class name: Vec4BinaryCondition
- Category: math/vec4
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec4BinaryCondition node performs a binary operation on a four-component vector. It applies the specified operation to two input vectors, producing a Boolean result that indicates the condition's validity. This node plays a key role in vector analysis and comparison in mathematics.

# Input types
## Required
- op
- The 'op' parameter defines the binary condition to apply to the input vectors. It is crucial for determining the nature of the comparison or operation performed by the node, directly affecting the outcome.
    - Comfy dtype: str
    - Python dtype: str
- a
- The 'a' parameter represents the first vector in the binary operation. As a primary input, it plays an important role in the node's execution, influencing the final Boolean result according to the condition specified by 'op'.
    - Comfy dtype: Vec4
    - Python dtype: Vec4
- b
- The 'b' parameter represents the second vector involved in the binary operation. It is essential for the node's computation of the comparison or operation with 'a', and its value is critical to the node's output.
    - Comfy dtype: Vec4
    - Python dtype: Vec4

# Output types
- result
- The 'result' output is a Boolean value representing the outcome of the binary condition applied to the input vectors. It indicates whether the condition specified by the 'op' parameter holds for the given vectors.
    - Comfy dtype: BOOL
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
