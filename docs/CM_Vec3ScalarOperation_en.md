# Documentation
- Class name: Vec3ScalarOperation
- Category: math/vec3
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec3ScalarOperation node performs various scalar operations on a three‑dimensional vector. It applies the specified operation to each element of the vector with a given scalar value. This node is essential for mathematical calculations involving vectors in 3D space, providing a simple and direct way to manipulate vector components.

# Input types
## Required
- op
- Parameter `op` defines the specific scalar operation to execute on the vector. It is critical because it determines the type of mathematical operation applied to the vector's components. The choice of operation directly influences the node's result.
    - Comfy dtype: str
    - Python dtype: str
- a
- Parameter `a` represents the three‑dimensional vector to which the operation will be applied. As the core input, it is vital to the node's function, and the node's output depends on the values within this vector.
    - Comfy dtype: Vec3
    - Python dtype: Tuple[float, float, float]
- b
- Parameter `b` is the scalar value that interacts with vector `a` during the operation. Its role is essential because it provides the numeric value used together with each element of the vector for the specified operation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result
- Output `result` is the three‑dimensional vector after the specified scalar operation has been performed. It contains the node's computed result, reflecting the changes made to the original vector `a` by the operation.
    - Comfy dtype: VEC3
    - Python dtype: Tuple[float, float, float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
