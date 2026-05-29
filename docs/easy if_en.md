# Documentation
- Class name: If
- Category: EasyUse/Logic/Math
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

If node acts as a conditional execution unit, evaluates the input condition, and decides which of the two provided branches to take, thus building control flow in the computational graph.

# Input types
## Required
- any
    - The ‘any’ input is a conditional expression that determines the flow of the If node. It is crucial for determining which output branch will be executed.
    - Comfy dtype: *
    - Python dtype: Any
- if
    - The ‘if’ input represents the action to be executed when the ‘any’ condition is met. It is an important part of the node's functionality as it defines the positive outcome.
    - Comfy dtype: *
    - Python dtype: Any
- else
    - The ‘else’ input defines the alternative action to be executed when the ‘any’ condition is not met. It is essential for providing complete conditional logic within the node.
    - Comfy dtype: *
    - Python dtype: Any

# Output types
- ?
    - The output of the If node is the result from either the ‘if’ or ‘else’ input based on the evaluation of the ‘any’ condition. It represents the final result of the conditional execution.
    - Comfy dtype: *
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
