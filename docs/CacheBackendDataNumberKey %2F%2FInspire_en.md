# Documentation
- Class name: CacheBackendDataNumberKey
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is designed to manage and store data in a caching system, using a unique numeric key for identification and retrieval. It plays a crucial role in maintaining the efficiency and organization of data flow in backend infrastructure.

# Input types
## Required
- key
    - The 'key' parameter is essential for the node's operation, as it uniquely identifies data in the cache. It is a key component that affects the node's ability to accurately store and retrieve information.
    - Comfy dtype: INT
    - Python dtype: int
- data
    - The 'data' parameter represents the actual content to be cached. It is the primary input that the node processes and stores, ensuring information is readily available.
    - Comfy dtype: ANY
    - Python dtype: Any
## Optional
- tag
    - The 'tag' parameter serves as a descriptor for the data, providing a brief description that can be used to categorize or filter cached information. It enhances the node's functionality by providing a way to more efficiently organize and access data.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- data opt
    - The output 'data opt' represents the original data returned during the caching process along with any additional information or modifications that may have occurred. This ensures the user receives the complete expected dataset.
    - Comfy dtype: ANY
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class CacheBackendDataNumberKey:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'key': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'tag': ('STRING', {'multiline': False, 'placeholder': 'Tag: short description'}), 'data': (any_typ,)}}
    RETURN_TYPES = (any_typ,)
    RETURN_NAMES = ('data opt',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Backend'
    OUTPUT_NODE = True

    def doit(self, key, tag, data):
        global cache
        cache[key] = (tag, (False, data))
        return (data,)
```