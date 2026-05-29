# Documentation
- Class name: RemoveBackendData
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is designed to manage and clear data stored in the backend cache, ensuring efficient memory usage and data organization within the system.

# Input types
## Required
- key
    - The 'key' parameter is critical for identifying specific data in the backend cache. It determines which data is targeted for deletion, with the wildcard '*' used to clear the entire cache.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- signal_opt
    - The 'signal_opt' parameter is an optional input that can provide additional instructions or signals to the node, enhancing its adaptability and flexibility across various scenarios.
    - Comfy dtype: ANY
    - Python dtype: Any

# Output types
- signal
    - The 'signal' output represents the result of the data deletion operation, which may be a status indication or a response to the 'signal_opt' input, ensuring effective communication between the node and the system.
    - Comfy dtype: ANY
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class RemoveBackendData:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'key': ('STRING', {'multiline': False, 'placeholder': "Input data key ('*' = clear all)"})}, 'optional': {'signal_opt': (any_typ,)}}
    RETURN_TYPES = (any_typ,)
    RETURN_NAMES = ('signal',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Backend'
    OUTPUT_NODE = True

    def doit(self, key, signal_opt=None):
        global cache
        if key == '*':
            cache = {}
        elif key in cache:
            del cache[key]
        else:
            print(f'[Inspire Pack] RemoveBackendData: invalid data key {key}')
        return (signal_opt,)
```