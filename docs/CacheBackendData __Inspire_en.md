
# Documentation
- Class name: CacheBackendData __Inspire
- Category: InspirePack/Backend
- Output node: True

CacheBackendData node aims to cache arbitrary data together with a unique key and descriptive label into a backend storage system. This functionality enables users to store and access data based on unique identifiers and descriptive labels, supporting efficient data retrieval and management.

# Input types
## Required
- key
    - The key parameter serves as the unique identifier for the cached data. It is essential for retrieving the cached data later.
    - Comfy dtype: STRING
    - Python dtype: str
- tag
    - The tag parameter provides a brief description for the cached data, aiding in its identification and retrieval.
    - Comfy dtype: STRING
    - Python dtype: str
- data
    - The data parameter is the actual data to be cached. It can be of any type, making this node very flexible in applications.
    - Comfy dtype: *
    - Python dtype: Any

# Output types
- data opt
    - Returns the cached data, allowing immediate verification or further processing.
    - Comfy dtype: *
    - Python dtype: Tuple[Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CacheBackendData:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "key": ("STRING", {"multiline": False, "placeholder": "Input data key (e.g. 'model a', 'chunli lora', 'girl latent 3', ...)"}),
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

        if key == '*':
            print(f"[Inspire Pack] CacheBackendData: '*' is reserved key. Cannot use that key")

        update_cache(key, tag, (False, data))
        return (data,)

```
