# Documentation
- Class name: CR_PromptScheduler
- Category: Comfyroll/Animation/Schedulers
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_PromptScheduler is a node for managing and scheduling prompts based on keyframes or predefined schedules. It allows users to set default prompts, interpolate between prompts, and customize scheduling formats to meet various needs. The node's functionality is centered on providing a seamless way to handle dynamic prompts for animations or other time-based applications.

# Input types
## Required
- mode
    - Mode determines the scheduling method used by the node. It decides whether to apply the default prompt, follow a keyframe list, or implement more complex scheduling.
    - Comfy dtype: COMBO['Default Prompt', 'Keyframe List', 'Schedule']
    - Python dtype: str
- current_frame
    - Current frame is the reference point for the scheduler to determine which prompt to apply. It is critical to the node's execution as it directly influences the selection of prompts based on the provided schedule.
    - Comfy dtype: INT
    - Python dtype: int
- default_prompt
    - Default prompt serves as fallback text when no specific prompt is scheduled for the current frame. It ensures that a prompt is always available even without a defined schedule.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_format
    - Schedule format specifies the structure of the input schedule data. It is important because it informs the node how to interpret and process the schedule information provided by the user.
    - Comfy dtype: COMBO['CR', 'Deforum']
    - Python dtype: str
- interpolate_prompt
    - Interpolation prompts determine whether the node should interpolate between prompts for smoother transitions. This can enhance the fluidity of animations or applications using prompts.
    - Comfy dtype: COMBO['Yes', 'No']
    - Python dtype: str
## Optional
- keyframe_list
    - Keyframe list provides multi-line input for defining keyframes and their associated prompts. Used when the mode is set to 'Keyframe List', it is essential for creating frame-specific prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- prepend_text
    - Prepend text allows users to add custom text before the prompt. This is useful for including additional context or information alongside the main prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- append_text
    - Append text allows adding custom text after the prompt. It provides flexibility to extend the prompt with more details or to end it with a specific conclusion.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- current_prompt
    - Current prompt represents the prompt currently active according to the scheduler's evaluation. It is the output directly used in the application or animation.
    - Comfy dtype: STRING
    - Python dtype: str
- next_prompt
    - Next prompt indicates the prompt that will be active for the next frame. This is useful for previewing or preparing for upcoming changes in the prompt sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
    - Weight is a float value representing the transition progress between prompts. It is particularly relevant when interpolation prompts is set to 'Yes', indicating the degree of interpolation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - Show help provides a URL link to the documentation or help page associated with the node. It serves as a quick reference for users seeking more information or assistance regarding the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_PromptScheduler:

    @classmethod
    def INPUT_TYPES(s):
        modes = ['Default Prompt', 'Keyframe List', 'Schedule']
        return {'required': {'mode': (modes,), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'default_prompt': ('STRING', {'multiline': False, 'default': 'default prompt'}), 'schedule_format': (['CR', 'Deforum'],), 'interpolate_prompt': (['Yes', 'No'],)}, 'optional': {'schedule': ('SCHEDULE',), 'schedule_alias': ('STRING', {'default prompt': '', 'multiline': False}), 'keyframe_list': ('STRING', {'multiline': True, 'default': 'keyframe list'}), 'prepend_text': ('STRING', {'multiline': True, 'default': 'prepend text'}), 'append_text': ('STRING', {'multiline': True, 'default': 'append text'})}}
    RETURN_TYPES = ('STRING', 'STRING', 'FLOAT', 'STRING')
    RETURN_NAMES = ('current_prompt', 'next_prompt', 'weight', 'show_help')
    FUNCTION = 'schedule'
    CATEGORY = icons.get('Comfyroll/Animation/Schedulers')

    def schedule(self, mode, prepend_text, append_text, current_frame, schedule_alias, default_prompt, schedule_format, interpolate_prompt, keyframe_list='', schedule=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Scheduler-Nodes#cr-prompt-scheduler'
        schedule_lines = list()
        if mode == 'Default Prompt':
            print(f'[Info] CR Prompt Scheduler: Scheduler {schedule_alias} is disabled')
            return (default_prompt, default_prompt, 1.0, show_help)
        if mode == 'Keyframe List':
            if keyframe_list == '':
                print(f'[Error] CR Prompt Scheduler: No keyframe list found.')
                return ()
            else:
                lines = keyframe_list.split('\n')
                for line in lines:
                    if schedule_format == 'Deforum':
                        line = line.replace(':', ',')
                        line = line.rstrip(',')
                        line = line.lstrip()
                    if not line.strip():
                        print(f'[Warning] CR Simple Prompt Scheduler. Skipped blank line at line {i}')
                        continue
                    schedule_lines.extend([(schedule_alias, line)])
                schedule = schedule_lines
        if mode == 'Schedule':
            if schedule is None:
                print(f'[Error] CR Prompt Scheduler: No schedule found.')
                return ()
            if schedule_format == 'Deforum':
                for item in schedule:
                    (alias, line) = item
                    line = line.replace(':', ',')
                    line = line.rstrip(',')
                    schedule_lines.extend([(schedule_alias, line)])
                schedule = schedule_lines
        (current_prompt, next_prompt, current_keyframe, next_keyframe) = prompt_scheduler(schedule, schedule_alias, current_frame)
        if current_prompt == '':
            print(f'[Warning] CR Simple Prompt Scheduler. No prompt found for frame. Schedules should start at frame 0.')
        else:
            try:
                current_prompt_out = prepend_text + ', ' + str(current_prompt) + ', ' + append_text
                next_prompt_out = prepend_text + ', ' + str(next_prompt) + ', ' + append_text
                from_index = int(current_keyframe)
                to_index = int(next_keyframe)
            except ValueError:
                print(f'[Warning] CR Simple Text Scheduler. Invalid keyframe at frame {current_frame}')
        if from_index == to_index or interpolate_prompt == 'No':
            weight_out = 1.0
        else:
            weight_out = (to_index - current_frame) / (to_index - from_index)
        return (current_prompt_out, next_prompt_out, weight_out, show_help)
```