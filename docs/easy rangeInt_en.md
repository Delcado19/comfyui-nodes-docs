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
```
class RangeInt:

    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(s) -> Dict[str, Dict[str, Any]]:
        return {'required': {'range_mode': (['step', 'num_steps'], {'default': 'step'}), 'start': ('INT', {'default': 0, 'min': -4096, 'max': 4096, 'step': 1}), 'stop': ('INT', {'default': 0, 'min': -4096, 'max': 4096, 'step': 1}), 'step': ('INT', {'default': 0, 'min': -4096, 'max': 4096, 'step': 1}), 'num_steps': ('INT', {'default': 0, 'min': -4096, 'max': 4096, 'step': 1}), 'end_mode': (['Inclusive', 'Exclusive'], {'default': 'Inclusive'})}}
    RETURN_TYPES = ('INT', 'INT')
    RETURN_NAMES = ('range', 'range_sizes')
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True, True)
    FUNCTION = 'build_range'
    CATEGORY = 'EasyUse/Logic/Type'

    def build_range(self, range_mode, start, stop, step, num_steps, end_mode) -> Tuple[List[int], List[int]]:
        error_if_mismatched_list_args(locals())
        ranges = []
        range_sizes = []
        for (range_mode, e_start, e_stop, e_num_steps, e_step, e_end_mode) in zip_with_fill(range_mode, start, stop, num_steps, step, end_mode):
            if range_mode == 'step':
                if e_end_mode == 'Inclusive':
                    e_stop += 1
                vals = list(range(e_start, e_stop, e_step))
                ranges.extend(vals)
                range_sizes.append(len(vals))
            elif range_mode == 'num_steps':
                direction = 1 if e_stop > e_start else -1
                if e_end_mode == 'Exclusive':
                    e_stop -= direction
                vals = np.rint(np.linspace(e_start, e_stop, e_num_steps)).astype(int).tolist()
                ranges.extend(vals)
                range_sizes.append(len(vals))
        return (ranges, range_sizes)
```