
# Documentation
- Class name: Json comparator [Crystools]
- Category: crystools 🪛/Utils
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to compare two JSON objects, identifying differences between them, such as added, deleted, or changed elements. It abstracts the complexity of deep JSON comparison, providing a simple and intuitive way to visualize changes between two JSON states.

# Input types
## Required
- json_old
    - The original JSON object to compare. It serves as the baseline for comparison.
    - Comfy dtype: JSON
    - Python dtype: str
- json_new
    - The new JSON object to compare with the original. Differences detected between this object and the original JSON will be highlighted.
    - Comfy dtype: JSON
    - Python dtype: str

## Optional

# Output types
- json_compared
    - A string representation showing the differences found between the two JSON objects, including added, deleted, or changed elements.
    - Comfy dtype: JSON
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CUtilsCompareJsons:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "json_old": JSON_WIDGET,
                "json_new": JSON_WIDGET,
            },
            "optional": {

            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.UTILS.value
    RETURN_TYPES = ("JSON",)
    RETURN_NAMES = ("json_compared",)
    OUTPUT_NODE = True

    FUNCTION = "execute"

    def execute(self, json_old, json_new):
        json = findJsonStrDiff(json_old, json_new)
        return (str(json),)

```
