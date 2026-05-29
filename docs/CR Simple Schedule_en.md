# Documentation
- Class name: CR_SimpleSchedule
- Category: Comfyroll/Animation/Schedule
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimpleSchedule is a node for managing and organizing schedules of various tasks in an animation workflow. It processes input schedules, categorizes them by type, and formats them for use in different contexts, ensuring a streamlined approach to scheduling in Comfyroll.

# Input types
## Required
- schedule
    - The `schedule` parameter is essential for defining the schedule content. It should be a multi-line string, each line representing a distinct schedule item. This input provides the raw data that will be processed and formatted, driving the node's core functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_type
    - The `schedule_type` parameter determines the category of schedule items. It is a key component because it dictates how the schedule is interpreted and used within the system. Each type may correspond to different processing mechanisms or logic.
    - Comfy dtype: COMBO['Value', 'Text', 'Prompt', 'Prompt Weight', 'Model', 'LoRA', 'ControlNet', 'Style', 'Upscale', 'Camera', 'Job']
    - Python dtype: str
## Optional
- schedule_alias
    - The `schedule_alias` parameter gives the schedule an alternative name or identifier, which is useful for referencing or organizing schedules in larger workflows. Although optional, it adds flexibility to the scheduling process.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_format
    - The `schedule_format` parameter specifies the desired output format of the schedule. It allows users to choose among different formatting styles, which is crucial for compatibility with various systems or user preferences.
    - Comfy dtype: COMBO['CR', 'Deforum']
    - Python dtype: str

# Output types
- SCHEDULE
    - The `SCHEDULE` output is a list of tuples, each containing a schedule alias and the corresponding line from the input schedule. This output represents the processed and formatted schedule, ready for downstream applications or systems.
    - Comfy dtype: LIST[Tuple[str, str]]
    - Python dtype: List[Tuple[str, str]]
- show_help
    - The `show_help` output provides a URL link to documentation for additional assistance. This is valuable for users who need more information on how to use the node or understand its features.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SimpleSchedule:

    @classmethod
    def INPUT_TYPES(s):
        schedule_types = ['Value', 'Text', 'Prompt', 'Prompt Weight', 'Model', 'LoRA', 'ControlNet', 'Style', 'Upscale', 'Camera', 'Job']
        return {'required': {'schedule': ('STRING', {'multiline': True, 'default': 'frame_number, item_alias, [attr_value1, attr_value2]'}), 'schedule_type': (schedule_types,), 'schedule_alias': ('STRING', {'default': '', 'multiline': False}), 'schedule_format': (['CR', 'Deforum'],)}}
    RETURN_TYPES = ('SCHEDULE', 'STRING')
    RETURN_NAMES = ('SCHEDULE', 'show_help')
    FUNCTION = 'send_schedule'
    CATEGORY = icons.get('Comfyroll/Animation/Schedule')

    def send_schedule(self, schedule, schedule_type, schedule_alias, schedule_format):
        schedule_lines = list()
        if schedule != '' and schedule_alias != '':
            lines = schedule.split('\n')
            for line in lines:
                if not line.strip():
                    print(f'[Warning] CR Simple Schedule. Skipped blank line: {line}')
                    continue
                schedule_lines.extend([(schedule_alias, line)])
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Schedule-Nodes#cr-simple-schedule'
        return (schedule_lines, show_help)
```