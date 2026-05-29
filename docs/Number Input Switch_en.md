# Documentation
- Class name: WAS_Number_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `number_input_switch` method processes numerical input based on a boolean condition. It demonstrates the node's ability to execute conditional logic operations, providing a versatile approach to handling numerical data. The node's functionality centers on its decision-making capability, allowing numbers to be manipulated in a controlled and predictable manner.

# Input types
## Required
- number_a
    - The `number_a` parameter is essential to the node's operation, as it represents the first numerical input the node will process. Its role is significant because it determines the initial dataset for the node's decision-making process.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]
- number_b
    - The `number_b` parameter serves as an alternative numerical input for the node. Its importance lies in providing a different set of values that the node can use when the boolean condition is not met.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]
## Optional
- boolean
    - The `boolean` parameter acts as a switch that determines the node's behavior. It is critical in determining which set of numerical inputs will be processed by the node, thereby influencing the node's output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- output
    - The output of the `number_input_switch` method is a tuple containing the original number, its floating-point representation, and its integer form. This comprehensive output provides a multifaceted view of the processed numerical data, meeting various downstream requirements.
    - Comfy dtype: COMBO[NUMBER, FLOAT, INT]
    - Python dtype: Tuple[Union[int, float], float, int]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Number_Input_Switch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'number_a': ('NUMBER',), 'number_b': ('NUMBER',), 'boolean': ('BOOLEAN', {'forceInput': True})}}
    RETURN_TYPES = ('NUMBER', 'FLOAT', 'INT')
    FUNCTION = 'number_input_switch'
    CATEGORY = 'WAS Suite/Logic'

    def number_input_switch(self, number_a, number_b, boolean=True):
        if boolean:
            return (number_a, float(number_a), int(number_a))
        else:
            return (number_b, float(number_b), int(number_b))
```