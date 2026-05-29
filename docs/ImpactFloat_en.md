# Documentation
- Class name: ImpactFloat
- Category: ImpactPack/Logic
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactFloat node serves as a fundamental processing unit for operating on floating-point numbers. It is designed to handle numerical input with precision, ensuring that the node's calculations are robust and reliable, which is critical for mathematical operations and data analysis within the ImpactPack suite.

# Input types
## Required
- value
    - The 'value' parameter is a floating-point number on which the node operates. It is essential to the node's functionality, as it directly influences the result of the 'doit' method. This parameter is crucial for performing mathematical calculations and must be provided for the node to execute correctly.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result
    - The output of the 'doit' method is a floating-point number, which is the processed result of the input 'value'. This output is important as it represents the result of the node's calculation and can be used for further analysis or as input for subsequent nodes in the workflow.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactFloat:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'value': ('FLOAT', {'default': 1.0, 'min': -3.402823466e+38, 'max': 3.402823466e+38})}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic'
    RETURN_TYPES = ('FLOAT',)

    def doit(self, value):
        return (value,)
```