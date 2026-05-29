
# Documentation
- Class name: Switch conditioning [Crystools]
- Category: crystools 🪛/Switch
- Output node: False
- Repo Ref: https://github.com/crystian/ComfyUI-Crystools

This node provides a mechanism to switch between two conditional inputs based on a boolean value, effectively allowing conditional logic to be applied to the flow of conditional data.

# Input types
## Required
- on_true
    - The condition used when the boolean value is true. It determines the data flow when the condition is met.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple
- on_false
    - The condition used when the boolean value is false. It serves as the alternative data flow when the condition is not met.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple
- boolean
    - A boolean value used to determine which condition (on_true or on_false) should be used.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- conditioning
    - The selected condition output determined by the boolean input value.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/crystian/ComfyUI-Crystools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
