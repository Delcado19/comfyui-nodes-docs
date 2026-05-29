# Documentation
- Class name: LimitNumber
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node clamps a given number within a specified range, ensuring it does not exceed the defined minimum and maximum boundaries. It is primarily used to maintain numeric integrity and prevent invalid values from affecting downstream processes.

# Input types
## Required
- number
    - The input number to be clamped within the specified range. This is a critical parameter as it is the core value the node operates on to ensure it stays within acceptable bounds.
    - Comfy dtype: any_type
    - Python dtype: Union[int, float]
- min_value
    - The lower bound of the acceptable range for the input number. It plays a key role in setting the minimum limit that the input value is not allowed to fall below.
    - Comfy dtype: INT
    - Python dtype: int
- max_value
    - The upper bound of the acceptable range for the input number. It is essential in defining the maximum limit that the input value must not exceed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- number
    - The output number that has been clamped within the specified range. It is the result of the node's operation, ensuring the value falls within the acceptable boundaries defined by the input parameters.
    - Comfy dtype: any_type
    - Python dtype: Union[int, float]

# Usage tips
- Infra type: CPU

# Source code
```
class LimitNumber:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'number': (any_type,), 'min_value': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615, 'step': 1, 'display': 'number'}), 'max_value': ('INT', {'default': 1, 'min': 1, 'max': 18446744073709551615, 'step': 1, 'display': 'number'})}}
    RETURN_TYPES = (any_type,)
    RETURN_NAMES = ('number',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False,)

    def run(self, number, min_value, max_value):
        nn = number
        if isinstance(number, int):
            min_value = int(min_value)
            max_value = int(max_value)
        if isinstance(number, float):
            min_value = float(min_value)
            max_value = float(max_value)
        if number < min_value:
            nn = min_value
        elif number > max_value:
            nn = max_value
        return (nn,)
```