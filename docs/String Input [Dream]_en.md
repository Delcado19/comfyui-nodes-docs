
# Documentation
- Class name: String Input [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The String Input node is designed to capture and return a single-line string from user input. As a basic interface component in a large system, it collects text data in a simple and intuitive way, providing users with a friendly interactive experience.

# Input types
## Required
- value
    - The value parameter is used to specify the default value for the string input, which can be pre-filled or left empty. This parameter makes the initial configuration of the input field flexible, meeting the needs of various use cases by providing a customizable starting point.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - The output STRING parameter returns the string input provided by the user, enabling the transmission of text data within the system.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamInputString:
    NODE_NAME = "String Input"
    ICON = "✍"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "value": ("STRING", {"default": "", "multiline": False}),
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
