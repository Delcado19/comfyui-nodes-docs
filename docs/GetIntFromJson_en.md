
# Documentation
- Class name: GetIntFromJson
- Category: Art Venture/Utils
- Output node: True

The GetIntFromJson node extracts the integer value corresponding to a specific key from a JSON object. It simplifies retrieving numeric data from structured JSON for further processing or decision-making tasks.

# Input types
## Required
- json
    - The JSON object from which to extract the integer value. This parameter is essential for specifying the data source.
    - Comfy dtype: JSON
    - Python dtype: Dict[str, Any]
- key
    - The key in the JSON object that corresponds to the integer value. This parameter determines which data item to retrieve and is critical for targeted data extraction.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- int
    - The integer value retrieved from the JSON object based on the provided key. This output is important for downstream tasks that require numeric input.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilGetIntFromJson:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "json": ("JSON",),
                "key": ("STRING", {"default": ""}),
            }
        }

    RETURN_TYPES = ("INT",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "get_int_from_json"
    OUTPUT_NODE = True

    def get_int_from_json(self, json: Dict, key: str):
        return (get_dict_attribute(json, key, 0),)

```
