# Documentation
- Class name: CR_CentralSchedule
- Category: Animation/Schedule
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

This node integrates multiple types of inputs, including text, prompts, and models, to create and manage complex animation schedules, generating a coherent and dynamic timeline for animation execution.

# Input types
## Required
- schedule_1
    - Main scheduling text, outlining the sequence of animation actions. It is the core of node operation as it provides the foundation for schedule construction.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_type1
    - Specifies the type of schedule, influencing how the node interprets and processes the input text, affecting the overall structure and execution of the animation schedule.
    - Comfy dtype: COMBO
    - Python dtype: str
- schedule_format
    - Determines the presentation format of the final schedule, affecting the readability and usability of the animation schedule for further processing or review.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- schedule_alias1
    - Alias for the first schedule, can be used for reference or labeling purposes, improving the readability and organization of the animation schedule.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_2
    - Additional schedule text that supplements the main schedule, allowing more complex animation sequences and action layering.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_type2
    - Defines the type for the second schedule, guiding the node to process and integrate it with the main schedule, forming a comprehensive animation plan.
    - Comfy dtype: COMBO
    - Python dtype: str
- schedule_alias2
    - Alias for the second schedule, helps identify and manage multiple schedules within the animation timeline.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_3
    - Third schedule text, further extending the animation sequence, enabling the node to handle complex animations with multiple layers and intricate timing.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_type3
    - Indicates the type of the third schedule, helping the node organize and execute additional animation layers within the overall schedule.
    - Comfy dtype: COMBO
    - Python dtype: str
- schedule_alias3
    - Alias for the third schedule, providing clarity and ease of management for complex animation sequences involving multiple schedules.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- SCHEDULE
    - Compiled and formatted animation schedule, encapsulating the sequence of actions and timing in a structured format for execution in the animation system.
    - Comfy dtype: SCHEDULE
    - Python dtype: Tuple[str, List[Tuple[str, str]]]
- show_text
    - Human-readable representation of the animation schedule, providing a clear overview of the sequence and details for review and reference.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_CentralSchedule:

    @classmethod
    def INPUT_TYPES(cls):
        schedule_types = ['Value', 'Text', 'Prompt', 'Prompt Weight', 'Model', 'LoRA', 'ControlNet', 'Style', 'Upscale', 'Camera', 'Job']
        return {'required': {'schedule_1': ('STRING', {'multiline': True, 'default': 'schedule'}), 'schedule_type1': (schedule_types,), 'schedule_alias1': ('STRING', {'multiline': False, 'default': ''}), 'schedule_2': ('STRING', {'multiline': True, 'default': 'schedule'}), 'schedule_type2': (schedule_types,), 'schedule_alias2': ('STRING', {'multiline': False, 'default': ''}), 'schedule_3': ('STRING', {'multiline': True, 'default': 'schedule'}), 'schedule_type3': (schedule_types,), 'schedule_alias3': ('STRING', {'multiline': False, 'default': ''}), 'schedule_format': (['CR', 'Deforum'],)}, 'optional': {'schedule': ('SCHEDULE',)}}
    RETURN_TYPES = ('SCHEDULE', 'STRING')
    RETURN_NAMES = ('SCHEDULE', 'show_text')
    FUNCTION = 'build_schedule'
    CATEGORY = icons.get('Comfyroll/Animation/Schedule')

    def build_schedule(self, schedule_1, schedule_type1, schedule_alias1, schedule_2, schedule_type2, schedule_alias2, schedule_3, schedule_type3, schedule_alias3, schedule_format, schedule=None):
        schedules = list()
        schedule_text = list()
        if schedule is not None:
            schedules.extend([l for l in schedule])
            (schedule_text.extend([l for l in schedule]),)
        if schedule_1 != '' and schedule_alias1 != '':
            lines = schedule_1.split('\n')
            for line in lines:
                (schedules.extend([(schedule_alias1, line)]),)
            (schedule_text.extend([schedule_alias1 + ',' + schedule_1 + '\n']),)
        if schedule_2 != '' and schedule_alias2 != '':
            lines = schedule_2.split('\n')
            for line in lines:
                (schedules.extend([(schedule_alias2, line)]),)
            (schedule_text.extend([schedule_alias2 + ',' + schedule_2 + '\n']),)
        if schedule_3 != '' and schedule_alias3 != '':
            lines = schedule_3.split('\n')
            for line in lines:
                (schedules.extend([(schedule_alias3, line)]),)
            (schedule_text.extend([schedule_alias3 + ',' + schedule_3 + '\n']),)
        show_text = ''.join(schedule_text)
        return (schedules, show_text)
```