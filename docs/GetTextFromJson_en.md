
# Documentation
- Class name: GetTextFromJson
- Category: Art Venture/Utils
- Output node: True

The GetTextFromJson node extracts the string value for a specified key from a JSON object. It streamlines retrieving textual information from structured JSON data and is a key tool for data processing and manipulation tasks in the Art Venture/Utils category.

# Input types
## Required
- json
- The JSON object from which to extract the string value. This parameter is essential for specifying the source data.
    - Comfy dtype: JSON
    - Python dtype: Dict[str, Any]
- key
- The key used to retrieve the value from the JSON object. This parameter enables targeted data extraction, enhancing the node's flexibility and utility.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
- The string value retrieved from the JSON object. This output is important for subsequent processing or display purposes.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilGetTextFromJson:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "json": ("JSON",),
                "key": ("STRING", {"default": ""}),
            }
        }

    RETURN_TYPES = ("STRING",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "get_string_from_json"
    OUTPUT_NODE = True

    def get_string_from_json(self, json: Dict, key: str):
        return (get_dict_attribute(json, key, ""),)

```
