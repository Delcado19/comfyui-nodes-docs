# Documentation
- Class name: FloatBinaryOperation
- Category: math/float
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The FloatBinaryOperation node is designed to perform binary operations on floating-point numbers. It takes two inputs 'a' and 'b', applies the specified operation 'op' to produce a single floating-point result. This node is essential for mathematical calculations that require combining two numbers through binary operations.

# Input types
## Required
- op
    - The parameter 'op' specifies the binary operation to be performed on inputs 'a' and 'b'. It is crucial because it determines the mathematical function to be applied to the inputs, directly affecting the node's output.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' is the first operand in the binary operation. It is an important input component because, when combined with the second operand 'b', it contributes to the final result of the operation.
    - Comfy dtype: float
    - Python dtype: float
- b
    - The parameter 'b' is the second operand in the binary operation. It plays a significant role in the calculation because it is combined with the first operand 'a' to produce the final result.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- result
    - The parameter 'result' represents the outcome of applying the binary operation 'op' to inputs 'a' and 'b'. It is a single floating-point number that encompasses the combined effect of both operands.
    - Comfy dtype: float
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
