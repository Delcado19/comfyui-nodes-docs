# Documentation
- Class name: NumberBinaryOperation
- Category: math/number
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

NumberBinaryOperation node performs binary operations on numeric inputs. It encapsulates various arithmetic operations that can be applied between two numbers, facilitating complex calculations through a simplified interface.

# Input types
## Required
- op
- Parameter 'op' determines the specific binary operation to execute. It is essential because it defines the mathematical function the node will perform, affecting the calculation result.
    - Comfy dtype: str
    - Python dtype: str
- a
- Parameter 'a' represents the first operand in the binary operation. It is essential because it provides half of the input required for the arithmetic calculation.
    - Comfy dtype: number
    - Python dtype: Union[int, float]
- b
- Parameter 'b' represents the second operand in the binary operation. It is essential because it completes the input set needed for the arithmetic process.
    - Comfy dtype: number
    - Python dtype: Union[int, float]

# Output types
- result
- Output 'result' provides the outcome of the binary operation performed on inputs 'a' and 'b'. It is important because it represents the final computed value derived from the specified operation.
    - Comfy dtype: float
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
