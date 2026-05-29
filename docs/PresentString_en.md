
# Documentation
- Class name: PresentString
- Category: klinter
- Output node: True

The PresentString node is designed to display a given string in the UI interface. It can parse and faithfully present the input text content.

# Input types
## Required
- text
    - The text parameter is the primary input of the PresentString node, requiring a string to be displayed. Its role is crucial, as it directly determines the specific content to be presented to the user.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - Comfy dtype: STRING
    - Unknown
    - Python dtype: unknown
- ui
    - The ui output parameter contains the user interface representation of the input text, allowing direct visual display of the provided string.
    - Comfy dtype: 未知
    - Python dtype: 未知


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class PresentString:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "text": ("STRING", {"forceInput": True}),
            }
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "PresentString"
    OUTPUT_NODE = True

    CATEGORY = "klinter"

    def PresentString(self, text):
        # Parse the string
        return {"ui": {"text": text}, "result": (text,)}

```
