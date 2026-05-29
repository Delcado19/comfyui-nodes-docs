
# Documentation
- Class name: Text Prompt (JPS)
- Category: JPS Nodes/Text
- Output node: False

The Text Prompt (JPS) node is designed to receive text input and return it as-is. It serves as a simple mechanism for inputting and outputting text within a workflow, essentially acting as a passthrough for text data.

# Input types
## Required
- text
    - This parameter accepts a multiline string input, serving as the prompt text. It allows for dynamic prompts, enabling users to input text that can be dynamically processed or used within the node's workflow.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - Outputs the same text string as the input, effectively acting as a passthrough for text data.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Text_Prompt:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "text": ("STRING", {"multiline": True, "placeholder": "Prompt Text", "dynamicPrompts": True}),
            },
        }
    
    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("text",)
    FUNCTION = "text_prompt"

    CATEGORY="JPS Nodes/Text"

    def text_prompt(self,text):

        return(text,)

```
