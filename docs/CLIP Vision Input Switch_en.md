# Documentation
- Class name: WAS_CLIP_Vision_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method 'clip_vision_switch' is designed to conditionally select between two input images based on a boolean flag. It acts as a decision node in the workflow, allowing image data to be routed to different parts of the system depending on the provided boolean value.

# Input types
## Required
- clip_vision_a
    - The parameter 'clip_vision_a' represents the first image option that the node can select. It is crucial for the decision process because it determines one of the potential outputs based on the boolean flag.
    - Comfy dtype: CLIP_VISION
    - Python dtype: Union[Image.Image, PIL.PngImagePlugin.PngImageFile]
- clip_vision_b
    - The parameter 'clip_vision_b' is the alternative image option that the node may select when the boolean flag is false. It plays an important role in the node's functionality by providing a secondary output option.
    - Comfy dtype: CLIP_VISION
    - Python dtype: Union[Image.Image, PIL.PngImagePlugin.PngImageFile]
## Optional
- boolean
    - The parameter 'boolean' acts as a switch that determines which image the node returns. It is crucial for controlling the flow of image data in the system.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- CLIP_VISION
    - The output of the method 'clip_vision_switch' is a single image determined by the boolean flag. It represents the result of the node's decision process and is essential for downstream processing.
    - Comfy dtype: CLIP_VISION
    - Python dtype: Union[Image.Image, PIL.PngImagePlugin.PngImageFile]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_CLIP_Vision_Input_Switch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'clip_vision_a': ('CLIP_VISION',), 'clip_vision_b': ('CLIP_VISION',), 'boolean': ('BOOLEAN', {'forceInput': True})}}
    RETURN_TYPES = ('CLIP_VISION',)
    FUNCTION = 'clip_vision_switch'
    CATEGORY = 'WAS Suite/Logic'

    def clip_vision_switch(self, clip_vision_a, clip_vision_b, boolean=True):
        if boolean:
            return (clip_vision_a,)
        else:
            return clip_vision_b
```