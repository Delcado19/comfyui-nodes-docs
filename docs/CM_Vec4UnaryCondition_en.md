# Documentation
- Class name: Vec4UnaryCondition
- Category: math/vec4
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec4UnaryCondition node performs a unary operation on a four‑dimensional vector. It evaluates a condition on each component of the vector and returns a single Boolean result indicating whether all components satisfy the condition. This node is essential for vector‑based mathematical operations that require conditional logic.

# Input types
## Required
- op
- Parameter `op` defines the unary condition applied to each component of the vector. It is crucial because it determines the nature of the condition check performed by the node.
    - Comfy dtype: str
    - Python dtype: str
- a
- Parameter `a` represents the four‑dimensional vector whose components will be evaluated by the unary condition. It is a key input because the node’s operation depends entirely on the values within this vector.
    - Comfy dtype: Vec4
    - Python dtype: Vec4

# Output types
- result
- Output `result` is a Boolean indicating whether the unary condition applied to all components of the input vector evaluates to true.
    - Comfy dtype: BOOL
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
