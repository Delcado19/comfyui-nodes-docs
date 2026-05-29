# Documentation
- Class name: WLSH_Seed_to_Number
- Category: WLSH Nodes/number
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node is designed to convert input data into a numerical representation, facilitating data processing and analysis within the system.

# Input types
## Required
- seed
    - The seed parameter is critical, as it provides the raw data necessary for the node to perform the conversion.
    - Comfy dtype: SEED
    - Python dtype: Dict[str, Any]

# Output types
- number
    - The output is a numerical representation derived from the input, essential for further computational processes within the system.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Seed_to_Number:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'seed': ('SEED',)}}
    RETURN_TYPES = ('INT',)
    FUNCTION = 'number_to_seed'
    CATEGORY = 'WLSH Nodes/number'

    def number_to_seed(self, seed):
        return (int(seed['seed']),)
```