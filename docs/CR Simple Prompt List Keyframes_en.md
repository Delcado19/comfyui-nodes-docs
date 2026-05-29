# Documentation
- Class name: CR_SimplePromptListKeyframes
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimplePromptListKeyframes is a node for generating a series of keyframes from a prompt list. It orchestrates the creation of keyframe data by iterating over the prompt list and applying specified time intervals for each keyframe. This node can handle multiple loops and transitions, allowing customized animation sequences.

# Input types
## Required
- simple_prompt_list
    - simple_prompt_list parameter is a collection of prompts used to generate keyframes. Each prompt in the list corresponds to a keyframe in the final output.
    - Comfy dtype: STRING
    - Python dtype: List[str]
## Optional
- keyframe_interval
    - keyframe_interval parameter defines the time increment between each keyframe. It is crucial for controlling the tempo of the animation sequence and can be adjusted to control the speed of transitions.
    - Comfy dtype: INT
    - Python dtype: int
- loops
    - loops parameter specifies the number of times the keyframe sequence should be repeated. It is a fundamental aspect of creating repeating or looping animations.
    - Comfy dtype: INT
    - Python dtype: int
- transition_type
    - transition_type parameter determines the style of transitions between keyframes. It affects the visual flow of the animation and can be set to 'Default' or other predefined options.
    - Comfy dtype: COMBO['Default']
    - Python dtype: str
- transition_speed
    - transition_speed parameter indicates the speed of transitions between keyframes. It can be set to 'Default' or other options to control the pace of transitions.
    - Comfy dtype: COMBO['Default']
    - Python dtype: str
- transition_profile
    - transition_profile parameter sets the profile of the transition, which can affect how the transition appears over time. It is set to 'Default' or other profiles for different effects.
    - Comfy dtype: COMBO['Default']
    - Python dtype: str
- keyframe_format
    - keyframe_format parameter specifies the display format of keyframes. The 'Deforum' option is used to ensure compatibility with certain animation systems.
    - Comfy dtype: COMBO['Deforum']
    - Python dtype: str

# Output types
- keyframe_list
    - keyframe_list output is a string representation of the generated keyframes. Its format can be directly used in animation systems.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - show_help output provides a URL link to documentation for further assistance and understanding on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SimplePromptListKeyframes:

    @classmethod
    def INPUT_TYPES(s):
        transition_types = ['Default']
        transition_speeds = ['Default']
        transition_profiles = ['Default']
        return {'required': {'simple_prompt_list': ('SIMPLE_PROMPT_LIST',), 'keyframe_interval': ('INT', {'default': 30, 'min': 0, 'max': 999, 'step': 1}), 'loops': ('INT', {'default': 1, 'min': 1, 'max': 1000}), 'transition_type': (transition_types,), 'transition_speed': (transition_speeds,), 'transition_profile': (transition_profiles,), 'keyframe_format': (['Deforum'],)}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('keyframe_list', 'show_help')
    FUNCTION = 'make_keyframes'
    CATEGORY = icons.get('Comfyroll/Animation/Legacy')

    def make_keyframes(self, simple_prompt_list, keyframe_interval, loops, transition_type, transition_speed, transition_profile, keyframe_format):
        keyframe_format = 'Deforum'
        keyframe_list = list()
        i = 0
        for j in range(1, loops + 1):
            for (index, prompt) in enumerate(simple_prompt_list):
                if i == 0:
                    keyframe_list.extend(['"0": "' + prompt + '",\n'])
                    i += keyframe_interval
                    continue
                new_keyframe = '"' + str(i) + '": "' + prompt + '",\n'
                keyframe_list.extend([new_keyframe])
                i += keyframe_interval
        keyframes_out = ' '.join(keyframe_list)[:-2]
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Prompt-Nodes#cr-simple-prompt-list-keyframes'
        return (keyframes_out, show_help)
```