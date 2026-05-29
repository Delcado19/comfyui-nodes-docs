# Documentation
- Class name: CR_PromptListKeyframes
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_PromptListKeyframes node is designed to generate keyframes from a prompt list. It processes the input prompt list, following a specific keyframe format, to create a sequence of keyframes that can be used in animation workflows. This node is essential for automating the keyframe creation process, ensuring consistency and efficiency when generating animation sequences.

# Input types
## Required
- prompt_list
    - The prompt list is a critical input to the node, as it contains the prompts that will be converted into keyframes. Each prompt in the list is part of a keyframe, and the node iterates through this list to generate the final keyframe sequence.
    - Comfy dtype: PROMPT_LIST
    - Python dtype: List[Tuple[str, str, str, str, int, int]]
## Optional
- keyframe_format
    - The keyframe format parameter determines the structure and style of the generated keyframes. Although the node defaults to the 'Deforum' format, this parameter allows flexibility for supporting other formats in the future if needed.
    - Comfy dtype: COMBO['Deforum']
    - Python dtype: Literal['Deforum']

# Output types
- keyframe_list
    - The keyframe list is the primary output of the node, representing the formatted keyframe string. This output can be used directly in animation software to define sequences of animation keyframes.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The display help output provides a URL link to the documentation or help page associated with the node. This is very useful for users seeking more information or guidance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_PromptListKeyframes:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompt_list': ('PROMPT_LIST',), 'keyframe_format': (['Deforum'],)}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('keyframe_list', 'show_help')
    FUNCTION = 'make_keyframes'
    CATEGORY = icons.get('Comfyroll/Animation/Legacy')

    def make_keyframes(self, prompt_list, keyframe_format):
        keyframe_format = 'Deforum'
        keyframe_list = list()
        i = 0
        for (index, prompt_tuple) in enumerate(prompt_list):
            (prompt, transition_type, transition_speed, transition_profile, keyframe_interval, loops) = prompt_tuple
            if i == 0:
                keyframe_list.extend(['"0": "' + prompt + '",\n'])
                i += keyframe_interval
                continue
            new_keyframe = '"' + str(i) + '": "' + prompt + '",\n'
            keyframe_list.extend([new_keyframe])
            i += keyframe_interval
        keyframes_out = ''.join(keyframe_list)[:-2]
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Prompt-Nodes#cr-prompt-list-keyframes'
        return (keyframes_out, show_help)
```