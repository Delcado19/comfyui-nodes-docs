# Documentation
- Class name: BoolBinaryOperation
- Category: math/bool
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The BoolBinaryOperation node performs binary operations on boolean values. It takes two boolean inputs and a string indicating the operation to perform, and returns the result. This node is essential for logical calculations and decision processes in the system.

# Input types
## Required
- op
- The 'op' parameter is a string that specifies the binary operation to execute on the boolean inputs. It is crucial for determining the logic and final outcome of the operation.
    - Comfy dtype: str
    - Python dtype: str
- a
- The 'a' parameter is the first operand in the binary operation. It is a boolean value that plays an important role in the computation.
    - Comfy dtype: bool
    - Python dtype: bool
- b
- The 'b' parameter is the second operand in the binary operation. It is also a boolean value that contributes to the computation result.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- result
- The result of the boolean binary operation is a single boolean value representing the outcome of the operation.
    - Comfy dtype: bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
