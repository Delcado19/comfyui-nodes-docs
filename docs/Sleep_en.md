
# Documentation
- Class name: Sleep
- Category: KJNodes/misc
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Sleep node introduces a pause of a specified duration in the workflow. It allows users to precisely control the delay by setting minutes and seconds, enabling scheduled pauses during execution. This feature is useful for controlling processing speed, simulating real operation intervals, or waiting for other resources to become ready.

# Input types
## Required
- input
    - This is a placeholder input that is returned as-is after the delay ends. It ensures data continuity during node operations, preventing data flow interruption due to the pause.
    - Comfy dtype: *
    - Python dtype: any
- minutes
    - Specifies the integer number of minutes for the delay. Together with seconds, it forms the total delay time, providing coarse-grained time control.
    - Comfy dtype: INT
    - Python dtype: int
- seconds
    - Specifies the fractional minutes (actually seconds) for the delay. Together with minutes, it precisely defines the total delay time, allowing finer-grained time adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- *
    - After the specified delay, the input data is returned unchanged. This output is essentially data transmission with a time delay.
    - Comfy dtype: *
    - Python dtype: any


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Sleep:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "input": (any, {}),
                "minutes": ("INT", {"default": 0, "min": 0, "max": 1439}),
                "seconds": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 59.99, "step": 0.01}),
            },
        }
    RETURN_TYPES = (any,)
    FUNCTION = "sleepdelay"
    CATEGORY = "KJNodes/misc"
    DESCRIPTION = """
Delays the execution for the input amount of time.
"""

    def sleepdelay(self, input, minutes, seconds):
        total_seconds = minutes * 60 + seconds
        time.sleep(total_seconds)
        return input,

```
