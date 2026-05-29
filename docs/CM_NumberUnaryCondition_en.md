# Documentation
- Class name: NumberUnaryCondition
- Category: math/number
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The `NumberUnaryCondition` node evaluates a single operand against a set of unary conditions to determine the validity of the condition in a mathematical context. It serves as a fundamental building block for more complex numerical operations, ensuring that numerical conditions are satisfied before proceeding with further computation.

# Input types
## Required
- op
    - The parameter 'op' defines the unary condition to be applied to the operand 'a'. It is critical because it determines the type of mathematical condition check to be performed, directly affecting the node's output.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' represents the operand to which the unary condition will be applied. Its value is critical because it is the object of the condition check, determining the node's evaluation result.
    - Comfy dtype: number
    - Python dtype: Union[int, float]

# Output types
- result
    - The output 'result' represents the result of the unary condition check. It is a boolean value indicating whether the operand 'a' satisfies the condition defined by 'op'.
    - Comfy dtype: bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
