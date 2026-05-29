
# Documentation
- Class name: DF_DynamicPrompts_Text_Box
- Category: Derfuu_Nodes/Variables
- Output node: False

This node is dedicated to handling text input with dynamic prompts, providing users with a more interactive and flexible input experience. It captures and returns the input text unchanged, supporting multiline input and dynamically generated prompts.

# Input types
## Required
- Text
    - The "Text" parameter accepts multiline text input with dynamic prompts, enhancing the node's ability to process diverse and context-rich user input.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The node outputs the unaltered input text, encapsulating it in a tuple to meet the expected return type.
    - Comfy dtype: STRING
    - Python dtype: tuple[str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AsDynamicPromptsStringNode:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Text": Field.string(multiline=True, dynamicPrompts=True),
            },
        }


    RETURN_TYPES = ("STRING",)
    FUNCTION = "get_value"
    CATEGORY = TREE_VARIABLE

    def get_value(self, Text: str) -> tuple[str]:
        return (Text,)

```
