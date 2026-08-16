# Documentation
- Class name: FL_Switch
- Category: 🏵️Fill Nodes/Utility
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

FL_Switch allows you to choose between two processing paths based on a switch value.
    The node only evaluates the path that is selected by the switch value.
    
    - If switch = False: on_false is evaluated and returned as output, on_true is not evaluated
    - If switch = True: on_true is evaluated and returned as output, on_false is not evaluated
    
    This node is useful for creating conditional workflows where you want to process data differently based on certain conditions,
    and you only want the selected path to execute.

# Input types
## Required
- switch
    - The switch input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- on_false
    - The on_false input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- on_true
    - The on_true input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- *
    - The * output is produced by this node.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
