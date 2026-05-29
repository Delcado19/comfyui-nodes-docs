# Documentation
- Class name: IntBinaryCondition
- Category: math/int
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The IntBinaryCondition node evaluates a binary condition between two integer values. It works by applying the specified operation to the inputs and determining the truth value of the resulting condition. This node is essential in decision processes in mathematical calculations where the outcome depends on the relationship between two integers.

# Input types
## Required
- op
    - The parameter 'op' defines the binary operation to perform on the integer inputs. It is crucial because it determines the nature of the condition being evaluated. The choice of operation directly affects the node's decision-making capability in a mathematical context.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' represents the first integer in the binary condition. Its value matters because it contributes to the result of the condition evaluation. Integer 'a' plays a key role in the node's decision process.
    - Comfy dtype: int
    - Python dtype: int
- b
    - The parameter 'b' represents the second integer involved in the binary condition. It is essential because, together with 'a', it determines the final outcome of the condition. Integer 'b' is a critical factor in the node's evaluation process.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- result
    - The 'result' output indicates the boolean result of the node's evaluated binary condition. It is important because it represents the truth value of the condition, which can be used for further processing or decision-making in mathematical or logical workflows.
    - Comfy dtype: bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
