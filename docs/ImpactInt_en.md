# Documentation
- Class name: ImpactInt
- Category: ImpactPack/Logic
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactInt node is designed to perform a basic logical operation. It is designed to receive an integer input and return the same integer value, serving as a basic pass-through function within the ImpactPack suite. This node is critical in scenarios where input data integrity must be maintained, ensuring the information flow remains unchanged during computation.

# Input types
## Required
- value
    - The 'value' parameter is an integral part of the ImpactInt node's operation. It is the only input required by the node and is essential for the node to execute its pass-through function. The node's ability to maintain input integrity depends on the correct provision of this parameter, highlighting its important role in the overall node functionality.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - The 'result' output parameter of the ImpactInt node is a direct reflection of the input 'value'. It signifies the successful execution of the node and the preservation of input data integrity. This output is important as it provides a reliable and unmodified version of the input integer, ensuring continuity and accuracy for subsequent operations in the computational workflow.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactInt:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'value': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1})}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic'
    RETURN_TYPES = ('INT',)

    def doit(self, value):
        return (value,)
```