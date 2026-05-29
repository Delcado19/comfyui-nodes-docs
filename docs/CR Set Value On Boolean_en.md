# Documentation
- Class name: CR_SetValueOnBoolean
- Category: Comfyroll/Utils/Conditional
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SetValueOnBoolean node is designed to assign a value based on the evaluation of a boolean condition. It provides a simple mechanism to return one of two values depending on whether the input boolean is true or false, thereby facilitating conditional logic within a workflow.

# Input types
## Required
- boolean
    - The "boolean" parameter is critical as it determines the flow of the node's logic. It decides which value to return based on its truth value.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- value_if_true
    - The "value_if_true" parameter defines the value returned when the "boolean" parameter is evaluated to true. It plays a key role in the node's conditional output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- value_if_false
    - The "value_if_false" parameter sets the value returned when the "boolean" parameter is evaluated to false. It is essential for the node's alternative conditional output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- INT
    - The "INT" output represents the integer value corresponding to either the "value_if_true" or "value_if_false" parameter based on the boolean condition.
    - Comfy dtype: INT
    - Python dtype: int
- FLOAT
    - The "FLOAT" output provides a floating-point representation of the returned value based on the boolean condition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The "show_help" output provides a URL link to the node's documentation for further guidance and information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
