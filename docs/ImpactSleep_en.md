# Documentation
- Class name: ImpactSleep
- Category: ImpactPack/Logic/_for_test
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactSleep node is designed to introduce a delay in the execution flow. It accepts a signal and a duration in seconds, then pauses the process for the specified time, allowing other tasks to be scheduled or executed concurrently. This node is particularly useful for controlling the timing of operations within larger workflows.

# Input types
## Required
- signal
    - The 'signal' parameter is a generic input used to pass control or state information into the node. It is important because its value may affect subsequent steps in the workflow.
    - Comfy dtype: any_typ
    - Python dtype: Any
- seconds
    - The 'seconds' parameter specifies the duration of the delay the node will introduce. It is critical for time-sensitive operations and can impact the overall performance of the system.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- signal_opt
    - The 'signal_opt' output provides the original signal after the delay is introduced, ensuring the workflow can continue seamlessly with the same control or state information.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactSleep:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'signal': (any_typ,), 'seconds': ('FLOAT', {'default': 0.5, 'min': 0, 'max': 3600})}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic/_for_test'
    RETURN_TYPES = (any_typ,)
    RETURN_NAMES = ('signal_opt',)
    OUTPUT_NODE = True

    def doit(self, signal, seconds):
        time.sleep(seconds)
        return (signal,)
```