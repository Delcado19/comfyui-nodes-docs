# Documentation
- Class name: IntBinaryOperation
- Category: math/int
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The IntBinaryOperation node is designed to perform various integer binary operations. It takes two integers and a string representing the operation to perform, and returns the result of the operation. This node is essential for mathematical calculations involving integers, providing a straightforward way to perform basic arithmetic operations programmatically.

# Input types
## Required
- op
    - The parameter 'op' is a string that specifies the binary operation to perform on the two integers. It is very important because it determines the type of arithmetic operation to be performed. The choice of operation directly affects the result executed by the node.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' represents the first operand in the binary operation. As an integral part of the operation, it plays an important role in mathematical calculations. The value of 'a' directly affects the final result of the operation.
    - Comfy dtype: int
    - Python dtype: int
- b
    - The parameter 'b' represents the second operand in the binary operation. It is essential for completing the operation and obtaining the correct result. The value of 'b', like 'a', is equally important in influencing the calculation result.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- result
    - The parameter 'result' is the result of the binary operation performed by the node. It contains the final value calculated based on the input operands and the specified operation, and is the primary output of the node.
    - Comfy dtype: int
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
