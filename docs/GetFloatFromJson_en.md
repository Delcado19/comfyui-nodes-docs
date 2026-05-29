
# Documentation
- Class name: GetFloatFromJson
- Category: Art Venture/Utils
- Output node: True

The GetFloatFromJson node is a utility designed to extract floating-point values from JSON objects. It locates and extracts the desired float data based on a specified key, simplifying the process of retrieving numerical information from JSON-structured content. As part of the Art Venture utility toolkit, this node plays an important role in data processing and manipulation.

# Input types
## Required
- json
    - This is the JSON object from which the floating-point value needs to be extracted. It is the primary data source and is critical to the entire extraction process.
    - Comfy dtype: JSON
    - Python dtype: Dict[str, Any]
- key
    - This parameter specifies the key to look up in the JSON object, used to locate the desired floating-point value. It determines which specific data item is to be extracted.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- float
    - The output is the floating-point value extracted from the JSON object. This result is significant for subsequent numerical analysis or computation.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilGetFloatFromJson:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "json": ("JSON",),
                "key": ("STRING", {"default": ""}),
            }
        }

    RETURN_TYPES = ("FLOAT",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "get_float_from_json"
    OUTPUT_NODE = True

    def get_float_from_json(self, json: Dict, key: str):
        return (get_dict_attribute(json, key, 0.0),)

```
