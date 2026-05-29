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
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
