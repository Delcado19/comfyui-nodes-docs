# Documentation
- Class name: CR_Seed
- Category: Essential/Core
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_Seed node is designed to initialize and manage seeds for random number generation during computation. By setting specific seed values, it ensures results are reproducible, which is critical for debugging and consistency testing across different runs.

# Input types
## Required
- seed
    - The seed parameter is crucial for initializing the random number generator. It determines the starting point for random number generation, thereby affecting the reproducibility of results. The seed value should be a non-negative integer within the specified range.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- seed
    - The output seed is the same as the input seed, representing the value used to initialize the random number generator. It is important for tracking and ensuring the reproducibility of the process.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The show_help output provides a URL link pointing to the documentation or help page associated with the node. This can be useful for users who need additional guidance or information on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_Seed:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('INT', 'STRING')
    RETURN_NAMES = ('seed', 'show_help')
    FUNCTION = 'seedint'
    OUTPUT_NODE = True
    CATEGORY = icons.get('Comfyroll/Essential/Core')

    @staticmethod
    def seedint(seed):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Core-Nodes#cr-seed'
        return (seed, show_help)
```