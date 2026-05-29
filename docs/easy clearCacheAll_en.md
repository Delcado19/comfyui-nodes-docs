
# Documentation
- Class name: easy clearCacheAll
- Category: EasyUse/Logic
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The clearCacheAll node is designed to clear the entire cache, regardless of any specific key or condition. It serves as a utility to reset or refresh the cache state within the system, ensuring all cached data is removed to prevent the use of stale or outdated information.

# Input types
## Required
- anything
    - This parameter acts as a placeholder and does not affect the cache-clearing operation. It symbolizes that the function can be triggered without any specific input related to cache content.
    - Comfy dtype: *
    - Python dtype: Any

# Output types
The node has no output type.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class clearCacheAll:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "anything": (AlwaysEqualProxy("*"), {}),
        }, "optional": {},
            "hidden": {"unique_id": "UNIQUE_ID", "extra_pnginfo": "EXTRA_PNGINFO",}
        }

    RETURN_TYPES = ()
    RETURN_NAMES = ()
    OUTPUT_NODE = True
    FUNCTION = "empty_cache"
    CATEGORY = "EasyUse/Logic"

    def empty_cache(self, anything, unique_id=None, extra_pnginfo=None):
        remove_cache('*')
        return ()

```
