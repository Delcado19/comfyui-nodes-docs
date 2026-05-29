# Documentation
- Class name: CreateSeedNode
- Category: ♾️Mixlab/Utils
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node generates seed values for various randomization processes, ensuring randomness can be controlled and reproduced when needed.

# Input types
## Required
- seed
    - The seed parameter is critical for initializing random number generators, enabling reproducible and predictable results in random processes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- seed
    - The output seed value serves as a reference for the initialized randomization process, indicating the specific state from which randomness is derived.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class CreateSeedNode:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('INT',)
    RETURN_NAMES = ('seed',)
    OUTPUT_NODE = True
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'

    def run(self, seed):
        return (seed,)
```