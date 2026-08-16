# Documentation
- Class name: FL_Switch_Big
- Category: 🏵️Fill Nodes/Utility
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

FL_Switch_Big allows you to choose between multiple processing paths based on a switch condition.
    The node only evaluates the path that is selected by the switch condition.
    
    - The switch_condition is compared against each case value
    - If a match is found, the corresponding input is evaluated and returned
    - If no match is found, input_default is evaluated and returned
    - Inputs that don't match the condition are not evaluated
    
    This node is useful for creating conditional workflows with multiple branches.

# Input types
## Required
- switch_condition
    - The switch_condition input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- case_1
    - The case_1 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- case_2
    - The case_2 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- case_3
    - The case_3 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- case_4
    - The case_4 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- case_5
    - The case_5 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- input_default
    - The input_default input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
## Optional
- input_1
    - The input_1 input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- input_2
    - The input_2 input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- input_3
    - The input_3 input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- input_4
    - The input_4 input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- input_5
    - The input_5 input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
