
# Documentation
- Class name: CacheBackendDataNumberKeyList __Inspire
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

This node is used to update data associated with numeric keys and tags in the cache, supporting batch operations. It facilitates structured storage and retrieval of backend data, enabling efficient data management within the InspirePack backend framework.

# Input types
## Required
- key
    - A numeric key associated with the data to be cached. It serves as the unique identifier for the data in the cache.
    - Comfy dtype: INT
    - Python dtype: int
- tag
    - A short description or identifier for the data being cached. Tags help categorize or describe the nature of the data, aiding in retrieval.
    - Comfy dtype: STRING
    - Python dtype: str
- data
    - The actual data to be cached. This parameter allows storage of any type of data, making the node versatile in applications.
    - Comfy dtype: *
    - Python dtype: any

# Output types
- data opt
    - Returns the incoming cached data, helping to confirm the processed data.
    - Comfy dtype: *
    - Python dtype: any


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CacheBackendDataNumberKeyList:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "key": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
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
        update_cache(key[0], tag[0], (True, data))
        return (data,)

```
