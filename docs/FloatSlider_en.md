# Documentation
- Class name: FloatSlider
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The FloatSlider node aims to normalize a given number to a specified range, ensuring it falls between the minimum and maximum values. It scales the input number to a standard scale, providing a normalized value that can be used in various computational contexts where relative position is critical.

# Input types
## Required
- number
    - The 'number' parameter represents the value to be normalized within the specified range. It is critical as it directly affects the node's output, determining the position of the normalized number on the standard scale.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_value
    - The 'min_value' parameter defines the lower bound of the normalized number's range. It plays an important role in ensuring the output value is within the desired limits.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_value
    - The 'max_value' parameter sets the upper bound of the normalized range. It is critical in scaling the input number to ensure it does not exceed the specified maximum value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- step
    - The 'step' parameter is used to control the granularity of number normalization. It affects how the number is adjusted within the range, influencing the precision of the normalized value.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- scaled_number
    - The 'scaled_number' output represents the normalized value of the input number, scaled to fit within the specified range. It is important as it provides a standard measure that can be used for further analysis or processing.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class FloatSlider:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'number': ('FLOAT', {'default': 0, 'min': 0, 'max': 18446744073709551615, 'step': 0.001, 'display': 'slider'}), 'min_value': ('FLOAT', {'default': 0, 'min': -18446744073709551615, 'max': 18446744073709551615, 'step': 0.001, 'display': 'number'}), 'max_value': ('FLOAT', {'default': 1, 'min': -18446744073709551615, 'max': 18446744073709551615, 'step': 0.001, 'display': 'number'}), 'step': ('FLOAT', {'default': 0.001, 'min': -18446744073709551615, 'max': 18446744073709551615, 'step': 0.001, 'display': 'number'})}}
    RETURN_TYPES = ('FLOAT',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False,)

    def run(self, number, min_value, max_value, step):
        if number < min_value:
            number = min_value
        elif number > max_value:
            number = max_value
        scaled_number = (number - min_value) / (max_value - min_value)
        return (scaled_number,)
```