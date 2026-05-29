# Documentation
- Class name: FloatRange
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node generates a series of floating-point numbers within a specified range, adjusting intervals according to user-defined parameters to facilitate various mathematical and computational tasks.

# Input types
## Required
- start
    - The starting value of the sequence. It sets the initial point from which the node begins generating numbers, which is crucial for defining the lower bound of the sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- stop
    - The ending value of the sequence. It marks the upper limit of the range, determining when the node should stop generating numbers.
    - Comfy dtype: FLOAT
    - Python dtype: float
- step
    - The increment between each number in the sequence. It determines the spacing and is crucial for controlling the density of numbers generated within the range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- limit
    - The maximum number of values generated. It limits the total output, ensuring the sequence does not exceed a predefined length.
    - Comfy dtype: INT
    - Python dtype: int
- ensure_end
    - A flag indicating whether to include the end value in the sequence. If enabled, it affects the final output by ensuring the sequence includes the specified stop value.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- sequence
    - A list of floating-point numbers generated within the specified range, representing the output of the node's operation.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]

# Usage tips
- Infra type: CPU

# Source code
```
class FloatRange:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'start': ('FLOAT', {'default': 0.0, 'min': -100.0, 'max': 100.0, 'step': 1e-09}), 'stop': ('FLOAT', {'default': 1.0, 'min': -100.0, 'max': 100.0, 'step': 1e-09}), 'step': ('FLOAT', {'default': 0.01, 'min': 0.0, 'max': 100.0, 'step': 1e-09}), 'limit': ('INT', {'default': 100, 'min': 2, 'max': 4096, 'step': 1}), 'ensure_end': ('BOOLEAN', {'default': True, 'label_on': 'enable', 'label_off': 'disable'})}}
    RETURN_TYPES = ('FLOAT',)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Util'

    def doit(self, start, stop, step, limit, ensure_end):
        if start >= stop or step == 0:
            return ([start],)
        res = []
        x = start
        last = x
        while x <= stop and limit > 0:
            res.append(x)
            last = x
            limit -= 1
            x += step
        if ensure_end and last != stop:
            if len(res) >= limit:
                res.pop()
            res.append(stop)
        return (res,)
```