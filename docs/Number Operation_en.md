# Documentation
- Class name: WAS_Number_Operation
- Category: WAS Suite/Number/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Number_Operation node is designed to perform various mathematical operations on two input numbers. It supports operations such as addition, subtraction, division, and more, providing a versatile tool for numerical computation.

# Input types
## Required
- number_a
    - The first operand of the mathematical operation, which can be an integer or a float. It plays a critical role in determining the result of the operation.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]
- number_b
    - The second operand of the mathematical operation, also an integer or a float. It is essential to the computation and influences the final result.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]
## Optional
- operation
    - Specifies the type of mathematical operation to be performed. The choice of operation directly affects the computation and the type of result produced.
    - Comfy dtype: COMBO['addition', 'subtraction', 'division', 'floor division', 'multiplication', 'exponentiation', 'modulus', 'greater-than', 'greater-than or equals', 'less-than', 'less-than or equals', 'equals', 'does not equal']
    - Python dtype: str

# Output types
- result
    - The result of the mathematical operation, which can be a number, a float value, or an integer, depending on the operation performed.
    - Comfy dtype: COMBO[NUMBER, FLOAT, INT]
    - Python dtype: Union[int, float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
