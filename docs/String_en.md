
# Documentation
- Class name: String
- Category: Logic
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

String node is dedicated to handling and returning string values, allowing basic text data operations and processing within a logic-based framework. This node provides a simple and effective way to manage and manipulate text information, making it an essential tool for string-related tasks.

# Input types
## Required
- value
    - The `value` parameter is the core input of the String node, representing the string value to be processed by the node. Users can input various text data through this parameter for subsequent operations or evaluation. This parameter's flexibility enables the String node to adapt to diverse text processing scenarios.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - The output `STRING` parameter represents the string value after processing by the String node. Depending on the node's implementation and provided input, the output may be a newly processed string or the original string unchanged. This flexibility allows the String node to meet various string processing needs.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class String:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {"value": ("STRING", {"default": ""})},
        }

    RETURN_TYPES = ("STRING",)

    RETURN_NAMES = ("STRING",)

    FUNCTION = "execute"

    CATEGORY = "Logic"

    def execute(self, value):
        return (value,)

```
