# Documentation
- Class name: WAS_Conditioning_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `conditioning_input_switch` is designed to conditionally select between two input conditions based on a boolean flag. It acts as a logical switch in workflows, enabling dynamic data routing based on specified conditions, which is critical for controlling information flow in complex systems.

# Input types
## Required
- conditioning_a
    - The parameter 'conditioning_a' represents the first input condition that will be selected when the boolean flag is true. It plays a key role in determining the node's output, as it directly influences the data that passes through the system.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, comfy.sd.CONDITIONING]
- conditioning_b
    - The parameter 'conditioning_b' is the alternative input condition that will be used when the boolean flag is false. It is essential for providing an alternative path for data flow when the condition is not met, ensuring the node's flexibility in handling different scenarios.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, comfy.sd.CONDITIONING]
## Optional
- boolean
    - The parameter 'boolean' serves as the control signal that determines which condition input is selected. When set to true, it selects 'conditioning_a'; when set to false, it selects 'conditioning_b'. It is a critical parameter as it directly dictates the node's behavior.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- selected_conditioning
    - The output 'selected_conditioning' represents the input condition selected based on the provided boolean flag. It is important as it determines subsequent steps and processes in the workflow, potentially influencing the final result.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, comfy.sd.CONDITIONING]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Conditioning_Input_Switch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'conditioning_a': ('CONDITIONING',), 'conditioning_b': ('CONDITIONING',), 'boolean': ('BOOLEAN', {'forceInput': True})}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'conditioning_input_switch'
    CATEGORY = 'WAS Suite/Logic'

    def conditioning_input_switch(self, conditioning_a, conditioning_b, boolean=True):
        if boolean:
            return (conditioning_a,)
        else:
            return (conditioning_b,)
```