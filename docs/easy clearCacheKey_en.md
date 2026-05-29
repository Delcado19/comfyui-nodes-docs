
# Documentation
- Class name: easy clearCacheKey
- Category: EasyUse/Logic
- Output node: True

This node provides a mechanism to selectively clear specific cache entries based on a given key. It is designed to manage and optimize cache usage by allowing deletion of stale or unnecessary cache entries, ensuring the cache remains efficient and relevant.

# Input types
## Required
- anything
    - This is a placeholder parameter that does not affect the node's operation but is required for the node's execution.
    - Comfy dtype: *
    - Python dtype: str
- cache_key
    - Specifies the key of the cache entry to delete. This key identifies the specific cache entry targeted for deletion and plays a critical role in managing cache content.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class clearCacheKey:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "anything": (AlwaysEqualProxy("*"), {}),
            "cache_key": ("STRING", {"default": "*"}),
        }, "optional": {},
            "hidden": {"unique_id": "UNIQUE_ID", "extra_pnginfo": "EXTRA_PNGINFO",}
        }

    RETURN_TYPES = ()
    RETURN_NAMES = ()
    OUTPUT_NODE = True
    FUNCTION = "empty_cache"
    CATEGORY = "EasyUse/Logic"

    def empty_cache(self, anything, cache_name, unique_id=None, extra_pnginfo=None):
        remove_cache(cache_name)
        return ()

```
