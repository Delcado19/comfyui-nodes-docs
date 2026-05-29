
# Documentation
- Class name: easy textSwitch
- Category: EasyUse/Logic/Switch
- Output node: False

The easy textSwitch node provides a mechanism to switch between two text inputs based on a boolean condition. It acts as a conditional operator, enabling dynamic selection of text output in a workflow.

# Input types
## Required
- input
- A boolean value that determines which text input to output. If true, text1 is chosen; otherwise, text2 is chosen.
    - Comfy dtype: INT
    - Python dtype: bool
## Optional
- text1
- The first selectable text option. This input is part of the conditional operation and is selected when the boolean condition is true.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
- The second selectable text option. This input is part of the conditional operation and is selected when the boolean condition is false.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
- The output text selected based on the boolean condition. It dynamically switches between text1 and text2.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class textSwitch:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "input": ("INT", {"default": 1, "min": 1, "max": 2}),
            },
            "optional": {
                "text1": ("STRING", {"forceInput": True}),
                "text2": ("STRING", {"forceInput": True}),
            }
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("STRING",)
    CATEGORY = "EasyUse/Logic/Switch"
    FUNCTION = "switch"

    def switch(self, input, text1=None, text2=None,):
        if input == 1:
            return (text1,)
        else:
            return (text2,)

```
