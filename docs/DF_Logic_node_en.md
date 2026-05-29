
# Documentation
- Class name: DF_Logic_node
- Category: Derfuu_Nodes/Functions
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LogicNode node performs basic logical operations, such as comparison operations (greater than, less than, equal to) and Boolean operations (AND, OR, XOR). It supports decision-making processes abstractly by evaluating conditions and determining results based on the specified logic.

# Input types
## Required
- Operation
    - Specifies the logical operation to be performed, including comparison and Boolean operations, determining the logic applied between CompareValue_A and CompareValue_B.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- CompareValue_A
    - The primary value used for comparison or logical operations.
    - Comfy dtype: *
    - Python dtype: object
## Optional
- CompareValue_B
    - The secondary value used for comparison or logical operations, used together with CompareValue_A to evaluate the specified Operation.
    - Comfy dtype: *
    - Python dtype: object
- OnTrue
    - The value returned when the logical operation evaluates to true.
    - Comfy dtype: *
    - Python dtype: object
- OnFalse
    - The value returned when the logical operation evaluates to false.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- *
    - The result of the logical operation, which can be either the OnTrue or OnFalse value, depending on the outcome of the operation.
    - Comfy dtype: *
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
