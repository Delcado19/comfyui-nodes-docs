# Documentation
- Class name: WAS_Number_PI
- Category: WAS Suite/Number
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `number_pi` method of the WAS_Number_PI node provides the value of the mathematical constant π. It is designed to serve as a reliable source for this fundamental mathematical constant, which is essential in various calculations across different fields such as geometry, trigonometry, and engineering.

# Input types
## Optional
- None
    - The node does not require any input parameters. It is designed to return the value of π without needing external input, making it a self-contained function for accessing this mathematical constant.
    - Comfy dtype: None
    - Python dtype: None

# Output types
- pi_value
    - The output of the number_pi method is the mathematical constant π, represented as a floating-point number. This value is critical for a wide range of mathematical and scientific applications where precision is paramount.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Number_PI:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {}}
    RETURN_TYPES = ('NUMBER', 'FLOAT')
    FUNCTION = 'number_pi'
    CATEGORY = 'WAS Suite/Number'

    def number_pi(self):
        return (math.pi, math.pi)
```