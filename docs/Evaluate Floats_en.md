
# Documentation
- Class name: Evaluate Floats
- Category: Efficiency Nodes/Simple Eval
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Evaluate Floats node is used to evaluate mathematical expressions involving floating-point numbers and convert the results into multiple formats (integer, float, and string) for further use. It supports dynamic input via variables and optionally prints the evaluation result to the console for debugging or informational purposes.

# Input types
## Required
- python_expression
    - The mathematical expression to evaluate, allowing dynamic calculations involving floating-point numbers. It plays a key role in determining the node's output by specifying the operation to perform.
    - Comfy dtype: STRING
    - Python dtype: str
- print_to_console
    - A flag indicating whether the evaluation result should be printed to the console, aiding debugging or providing immediate visual feedback of the operation's result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- a
    - Optional variable 'a', usable in python_expression for dynamic evaluation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - Optional variable 'b', usable in python_expression for dynamic evaluation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- c
    - Optional variable 'c', usable in python_expression for dynamic evaluation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- int
    - Integer representation of the evaluated expression result.
    - Comfy dtype: INT
    - Python dtype: int
- float
    - Float representation of the evaluated expression result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- string
    - String representation of the evaluated expression result.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
