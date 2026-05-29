# Documentation
- Class name: RetrieveBackendData
- Category: InspirePack/Backend
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node extracts data from the backend cache system, providing a streamlined method for accessing stored information based on a specified key. It serves as a key component in the data retrieval workflow, ensuring efficient and accurate backend data access without redundant fetching.

# Input types
## Required
- key
    - The `key` parameter is essential for identifying the specific dataset to retrieve from the backend cache. It acts as a unique identifier, allowing the node to locate and return the correct information.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- data
    - The `data` output represents the information retrieved from the backend cache. It is a critical part of the node's function, passing the requested data to subsequent stages of the workflow.
    - Comfy dtype: COMBO[any_typ]
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class RetrieveBackendData:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'key': ('STRING', {'multiline': False, 'placeholder': "Input data key (e.g. 'model a', 'chunli lora', 'girl latent 3', ...)"})}}
    RETURN_TYPES = (any_typ,)
    RETURN_NAMES = ('data',)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Backend'

    def doit(self, key):
        global cache
        (is_list, data) = cache[key][1]
        if is_list:
            return (data,)
        else:
            return ([data],)
```