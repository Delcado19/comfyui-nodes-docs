# Documentation
- Class name: CR_SeedToInt
- Category: Comfyroll/Essential/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SeedToInt node converts a seed object into an integer. It plays a critical role in the conversion process, ensuring data integrity and availability. The node abstracts the complexity of seed conversion, providing a simple interface for further data operations and analysis.

# Input types
## Required
- seed
    - The seed parameter is essential to the node's operation, as it is the raw input the node processes. It directly affects the node's output by determining the initial value converted to an integer.
    - Comfy dtype: SEED
    - Python dtype: Dict[str, Any]

# Output types
- INT
    - The INT output represents the converted integer value derived from the input seed. It is important because it is the primary result of the node's functionality and can be used in subsequent computational tasks.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The show_help output provides a URL link to documentation for further assistance. It is useful for users seeking more information about the node's operation and its context within the broader system.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SeedToInt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'seed': ('SEED',)}}
    RETURN_TYPES = ('INT', 'STRING')
    RETURN_NAMES = ('INT', 'show_help')
    FUNCTION = 'seed_to_int'
    CATEGORY = icons.get('Comfyroll/Essential/Legacy')

    def seed_to_int(self, seed):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Conversion-Nodes#cr-seed-to-int'
        return (seed.get('seed'), show_help)
```