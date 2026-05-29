# Documentation
- Class name: ImpactDummyInput
- Category: ImpactPack/Debug
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactDummyInput node acts as a placeholder function in the ImpactPack/Debug category. It is designed to perform a simple operation, typically used for testing or debugging purposes, without affecting the main workflow.

# Input types
## Required
- required
    - ‘required’ parameter is a dictionary that specifies the required inputs of the ImpactDummyInput node. This is essential for the node's operation because it determines the data that must be provided for the 'doit' method to execute correctly.
    - Comfy dtype: Dict[str, any_typ]
    - Python dtype: Dict[str, any_typ]

# Output types
- output
    - The 'output' parameter represents the result of the 'doit' method, in this case, a simple string indicating the result of the dummy operation. It is important because it provides direct feedback on node execution during debugging.
    - Comfy dtype: str
    - Python dtype: Tuple[str, ...]

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactDummyInput:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}}
    CATEGORY = 'ImpactPack/Debug'
    RETURN_TYPES = (any_typ,)
    FUNCTION = 'doit'

    def doit(self):
        return ('DUMMY',)
```