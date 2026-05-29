# Documentation
- Class name: WAS_CLIP_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `clip_switch` method conditionally selects one of two CLIP objects based on a boolean flag. It acts as a logical switch, directing data flow based on the boolean value.

# Input types
## Required
- clip_a
    - The first CLIP object selected when the boolean is true. It determines the output based on the boolean flag state.
    - Comfy dtype: CLIP
    - Python dtype: Union[torch.Tensor, comfy.sd.CLIP]
- clip_b
    - The second CLIP object selected when the boolean is false. It provides an alternative output when the boolean condition is not met.
    - Comfy dtype: CLIP
    - Python dtype: Union[torch.Tensor, comfy.sd.CLIP]
## Optional
- boolean
    - The boolean flag determining which CLIP object to return. It directly affects the node's output selection logic.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- selected_clip
    - The output is a single CLIP object, either `clip_a` or `clip_b`, depending on the boolean parameter. This output represents the result of the node's conditional logic.
    - Comfy dtype: CLIP
    - Python dtype: Union[torch.Tensor, comfy.sd.CLIP]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_CLIP_Input_Switch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'clip_a': ('CLIP',), 'clip_b': ('CLIP',), 'boolean': ('BOOLEAN', {'forceInput': True})}}
    RETURN_TYPES = ('CLIP',)
    FUNCTION = 'clip_switch'
    CATEGORY = 'WAS Suite/Logic'

    def clip_switch(self, clip_a, clip_b, boolean=True):
        if boolean:
            return (clip_a,)
        else:
            return (clip_b,)
```