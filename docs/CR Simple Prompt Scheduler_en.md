# Documentation
- Class name: CR_SimplePromptScheduler
- Category: Comfyroll/Animation/Schedulers
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimplePromptScheduler is a node for managing and scheduling prompts based on a keyframe list. It allows automatic prompt changes at specific frames, facilitating dynamic and frame-specific content creation without manual intervention. This node is essential for simplifying the drawing process, especially when handling complex sequences requiring precise prompt adjustments.

# Input types
## Required
- keyframe_list
    - The keyframe list is a critical parameter that defines the sequence of prompts and their corresponding frames. It enables the node to schedule prompts efficiently, ensuring the correct prompt is displayed at the right time in the animation.
    - Comfy dtype: STRING
    - Python dtype: str
- current_frame
    - The current frame parameter is crucial as it indicates the current point on the animation timeline. The node uses this information to determine which prompt in the keyframe list should be active for the ongoing frame.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- keyframe_format
    - The keyframe format parameter specifies the structure of keyframe data, allowing the node to correctly parse and interpret the keyframe list. It is important for maintaining the integrity and accuracy of scheduled prompts.
    - Comfy dtype: COMBO['CR', 'Deforum']
    - Python dtype: str

# Output types
- current_prompt
    - The current prompt output provides the active prompt for the current frame. It is important as it directly affects the content displayed or processed in the animation.
    - Comfy dtype: STRING
    - Python dtype: str
- next_prompt
    - The next prompt output indicates the prompt that will be active in the next frame. This allows anticipation of upcoming content and can be used for smooth transitions between prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
    - The weight output represents the transition weight between the current prompt and the next prompt. It is used for interpolating prompts to achieve gradual changes, enhancing the smoothness of the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The show help output provides a link to documentation for further assistance. It is useful for users who need more information about node functionality or require troubleshooting support.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SimplePromptScheduler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'keyframe_list': ('STRING', {'multiline': True, 'default': 'frame_number, text'}), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'keyframe_format': (['CR', 'Deforum'],)}}
    RETURN_TYPES = ('STRING', 'STRING', 'FLOAT', 'STRING')
    RETURN_NAMES = ('current_prompt', 'next_prompt', 'weight', 'show_help')
    FUNCTION = 'simple_schedule'
    CATEGORY = icons.get('Comfyroll/Animation/Schedulers')

    def simple_schedule(self, keyframe_list, keyframe_format, current_frame):
        keyframes = list()
        if keyframe_list == '':
            print(f'[Error] CR Simple Prompt Scheduler. No lines in keyframe list')
            return ()
        lines = keyframe_list.split('\n')
        for line in lines:
            if keyframe_format == 'Deforum':
                line = line.replace(':', ',')
                line = line.rstrip(',')
            if not line.strip():
                print(f'[Warning] CR Simple Prompt Scheduler. Skipped blank line at line {i}')
                continue
            keyframes.extend([('SIMPLE', line)])
        (current_prompt, next_prompt, current_keyframe, next_keyframe) = prompt_scheduler(keyframes, 'SIMPLE', current_frame)
        if current_prompt == '':
            print(f'[Warning] CR Simple Prompt Scheduler. No prompt found for frame. Simple schedules must start at frame 0.')
        else:
            try:
                current_prompt_out = str(current_prompt)
                next_prompt_out = str(next_prompt)
                from_index = int(current_keyframe)
                to_index = int(next_keyframe)
            except ValueError:
                print(f'[Warning] CR Simple Text Scheduler. Invalid keyframe at frame {current_frame}')
            if from_index == to_index:
                weight_out = 1.0
            else:
                weight_out = (to_index - current_frame) / (to_index - from_index)
            show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Scheduler-Nodes#cr-simple-prompt-scheduler'
            return (current_prompt_out, next_prompt_out, weight_out, show_help)
```