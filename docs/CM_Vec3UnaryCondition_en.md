# Documentation
- Class name: Vec3UnaryCondition
- Category: math/vec3
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The Vec3UnaryCondition node is designed to perform vectorized unary operations on a three-dimensional vector. It applies a specified condition to each element of the vector and returns a Boolean result indicating the outcome of the condition. This node is essential for mathematical operations requiring conditional logic on vector elements, such as filtering or thresholding.

# Input types
## Required
- op
    - The parameter 'op' defines the unary condition to be applied to each element of the vector. It is a key in the set of predefined vector unary conditions. This parameter is crucial as it determines the specific condition that the node will evaluate.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' represents the three-dimensional vector to which the unary condition will be applied. This is a critical input because the node's operation directly depends on the values within this vector. The node processes each element according to the specified condition to produce a Boolean result.
    - Comfy dtype: Vec3
    - Python dtype: Vec3

# Output types
- result
    - The output 'result' is a Boolean value that indicates the result of applying the unary condition to the input vector. It shows whether the condition holds for each element in the vector, providing a clear and concise evaluation of the vector's state based on the specified condition.
    - Comfy dtype: BOOL
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
