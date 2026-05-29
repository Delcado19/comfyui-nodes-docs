# Documentation
- Class name: RangeInt
- Category: EasyUse/Logic/Type
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The RangeInt class encapsulates the logic for generating a range of integers based on user-defined parameters, facilitating the creation of numerical ranges for various applications.

# Input types
## Required
- range_mode
    - The range_mode parameter determines the method of range generation, whether by a fixed 'step' size or a specified 'num_steps'. This is critical for determining the structure and distribution of the output range.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- start
    - The start parameter defines the initial value of the range. It is critical as it sets the starting point of the generated integer sequence.
    - Comfy dtype: INT
    - Python dtype: int
- stop
    - The stop parameter specifies the upper limit of the range. It works in conjunction with the start parameter to determine the extent of the integer sequence.
    - Comfy dtype: INT
    - Python dtype: int
- step
    - The step parameter sets the increment value between each element in the range. It significantly affects the progression and spacing of the generated sequence.
    - Comfy dtype: INT
    - Python dtype: int
- num_steps
    - The num_steps parameter defines the desired number of steps within the range. It is important for determining the granularity of the output sequence.
    - Comfy dtype: INT
    - Python dtype: int
- end_mode
    - The end_mode parameter specifies whether the stop value is included or excluded in the range. This affects whether the upper limit is included in the generated sequence.
    - Comfy dtype: COMBO[str]
    - Python dtype: str

# Output types
- range
    - The range output is a list of integers generated based on the input parameters, representing the sequence of values within the defined range.
    - Comfy dtype: LIST[INT]
    - Python dtype: List[int]
- range_sizes
    - The range_sizes output provides the count of integers in each individually generated range, offering insight into the distribution of values.
    - Comfy dtype: LIST[INT]
    - Python dtype: List[int]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
