
# Documentation
- Class name: CacheBackendDataNumberKey __Inspire
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

This node is designed to cache data on the Inspire Pack backend using numeric keys. It allows storing and retrieving data associated with unique integer keys and descriptive tags, enabling efficient data management and access in custom workflows.

# Input types
## Required
- key
    - The key parameter is an integer that uniquely identifies the data to be cached. It serves as the primary identifier for storing and retrieving data.
    - Comfy dtype: INT
    - Python dtype: int
- tag
    - The tag parameter is a string that provides a short description or label for the cached data, aiding in data identification and classification.
    - Comfy dtype: STRING
    - Python dtype: str
- data
    - The data parameter represents the actual data to be cached. It can be of any type, allowing diverse data storage options.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- data opt
    - This output returns the same data that was cached from the input, allowing immediate verification or further processing.
    - Comfy dtype: *
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CacheBackendDataNumberKey:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "key": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                "tag": ("STRING", {"multiline": False, "placeholder": "Tag: short description"}),
                "data": (any_typ,),
            }
        }

    RETURN_TYPES = (any_typ,)
    RETURN_NAMES = ("data opt",)

    FUNCTION = "doit"

    CATEGORY = "InspirePack/Backend"

    OUTPUT_NODE = True

    def doit(self, key, tag, data):
        global cache

        update_cache(key, tag, (False, data))
        return (data,)

```
