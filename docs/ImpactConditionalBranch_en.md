# Documentation
- Class name: ImpactConditionalBranch
- Category: ImpactPack/Logic
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactConditionalBranch node is intended to execute logic conditionally based on a provided boolean condition. It allows selection of one of two values according to the truth of the condition, thereby enabling control flow in the program.

# Input types
## Required
- cond
    - The 'cond' parameter is a boolean that determines the direction of execution within the 'doit' method. It is crucial because it decides whether to return 'tt_value' or 'ff_value'.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tt_value
    - The 'tt_value' parameter represents the value to return if the 'cond' parameter evaluates to true. It plays an important role in the node's conditional logic.
    - Comfy dtype: any_typ
    - Python dtype: Any
- ff_value
    - The 'ff_value' parameter is the value returned when the 'cond' parameter is false. It is essential for defining the alternative outcome in the node's conditional operation.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Output types
- result
    - The 'result' parameter is the outcome of the 'doit' method, which will be either 'tt_value' or 'ff_value' based on the evaluation of the 'cond' parameter.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
