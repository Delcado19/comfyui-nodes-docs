# Documentation
- Class name: CacheBackendData
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

Such nodes manage the storage and retrieval of data in the backend cache system, facilitating efficient data access and optimization of workflow processes.

# Input types
## Required
- key
    - The key parameter is crucial for uniquely identifying data in the cache. It is used to index and retrieve related data, ensuring that the correct information is accessed and processed.
    - Comfy dtype: STRING
    - Python dtype: str
- tag
    - The tag parameter serves as a descriptive label for data, aiding in data classification and quick reference. It enhances organization within the cache and supports efficient data management.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- data
    - The data parameter represents the actual content to be cached. It is the foundation of node operations because it holds the value that will be stored and later accessed.
    - Comfy dtype: ANY
    - Python dtype: Any

# Output types
- data opt
    - The output provides the data of the original input, ensuring that the data flow is maintained throughout the process. It confirms that the data has been successfully stored and is available for future use.
    - Comfy dtype: ANY
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class CacheBackendData:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'key': ('STRING', {'multiline': False, 'placeholder': "Input data key (e.g. 'model a', 'chunli lora', 'girl latent 3', ...)"}), 'tag': ('STRING', {'multiline': False, 'placeholder': 'Tag: short description'}), 'data': (any_typ,)}}
    RETURN_TYPES = (any_typ,)
    RETURN_NAMES = ('data opt',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Backend'
    OUTPUT_NODE = True

    def doit(self, key, tag, data):
        global cache
        if key == '*':
            print(f"[Inspire Pack] CacheBackendData: '*' is reserved key. Cannot use that key")
        cache[key] = (tag, (False, data))
        return (data,)
```