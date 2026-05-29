# Documentation
- Class name: CR_ClampValue
- Category: Comfyroll/Utils/Other
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ClampValue node is designed to ensure that a given value stays within a specified range. It operates by clamping the input value 'a' between 'range_min' and 'range_max', ensuring the output always falls within user-defined acceptable limits. This functionality is critical for maintaining numerical stability and preventing extreme values that could cause errors or unexpected behavior in subsequent operations.

# Input types
## Required
- a
    - The parameter 'a' represents the value to be clamped. This is a key input, as the node's primary function is to ensure this value adheres to the specified range limits. The node's operation is directly influenced by the magnitude of 'a', making it the central component in the clamping process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- range_min
    - The parameter 'range_min' defines the lower bound of the acceptable range for the input value 'a'. It plays a crucial role in the clamping operation, as it sets the minimum limit that 'a' can reach. This parameter is essential for preventing the output from falling below the desired threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float
- range_max
    - The parameter 'range_max' sets the upper limit for the input value 'a' in the clamping operation. It is critical because it determines the maximum value 'a' can take, preventing the output from exceeding the set limits and controlling the node's result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- a
    - The output 'a' is the clamped value, adjusted to fall within the specified range. It is the direct result of the node's clamping function, representing the value of 'a' after being clamped by 'range_min' and 'range_max'. This output is important as it is the primary outcome of the node's operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The output 'show_help' provides a URL link to documentation for further help or information regarding node usage. It serves as a useful resource for users who may need additional guidance to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ClampValue:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'a': ('FLOAT', {'default': 1, 'min': -18446744073709551615, 'max': 18446744073709551615}), 'range_min': ('FLOAT', {'default': 1, 'min': -18446744073709551615, 'max': 18446744073709551615}), 'range_max': ('FLOAT', {'default': 1, 'min': -18446744073709551615, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('FLOAT', 'STRING')
    RETURN_NAMES = ('a', 'show_help')
    FUNCTION = 'clamp_value'
    CATEGORY = icons.get('Comfyroll/Utils/Other')

    def clamp_value(self, a, range_min, range_max):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-clamp-value'
        a = max(range_min, min(a, range_max))
        return (a, show_help)
```