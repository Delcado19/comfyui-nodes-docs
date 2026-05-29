# Documentation
- Class name: CR_KeyframeList
- Category: Comfyroll/Animation/Prompt
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_KeyframeList node manages and processes a list of keyframes, which are sequences of frames defining an animation timeline. It plays a crucial role in the animation workflow by allowing users to input keyframe data and specify a format for correct interpretation.

# Input types
## Required
- keyframe_list
    - The keyframe list is a string containing a sequence of frames that define the animation. It is essential to the node because it directly affects the output animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- keyframe_format
    - The keyframe format parameter determines how the keyframe list is interpreted. It is important for ensuring the node correctly understands and processes the keyframe data.
    - Comfy dtype: COMBO['Deforum', 'CR']
    - Python dtype: str

# Output types
- keyframe_list
    - The processed keyframe list, formatted according to the specified keyframe format, is ready for the animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - A URL linking to a documentation page that provides additional information and guidance on using the keyframe list feature.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_KeyframeList:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'keyframe_list': ('STRING', {'multiline': True, 'default': 'keyframes'}), 'keyframe_format': (['Deforum', 'CR'],)}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('keyframe_list', 'show_help')
    FUNCTION = 'keyframelist'
    CATEGORY = icons.get('Comfyroll/Animation/Prompt')

    def keyframelist(self, keyframe_list, keyframe_format):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Prompt-Nodes#cr-keyframe-list'
        return (keyframe_list, show_help)
```