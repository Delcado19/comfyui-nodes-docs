
# Documentation
- Class name: Evaluate Integers
- Category: Efficiency Nodes/Simple Eval
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Evaluate Integers node is used to dynamically evaluate mathematical expressions involving integers, using variables 'a', 'b', and 'c' as inputs. It supports basic arithmetic operations and returns results in multiple formats (integer, float, and string), and can optionally print the result to the console.

# Input types
## Required
- python_expression
    - Specify the mathematical expression to evaluate. Can contain variables 'a', 'b', and 'c', and supports basic arithmetic operations.
    - Comfy dtype: STRING
    - Python dtype: str
- print_to_console
    - Control whether to print the evaluation result to the console. Useful for debugging or direct output visualization.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- a
    - Represents the first integer variable that can be used in python_expression.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - Represents the second integer variable that can be used in python_expression.
    - Comfy dtype: INT
    - Python dtype: int
- c
    - Represents the third integer variable that can be used in python_expression.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - The evaluation result of python_expression, presented as an integer.
    - Comfy dtype: INT
    - Python dtype: int
- float
    - The evaluation result of python_expression, presented as a floating-point number.
    - Comfy dtype: FLOAT
    - Python dtype: float
- string
    - The evaluation result of python_expression, presented as a string.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [EmptyLatentImage](../../Comfy/Nodes/EmptyLatentImage.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
