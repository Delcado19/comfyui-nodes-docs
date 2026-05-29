
# Documentation
- Class name: RetrieveBackendData __Inspire
- Category: InspirePack/Backend
- Output node: False

This node retrieves data from the backend cache based on a specified key. It abstracts the complexity of accessing cached data, providing a simple and direct way to fetch previously stored information.

# Input types
## Required
- key
    - The "key" parameter is essential for identifying the specific data to retrieve from the cache. It acts as a unique identifier, allowing the node to locate and return the corresponding data.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- data
    - The "data" output parameter represents the information retrieved from the cache. Depending on the nature of the stored data, it can be a single item or a list of items.
    - Comfy dtype: *
    - Python dtype: Union[List[Any], Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RetrieveBackendData:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "key": ("STRING", {"multiline": False, "placeholder": "Input data key (e.g. 'model a', 'chunli lora', 'girl latent 3', ...)"}),
            }
        }

    RETURN_TYPES = (any_typ,)
    RETURN_NAMES = ("data",)
    OUTPUT_IS_LIST = (True,)

    FUNCTION = "doit"

    CATEGORY = "InspirePack/Backend"

    @staticmethod
    def doit(key):
        global cache

        v = cache.get(key)

        if v is None:
            print(f"[RetrieveBackendData] '{key}' is unregistered key.")
            return (None,)

        is_list, data = v[1]

        if is_list:
            return (data,)
        else:
            return ([data],)

    @staticmethod
    def IS_CHANGED(key):
        return cache_weak_hash(key)

```
