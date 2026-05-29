# Documentation
- Class name: Vec3UnaryOperation
- Category: math/vec3
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec3UnaryOperation class is designed to perform unary operations on 3D vectors. It encapsulates the logic for various vector operations, providing a flexible interface for mathematical operations in three-dimensional space.

# Input types
## Required
- op
- The parameter 'op' specifies the unary operation to perform on the vector. It is essential because it determines the type of mathematical function applied to each component of the vector.
    - Comfy dtype: str
    - Python dtype: str
- a
- The parameter 'a' represents the 3D vector on which the unary operation will be executed. It is a required input because it is the object of the mathematical operation.
    - Comfy dtype: Vec3
    - Python dtype: Tuple[float, float, float]

# Output types
- result
- The output 'result' is the transformed 3D vector after applying the specified unary operation. It is important because it represents the outcome of the mathematical process.
    - Comfy dtype: VEC3
    - Python dtype: Tuple[float, float, float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
