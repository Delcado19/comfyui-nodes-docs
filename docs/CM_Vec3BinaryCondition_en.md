# Documentation
- Class name: Vec3BinaryCondition
- Category: math/vec3
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

Vec3BinaryCondition node performs a binary operation on two 3D vectors. It evaluates the condition specified by the 'op' parameter and returns a boolean indicating whether the condition holds for vectors 'a' and 'b'.

# Input types
## Required
- op
    - The 'op' parameter defines the type of binary condition to evaluate. It is crucial because it determines the specific operation performed on the input vectors.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The 'a' parameter represents the first 3D vector in the binary operation. Its value significantly affects the outcome of the condition evaluation.
    - Comfy dtype: Vec3
    - Python dtype: numpy.ndarray
- b
    - The 'b' parameter represents the second 3D vector in the binary operation. It works with 'a' to determine the condition check result.
    - Comfy dtype: Vec3
    - Python dtype: numpy.ndarray

# Output types
- result
    - The 'result' output is a boolean that indicates whether the binary condition specified by 'op' is satisfied by vectors 'a' and 'b'.
    - Comfy dtype: BOOL
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
