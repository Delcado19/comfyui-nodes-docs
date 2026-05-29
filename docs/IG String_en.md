
# Documentation
- Class name: `IG String`
- Category: `🐓 IG Nodes/Primitives`
- Output node: `False`

The IG String node is designed to handle string inputs, allowing users to input and pass string values in a node-based processing environment. It serves as a fundamental building block for text data manipulation.

# Input types
## Required
- value
    - This parameter accepts a string value as the primary input for the node. It enables the node to process and pass through the input string without any modifications.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - Outputs the unaltered input string value, facilitating its use in subsequent nodes or operations.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IG_String:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "value": ("STRING",{}),
            },
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "main"
    CATEGORY = TREE_PRIMITIVES

    def main(self, value):
        return (value,)

```
