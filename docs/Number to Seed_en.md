# Documentation
- Class name: WAS_Number_To_Seed
- Category: WAS Suite/Number/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

WAS_Number_To_Seed node aims to convert numeric values into seed format. It is a foundational tool in the WAS suite, facilitating operations that require seed-based methods. This node abstracts the complexity of seed generation, ensuring seamless integration with downstream processes that rely on seed input.

# Input types
## Required
- number
    - ‘number’ parameter is crucial to the operation of the node, as it is the input numeric value that the node converts into a seed. It plays a key role in determining the characteristics of the output seed, which can significantly affect subsequent processes that use this seed within the WAS suite.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]

# Output types
- seed
    - ‘seed’ output is a key element produced by the WAS_Number_To_Seed node. It represents the seed converted from the input number, and is essential for starting processes within the WAS suite that require seeds to execute.
    - Comfy dtype: SEED
    - Python dtype: Dict[str, Union[int, float]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Number_To_Seed:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'number': ('NUMBER',)}}
    RETURN_TYPES = ('SEED',)
    FUNCTION = 'number_to_seed'
    CATEGORY = 'WAS Suite/Number/Operations'

    def number_to_seed(self, number):
        return ({'seed': number},)
```