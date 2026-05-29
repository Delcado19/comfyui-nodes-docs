
# Documentation
- Class name: Switch any [Crystools]
- Category: crystools 🪛/Switch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node provides a mechanism for switching between two values based on a boolean condition. It abstracts conditional logic, offering a concise and clear way to select between two possible outcomes.

# Input types
## Required
- on_true
    - The value returned when the boolean condition evaluates to true. It plays a key role in determining the node output based on the condition.
    - Comfy dtype: *
    - Python dtype: any
- on_false
    - The value returned when the boolean condition evaluates to false. This parameter ensures an alternative result is available, making the switching operation complete.
    - Comfy dtype: *
    - Python dtype: any
- boolean
    - The boolean condition that determines which value ('on_true' or 'on_false') is returned. It is the core of the switching functionality, enabling dynamic decision-making.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- *
    - The output depends on the evaluation result of the boolean condition, and can be either 'on_true' or 'on_false'.
    - Comfy dtype: *
    - Python dtype: unknown


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
