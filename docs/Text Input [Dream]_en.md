
# Documentation
- Class name: Text Input [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: False

The Text Input [Dream] node provides a user interface component for text input. It allows multi-line text input and has a default value setting. This node is designed to collect text data from users through a graphical interface.

# Input types
## Required
- value
    - Represents the text value entered by the user. It supports multi-line input, starting from an empty string by default, making it easy to collect user-generated text.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - Outputs the text entered by the user, directly reflecting the input content without any modification.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamInputText:
    NODE_NAME = "Text Input"
    ICON = "✍"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "value": ("STRING", {"default": "", "multiline": True}),
            },
        }

    CATEGORY = NodeCategories.UTILS
    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("STRING",)
    FUNCTION = "noop"

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def noop(self, value):
        return (value,)

```
