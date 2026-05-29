# Documentation
- Class name: BreakoutVec3
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The BreakoutVec3 node is designed to decompose a three-dimensional vector into its individual components. It plays a fundamental role in mathematical operations that require further processing or analysis, where the separation of vector elements is necessary.

# Input types
## Required
- a
    - The 'a' parameter is a three-dimensional vector that the node operates on. It is crucial to the node's functionality as it is the input vector that will be decomposed into its components.
    - Comfy dtype: VEC3
    - Python dtype: Vec3

# Output types
- result
    - The output of the BreakoutVec3 node is a tuple containing the three independent components of the input vector. Each component is a float representing one dimension of the vector.
    - Comfy dtype: FLOAT
    - Python dtype: Tuple[float, float, float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
