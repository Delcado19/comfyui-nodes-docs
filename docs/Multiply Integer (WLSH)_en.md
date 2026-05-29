# Documentation
- Class name: WLSH_Int_Multiply
- Category: WLSH Nodes/number
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node performs integer multiplication, a basic arithmetic operation that amplifies a given number by a specified multiplier, facilitating various mathematical and data processing tasks within the workflow.

# Input types
## Required
- number
    - The 'number' parameter is the base integer value to be multiplied by the 'multiplier'. It is essential to the node's operation as it defines the initial value in the multiplication process.
    - Comfy dtype: INT
    - Python dtype: int
- multiplier
    - The 'multiplier' parameter determines the factor by which the 'number' parameter is amplified. It is critical to the node's functionality as it dictates the degree of amplification applied to the initial value.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - The 'result' output represents the product of 'number' and 'multiplier', effectively demonstrating the outcome of the integer multiplication operation.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Int_Multiply:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'number': ('INT', {'default': 2, 'min': 1, 'max': 10000, 'forceInput': True}), 'multiplier': ('INT', {'default': 2, 'min': 1, 'max': 10000})}}
    RETURN_TYPES = ('INT',)
    FUNCTION = 'multiply'
    CATEGORY = 'WLSH Nodes/number'

    def multiply(self, number, multiplier):
        result = number * multiplier
        return (int(result),)
```