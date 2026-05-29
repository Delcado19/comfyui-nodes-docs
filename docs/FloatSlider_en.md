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
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
