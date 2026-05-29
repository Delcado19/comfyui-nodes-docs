# Documentation
- Class name: CR_SimpleTextScheduler
- Category: Comfyroll/Animation/Schedulers
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimpleTextScheduler is a node for managing and scheduling text output, based on predefined keyframe sets and the current frame in the animation sequence. It provides users with a simple interface to input a schedule and retrieve the corresponding text for a given frame, ensuring seamless integration of dynamic text elements in the animation.

# Input types
## Required
- schedule
    - schedule is a string parameter containing keyframe information of the text scheduler. It is crucial for defining the order of text changes throughout the animation. The multiline property allows for more complex schedule definitions that can be input across multiple lines.
    - Comfy dtype: STRING
    - Python dtype: str
- current_frame
    - current_frame parameter indicates the current position in the animation sequence. It is essential for determining which text from the schedule should be displayed at any given moment. The integer type ensures precise frame tracking.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- text_out
    - text_out parameter represents the text scheduled to display at the current frame. This is the main output of the node, providing dynamic text content consistent with the animation progress.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - show_help parameter provides a documentation URL link for further assistance. It is particularly useful for users who need more information on how to use the node or troubleshoot issues.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SimpleTextScheduler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'schedule': ('STRING', {'multiline': True, 'default': 'frame_number, text'}), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('STRING', 'show_help')
    FUNCTION = 'simple_schedule'
    CATEGORY = icons.get('Comfyroll/Animation/Schedulers')

    def simple_schedule(self, schedule, current_frame):
        schedule_lines = list()
        if schedule == '':
            print(f'[Warning] CR Simple Text Scheduler. No lines in schedule')
            return ()
        lines = schedule.split('\n')
        for line in lines:
            schedule_lines.extend([('SIMPLE', line)])
        params = keyframe_scheduler(schedule_lines, 'SIMPLE', current_frame)
        if params == '':
            print(f'[Warning] CR Simple Text Scheduler. No schedule found for frame. Simple schedules must start at frame 0.')
        else:
            try:
                text_out = str(params)
            except ValueError:
                print(f'[Warning] CR Simple Text Scheduler. Invalid params {params} at frame {current_frame}')
            show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Scheduler-Nodes#cr-simple-text-scheduler'
            return (text_out, show_help)
```