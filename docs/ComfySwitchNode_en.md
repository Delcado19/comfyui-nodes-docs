# Documentation
- Class name: ComfySwitchNode
- Display name: Switch
- Category: logic
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Routes one of two inputs to a single output based on a boolean condition. When the switch is true, the on_true input is passed through; when false, the on_false input is passed through.

# Input types
## Required
- switch
    - Boolean condition that selects which input is forwarded to the output.
    - Comfy dtype: BOOLEAN
- on_false
    - Value passed to output when the switch is false.
    - Comfy dtype: COMFY_MATCHTYPE_V3
- on_true
    - Value passed to output when the switch is true.
    - Comfy dtype: COMFY_MATCHTYPE_V3

# Output types
- output
    - The value from either on_true or on_false, depending on the switch state.
    - Comfy dtype: COMFY_MATCHTYPE_V3

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
