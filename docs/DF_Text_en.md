
# Documentation
- Class name: DF_Text
- Category: Derfuu_Nodes/Variables
- Output node: False

The DF_Text node is designed to capture and process text input, allowing string manipulation and transformation within workflows. It emphasizes handling text data, providing an intuitive interface for inputting and outputting text in various forms.

# Input types
## Required
- Text
    - This parameter accepts string input, serving as the primary data for node operations. It plays a crucial role in the node's text processing and manipulation capabilities.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - Outputs processed text as a string, reflecting any transformations or operations applied within the node.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class StringNode:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Text": Field.string(),
            }
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "get_value"
    CATEGORY = TREE_VARIABLE

    def get_value(self, Text: str) -> tuple[str]:
        return (Text,)

```
