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
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
