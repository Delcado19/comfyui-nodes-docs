
# Documentation
- Class name: RetrieveBackendDataNumberKey __Inspire
- Category: InspirePack/Backend
- Output node: False

The RetrieveBackendDataNumberKey node is designed to fetch and return relevant data from the backend cache using a numeric key. It abstracts the complexity of the data retrieval process, enables efficient cache access via the key, and supports handling the data as a list according to the cache content structure.

# Input types
## Required
- key
    - The key parameter is a numeric identifier used to retrieve specific data from the backend cache. It plays a crucial role in efficiently accessing the required data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- data
    - The data output represents the data retrieved from the backend cache using the numeric key. Depending on the cache content structure, it may be returned as a single item or as a list.
    - Comfy dtype: *
    - Python dtype: Tuple[Any, ...]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RetrieveBackendDataNumberKey(RetrieveBackendData):
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "key": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
            }
        }

```
