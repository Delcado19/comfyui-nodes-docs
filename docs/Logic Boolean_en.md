# Documentation
- Class name: WAS_Boolean
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

WAS_Boolean node is a basic component in logical operations, designed to process and return Boolean values. It plays a key role in the decision-making process of the workflow, ensuring that subsequent steps are executed based on the results of logical conditions.

# Input types
## Required
- boolean_number
    - The 'boolean_number' parameter is crucial for determining the Boolean result. It influences the execution of the node by providing a value rounded to the nearest integer, thereby defining the Boolean state.
    - Comfy dtype: FLOAT
    - Python dtype: Union[float, int]

# Output types
- result
    - The 'result' output represents the Boolean value derived from the input. It is important because it determines the flow of subsequent operations based on the evaluated logical conditions.
    - Comfy dtype: INT
    - Python dtype: Tuple[int, int]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Boolean:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'boolean_number': ('FLOAT', {'default': 1, 'min': 0, 'max': 1, 'step': 1})}}
    RETURN_TYPES = ('NUMBER', 'INT')
    FUNCTION = 'return_boolean'
    CATEGORY = 'WAS Suite/Logic'

    def return_boolean(self, boolean_number=True):
        return (int(round(boolean_number)), int(round(boolean_number)))
```