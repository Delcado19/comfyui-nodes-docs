# Documentation
- Class name: NumberUnaryOperation
- Category: math/number
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The NumberUnaryOperation node is designed to perform various unary operations on a numerical input. It accepts a single operation identifier and a number, applying the corresponding mathematical function to produce a result. This node plays a key role in simplifying mathematical calculations in workflows, providing a concise and efficient way to process numerical data.

# Input types
## Required
- op
    - The parameter 'op' is a string specifying the unary operation to perform. It is crucial for determining the mathematical function to apply to the input number. The choice of operation directly affects the result produced by the node.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The parameter 'a' represents the numerical value on which the unary operation will be applied. It is an essential part of the node's functionality, as the result of the operation depends on this input value. This parameter ensures the node can handle a wide range of numerical data types.
    - Comfy dtype: number
    - Python dtype: Union[int, float]

# Output types
- result
    - The 'result' output parameter represents the result of applying the unary operation to the input number. It contains the final numerical value obtained after the operation is executed, marking the node's contribution to the data processing sequence.
    - Comfy dtype: float
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
