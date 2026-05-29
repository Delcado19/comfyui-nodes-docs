
# Documentation
- Class name: CacheBackendDataList __Inspire
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

CacheBackendDataList node aims to cache data lists in a backend storage system, enabling efficient retrieval and management of data collections. It supports using unique keys and tags to cache data, facilitating organization of storage and easy access to grouped data items.

# Input types
## Required
- key
    - The key parameter is used to uniquely identify the cached data list. It serves as the primary identifier for storing and retrieving cached data.
    - Comfy dtype: STRING
    - Python dtype: str
- tag
    - The tag parameter provides a brief description or label for the cached data, aiding in data classification and retrieval.
    - Comfy dtype: STRING
    - Python dtype: str
- data
    - The data parameter represents the actual list of data items to be cached. It is critical for the operation as it contains the content to be stored in the backend.
    - Comfy dtype: *
    - Python dtype: Tuple[bool, Any]

# Output types
- data opt
    - Returns the cached data list, confirming that the provided data has been successfully stored.
    - Comfy dtype: *
    - Python dtype: Tuple[Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CacheBackendDataList:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "key": ("STRING", {"multiline": False, "placeholder": "Input data key (e.g. 'model a', 'chunli lora', 'girl latent 3', ...)"}),
                "tag": ("STRING", {"multiline": False, "placeholder": "Tag: short description"}),
                "data": (any_typ,),
            }
        }

    INPUT_IS_LIST = True

    RETURN_TYPES = (any_typ,)
    RETURN_NAMES = ("data opt",)
    OUTPUT_IS_LIST = (True,)

    FUNCTION = "doit"

    CATEGORY = "InspirePack/Backend"

    OUTPUT_NODE = True

    def doit(self, key, tag, data):
        global cache

        if key == '*':
            print(f"[Inspire Pack] CacheBackendDataList: '*' is reserved key. Cannot use that key")

        update_cache(key[0], tag[0], (True, data))
        return (data,)

```
