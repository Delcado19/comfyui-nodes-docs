# Documentation
- Class name: NumberBinaryCondition
- Category: math/float
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

`NumberBinaryCondition` node evaluates a binary condition between two numeric inputs. It performs a user-specified comparison operation and returns a boolean result indicating the outcome of the condition.

# Input types
## Required
- op
    - Parameter 'op' defines the binary condition to evaluate. It is critical as it determines the type of comparison performed between the two numbers.
    - Comfy dtype: str
    - Python dtype: str
- a
    - Parameter 'a' represents the first number in the binary condition. It plays a key role as one operand in the comparison operation.
    - Comfy dtype: number
    - Python dtype: Union[int, float]
- b
    - Parameter 'b' represents the second number in the binary condition. It is critical as the other operand in the comparison operation.
    - Comfy dtype: number
    - Python dtype: Union[int, float]

# Output types
- result
    - Output 'result' provides the boolean result of the binary condition evaluation, indicating whether the condition holds or not.
    - Comfy dtype: bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
