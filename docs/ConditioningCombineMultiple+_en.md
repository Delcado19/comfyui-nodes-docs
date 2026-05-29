
# Documentation
- Class name: ConditioningCombineMultiple+
- Category: essentials
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to combine multiple condition inputs into a single condition output. It supports combining up to five condition inputs, allowing flexible integration of various condition elements into a unified representation.

# Input types
## Required
- conditioning_i
    - Condition input of unknown type. This parameter is the core input of the node, representing the multiple condition data to be merged. The structure and content of each condition input are critical to the node's functionality and the final merged result.
    - Comfy dtype: CONDITIONING
    - Python dtype: unknown

## Optional

# Output types
- conditioning
    - Merged condition output, integrating up to five independent condition inputs into a unified representation. This output encapsulates the comprehensive characteristics of all input conditions and can be used for subsequent processing or analysis.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ConditioningCombineMultiple:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "conditioning_1": ("CONDITIONING",),
                "conditioning_2": ("CONDITIONING",),
            }, "optional": {
                "conditioning_3": ("CONDITIONING",),
                "conditioning_4": ("CONDITIONING",),
                "conditioning_5": ("CONDITIONING",),
            },
        }
    RETURN_TYPES = ("CONDITIONING",)
    FUNCTION = "execute"
    CATEGORY = "essentials"

    def execute(self, conditioning_1, conditioning_2, conditioning_3=None, conditioning_4=None, conditioning_5=None):
        c = conditioning_1 + conditioning_2

        if conditioning_3 is not None:
            c += conditioning_3
        if conditioning_4 is not None:
            c += conditioning_4
        if conditioning_5 is not None:
            c += conditioning_5
        
        return (c,)

```
