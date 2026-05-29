
# Documentation
- Class name: RemoveBackendData __Inspire
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

The RemoveBackendData node is a component of InspirePack, designed to selectively clear data in the backend cache. It allows deletion of specific entries based on provided keys, or clearing the entire cache using a special key. This feature supports dynamic data management in backend processes, enabling efficient data update and deletion operations.

# Input types
## Required
- key
    - The key parameter specifies the identifier of the data to be removed from the cache. Using '*' as the key clears all data in the cache, allowing batch deletion or reset operations.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- signal_opt
    - An optional signal parameter can be passed to and returned by the node, facilitating linking of operations or transmission of control signals without affecting cache actions.
    - Comfy dtype: *
    - Python dtype: Any

# Output types
- signal
    - Returns the optional signal parameter passed to the node, allowing its use in subsequent operations or logic flows.
    - Comfy dtype: *
    - Python dtype: Any


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RemoveBackendData:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "key": ("STRING", {"multiline": False, "placeholder": "Input data key ('*' = clear all)"}),
            },
            "optional": {
                "signal_opt": (any_typ,),
            }
        }

    RETURN_TYPES = (any_typ,)
    RETURN_NAMES = ("signal",)

    FUNCTION = "doit"

    CATEGORY = "InspirePack/Backend"

    OUTPUT_NODE = True

    @staticmethod
    def doit(key, signal_opt=None):
        global cache

        if key == '*':
            cache = TaggedCache(cache_settings)
        elif key in cache:
            del cache[key]
        else:
            print(f"[Inspire Pack] RemoveBackendData: invalid data key {key}")

        return (signal_opt,)

```
