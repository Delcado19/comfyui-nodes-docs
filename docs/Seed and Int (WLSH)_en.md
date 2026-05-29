# Documentation
- Class name: WLSH_Seed_and_Int
- Category: WLSH Nodes/number
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node generates a seed and integer value pair based on a given seed, used for creating and managing unique identifiers in the system.

# Input types
## Required
- seed
    - The seed is the fundamental parameter that initiates the process of generating unique integers. It is critical for ensuring consistency and reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- seed
    - The output seed is the original input seed, marking its role as an identifier in the operation. The integer output is a transformation of the seed, indicating its importance in the process.
    - Comfy dtype: INT
    - Python dtype: int
- int_representation
    - The integer representation is derived from the input seed, serving as an indispensable unique output in the node's functionality.
    - Comfy dtype: SEED
    - Python dtype: Dict[str, int]

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Seed_and_Int:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('INT', 'SEED')
    FUNCTION = 'seed_and_int'
    CATEGORY = 'WLSH Nodes/number'

    def seed_and_int(self, seed):
        return (seed, {'seed': seed})
```