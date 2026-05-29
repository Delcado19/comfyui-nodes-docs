
# Documentation
- Class name: FloatRange __Inspire
- Category: InspirePack/Util
- Output node: False

The FloatRange node generates a series of floating-point numbers, starting from a specified start value, ending at another value, and incrementing by a defined step size. It is designed to create custom ranges with precise control, including an option to ensure the final value is included in the sequence.

# Input types
## Required
- start
    - Defines the starting point of the range. It sets the initial value where the sequence begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- stop
    - Specifies the end point of the range. Depending on the 'ensure_end' flag, the sequence will generate up to this value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- step
    - Determines the increment between each number in the sequence, allowing fine control over the progression of the range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- limit
    - Limits the number of elements in the generated sequence to prevent excessive output.
    - Comfy dtype: INT
    - Python dtype: int
- ensure_end
    - When enabled, ensures the termination value is included in the sequence, adjusting the sequence if necessary.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- float
    - Comfy dtype: FLOAT
    - A list of floating-point numbers constituting the generated range. This output is a list conforming to the expected 'float' type sequence.
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FloatRange:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                        "start": ("FLOAT", {"default": 0.0, "min": -100.0, "max": 100.0, 'step': 0.000000001}),
                        "stop": ("FLOAT", {"default": 1.0, "min": -100.0, "max": 100.0, 'step': 0.000000001}),
                        "step": ("FLOAT", {"default": 0.01, "min": 0.0, "max": 100.0, 'step': 0.000000001}),
                        "limit": ("INT", {"default": 100, "min": 2, "max": 4096, "step": 1}),
                        "ensure_end": ("BOOLEAN", {"default": True, "label_on": "enable", "label_off": "disable"}),
                     }
                }

    RETURN_TYPES = ("FLOAT",)
    OUTPUT_IS_LIST = (True,)

    FUNCTION = "doit"

    CATEGORY = "InspirePack/Util"

    def doit(self, start, stop, step, limit, ensure_end):
        if start >= stop or step == 0:
            return ([start], )

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

        return (res, )

```
