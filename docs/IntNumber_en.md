# Documentation
- Class name: IntNumber
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node classifies and limits the numeric input, ensuring that the output falls within the defined range and increment.

# Input types
## Required
- number
    - The central input evaluated by the node, ensuring it falls within the specified minimum and maximum bounds.
    - Comfy dtype: INT
    - Python dtype: int
- min_value
    - The lower limit used by the node, which restricts the input number to this lower bound if it falls below the threshold.
    - Comfy dtype: INT
    - Python dtype: int
- max_value
    - The upper limit used by the node, which restricts the input number to this upper bound if it exceeds the limit.
    - Comfy dtype: INT
    - Python dtype: int
- step
    - The increment value considered by the node when adjusting the input number within the specified range.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- number
    - The constrained and adjusted output number, which falls within the defined range and follows the specified increment step.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class IntNumber:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'number': ('INT', {'default': 0, 'min': -1, 'max': 18446744073709551615, 'step': 1, 'display': 'number'}), 'min_value': ('INT', {'default': 0, 'min': -18446744073709551615, 'max': 18446744073709551615, 'step': 1, 'display': 'number'}), 'max_value': ('INT', {'default': 1, 'min': -18446744073709551615, 'max': 18446744073709551615, 'step': 1, 'display': 'number'}), 'step': ('INT', {'default': 1, 'min': -18446744073709551615, 'max': 18446744073709551615, 'step': 1, 'display': 'number'})}}
    RETURN_TYPES = ('INT',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False,)

    def run(self, number, min_value, max_value, step):
        if number < min_value:
            number = min_value
        elif number > max_value:
            number = max_value
        return (number,)
```