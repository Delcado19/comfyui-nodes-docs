
# Documentation
- Class name: IF_DisplayText
- Category: ImpactFrames💥🎞️
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack

The IF_DisplayText node is designed to display text output within the ImpactFrames environment, providing a simple interface for visualizing text data.

# Input types
## Required
- text
    - The 'text' parameter is the primary input of the IF_DisplayText node, serving as the text content to be displayed. It is essential to the node's operation, determining the text output that will be visualized.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - Comfy dtype: STRING
    - The specific function and data type of the 'string' output parameter are unknown.
    - Python dtype: unknown
- ui
    - The 'ui' output parameter encapsulates the displayed text into a user interface format, enabling direct visualization within the ImpactFrames environment.
    - Comfy dtype: UI
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IFDisplayText:
    def __init__(self):
        self.type = "output"

    @classmethod
    def INPUT_TYPES(cls):

        return {
            "required": {        
                "text": ("STRING", {"forceInput": True}),     
                },
            "hidden": {},
            }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "display_text"
    OUTPUT_NODE = True
    CATEGORY = "ImpactFrames💥🎞️"
    
    def display_text(self, text):
        print("==================")
        print("IF_AI_tool_output:")
        print("==================")
        print(text)
        return {"ui": {"string": [text,]}, "result": (text,)}

```
