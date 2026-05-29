# Documentation
- Class name: CR_SetValueOnBinary
- Category: Comfyroll/Utils/Conditional
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SetValueOnBinary node is designed to conditionally assign a value based on the state of a binary input. It works in a straightforward manner: if the binary input is true (1), it returns the value specified for the true case; if false (0), it returns the value for the false case. This functionality is essential for implementing conditional logic in workflows, allowing simple manipulation of data flow based on binary conditions.

# Input types
## Required
- binary
    - The 'binary' parameter is a critical input that determines the node's behavior. It serves as the condition based on which the node decides which value to return. The binary input must be an integer, either 0 or 1, and no other values are accepted, ensuring a clear and unambiguous conditional check.
    - Comfy dtype: INT
    - Python dtype: int
- value_if_1
    - The 'value_if_1' parameter defines the value to return when the binary input is true. It is a floating-point number that can represent a wide range of values, allowing flexibility in conditional assignment based on binary conditions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- value_if_0
    - The 'value_if_0' parameter sets the value to return when the binary input is false. Like 'value_if_1', it is also a floating-point number, ensuring type consistency of the values the node can return regardless of the binary condition.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- INT
    - The 'INT' output provides an integer representation of the binary input value, serving as a direct and unambiguous reflection of the conditional result.
    - Comfy dtype: INT
    - Python dtype: int
- FLOAT
    - The 'FLOAT' output returns the value associated with the binary input condition. It is the value used downstream in the workflow based on whether the binary input is true or false.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The 'show_help' output provides a URL link to the node's documentation page, allowing users to easily access more detailed information on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SetValueOnBinary:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'binary': ('INT', {'default': 1, 'min': 0, 'max': 1, 'forceInput': True}), 'value_if_1': ('FLOAT', {'default': 1, 'min': -18446744073709551615, 'max': 18446744073709551615}), 'value_if_0': ('FLOAT', {'default': 0, 'min': -18446744073709551615, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('INT', 'FLOAT', 'STRING')
    RETURN_NAMES = ('INT', 'FLOAT', 'show_help')
    FUNCTION = 'set_value'
    CATEGORY = icons.get('Comfyroll/Utils/Conditional')

    def set_value(self, binary, value_if_1, value_if_0):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-set-value-on-boolean'
        if binary == 1:
            return (int(value_if_1), value_if_1, show_help)
        else:
            return (int(value_if_0), value_if_0, show_help)
```