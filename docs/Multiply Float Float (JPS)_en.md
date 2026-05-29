
# Documentation
- Class name: Multiply Float Float (JPS)
- Category: JPS Nodes/Math
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Multiply Float Float (JPS) node performs multiplication of two floating-point numbers, and returns the integer and floating-point representation of the result. This node is intended to facilitate mathematical operations in broader computational workflows, emphasizing flexibility in handling numerical data.

# Input types
## Required
- float_a
    - Represents the first floating-point number to be multiplied. Its value affects the multiplication operation and its result output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- float_b
    - Represents the second floating-point number to be multiplied. Together with float_a, it determines the result of the multiplication process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- int_multiply
    - The result of the multiplication operation is converted to an integer, providing the integer representation of the product.
    - Comfy dtype: INT
    - Python dtype: int
- float_multiply
    - The result of the multiplication operation is returned as a floating-point number, providing the precise representation of the product.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
