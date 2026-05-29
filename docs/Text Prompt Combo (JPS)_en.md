
# Documentation
- Class name: Text Prompt Combo (JPS)
- Category: JPS Nodes/Text
- Output node: False

Text Prompt Combo node is designed to accept two different text inputs, typically representing positive and negative prompt texts, and returns them as-is. This node helps combine or juxtapose different text inputs for further processing or generation tasks.

# Input types
## Required
- pos
    - Represents positive prompt text, allows multi-line input and dynamic prompt generation. It plays a crucial role in defining the positive aspects of the content to be generated or processed.
    - Comfy dtype: STRING
    - Python dtype: str
- neg
    - Represents negative prompt text, likewise allows multi-line input and dynamic prompt generation. It is essential for specifying negative aspects or elements to be excluded in content generation or processing.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- pos
    - Returns the positive prompt text provided in the input, facilitating further content generation or processing tasks.
    - Comfy dtype: STRING
    - Python dtype: str
- neg
    - Returns the negative prompt text provided in the input, enabling the exclusion or negation of certain elements in content generation or processing.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Text_Prompt_Combo:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "pos": ("STRING", {"multiline": True, "placeholder": "Prompt Text Positive", "dynamicPrompts": True}),
                "neg": ("STRING", {"multiline": True, "placeholder": "Prompt Text Negative", "dynamicPrompts": True}),
            },
        }
    
    RETURN_TYPES = ("STRING","STRING",)
    RETURN_NAMES = ("pos","neg",)
    FUNCTION = "give_values"

    CATEGORY="JPS Nodes/Text"

    def give_values(self,pos,neg):
        
        return(pos,neg,)

```
