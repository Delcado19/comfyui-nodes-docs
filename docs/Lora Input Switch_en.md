# Documentation
- Class name: WAS_Lora_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The node acts as a conditional switch in WAS Suite, selecting and forwarding one of two input groups based on the Boolean parameter's state.

# Input types
## Required
- model_a
- The first model input is critical to the node's operation, representing one of the two possible data streams the Boolean switch can select.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip_a
- The first clip input is part of the first data stream; it is selected if the Boolean parameter is true, affecting the node's output.
    - Comfy dtype: CLIP
    - Python dtype: Any
- model_b
- The second model input represents the alternative data stream, selected if the Boolean parameter is false.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip_b
- The second clip input is part of the alternative data stream, its selection determined by the Boolean parameter's state.
    - Comfy dtype: CLIP
    - Python dtype: Any
- boolean
- The Boolean parameter serves as the control signal for the switch, deciding which input group the node forwards.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- output
- The node's output is determined by the Boolean parameter, forwarding either the first input group or the alternative group.
    - Comfy dtype: MODEL,CLIP
    - Python dtype: Tuple[Any, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Lora_Input_Switch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model_a': ('MODEL',), 'clip_a': ('CLIP',), 'model_b': ('MODEL',), 'clip_b': ('CLIP',), 'boolean': ('BOOLEAN', {'forceInput': True})}}
    RETURN_TYPES = ('MODEL', 'CLIP')
    FUNCTION = 'lora_input_switch'
    CATEGORY = 'WAS Suite/Logic'

    def lora_input_switch(self, model_a, clip_a, model_b, clip_b, boolean=True):
        if boolean:
            return (model_a, clip_a)
        else:
            return (model_b, clip_b)
```