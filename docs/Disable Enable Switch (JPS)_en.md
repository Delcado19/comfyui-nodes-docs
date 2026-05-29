
# Documentation
- Class name: Disable Enable Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False

This node toggles between disabling and enabling functionality based on the comparison and matching conditions of two integer values.

# Input types
## Required
- select
    - Specifies the first integer value to compare, affecting the switch result.
    - Comfy dtype: INT
    - Python dtype: int
- compare
    - Specifies the second integer value to compare against the first, affecting the switch result.
    - Comfy dtype: INT
    - Python dtype: int
- match
    - Determines the condition that controls the switch behavior ('Set to Disable' or 'Set to Enable').
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list of str

# Output types
- disable_enable
    - Outputs 'disable' or 'enable' based on the comparison of input values and the matching condition.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Disable_Enable_Switch:
    match = ["Set to Disable","Set to Enable"]

    CATEGORY = 'JPS Nodes/Switches'
    RETURN_TYPES = (["disable","enable"],)
    RETURN_NAMES = ("disable_enable",)
    FUNCTION = "get_disenable"

    @classmethod
    def INPUT_TYPES(s):    
        return {
            "required": {
                "select": ("INT", {"default": 1, "min": 1, "max": 9, "step": 1}),
                "compare": ("INT", {"default": 1, "min": 1, "max": 9, "step": 1}),
                "match": (s.match,),
            }
        }

    def get_disenable(self,select,compare,match):
        disable_enable = "disable"
        if match == "Set to Enable" and (int(select) == int(compare)):
            disable_enable = "enable"
        elif match == "Set to Disable" and (int(select) == int(compare)):
            disable_enable = "disable"
        elif match == "Set to Enable" and (int(select) != int(compare)):
            disable_enable = "disable"
        elif match == "Set to Disable" and (int(select) != int(compare)):
            disable_enable = "enable"
        
        return (disable_enable, )

```
