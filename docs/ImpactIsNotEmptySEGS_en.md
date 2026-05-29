# Documentation
- Class name: ImpactNotEmptySEGS
- Category: ImpactPack/Logic
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactNotEmptySEGS node checks whether a given list of segments is empty, with particular focus on the second element in the list. The presence of data in a specific segment is critical when further processing is needed or decisions must be made in the logical flow.

# Input types
## Required
- segs
    - The 'segs' parameter is a list containing data segments. Checking its content is essential for the operation of the 'doit' method, as it determines whether the second segment is non-empty, which is critical to the node's decision-making process.
    - Comfy dtype: SEGS
    - Python dtype: List[Any]

# Output types
- result
    - The 'result' output indicates whether the second element in the 'segs' list is non-empty. It is a boolean value that, based on the conditional check performed by the 'doit' method, directly influences subsequent logic or operations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactNotEmptySEGS:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'segs': ('SEGS',)}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic'
    RETURN_TYPES = ('BOOLEAN',)

    def doit(self, segs):
        return (segs[1] != [],)
```