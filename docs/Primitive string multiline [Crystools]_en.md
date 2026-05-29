
# Documentation
- Class name: Primitive string multiline [Crystools]
- Category: crystools 🪛/Primitive
- Output node: False

This node is specifically designed for handling multi-line string input, providing a straightforward method for users to process longer text segments within the Crystools framework. It simplifies the complexity of managing multi-line strings, enabling users to more easily input and process text data spanning multiple lines.

# Input types
## Required
- string
    - The multi-line string input for this node. It allows users to input text spanning multiple lines, facilitating the handling and processing of longer text data.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The output of this node is the input multi-line string, which can be used for further processing or utilization in the workflow.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CTextML:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "string": STRING_ML,
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.PRIMITIVE.value
    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("string",)

    FUNCTION = "execute"

    def execute(self, string=""):
        return (string,)

```
