# Documentation
- Class name: CR_SimpleValueScheduler
- Category: Comfyroll/Animation/Schedulers
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimpleValueScheduler is a node that manages and interpolates keyframe schedules for value scheduling. It plays a crucial role in creating smooth transitions and dynamic changes between frames, offering users a simple and direct way to arrange and operate values over time.

# Input types
## Required
- schedule
- The schedule input is essential for defining keyframe values that change over time. It allows specifying different values at different frames, enabling the node to interpolate between them.
    - Comfy dtype: STRING
    - Python dtype: str
- current_frame
- The current_frame parameter indicates the current position in the animation timeline. It is vital for determining which scheduled value to apply at any given moment.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- INT
- The INT output provides an integer representation of the scheduled value for the current frame, usable for numerical operations in the animation pipeline.
    - Comfy dtype: INT
    - Python dtype: int
- FLOAT
- The FLOAT output offers a floating-point interpretation of the scheduled value, suitable for more precise calculations and adjustments during animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
- The show_help output supplies a documentation link for further guidance and assistance when using the CR_SimpleValueScheduler node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SimpleValueScheduler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'schedule': ('STRING', {'multiline': True, 'default': 'frame_number, value'}), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('INT', 'FLOAT', 'STRING')
    RETURN_NAMES = ('INT', 'FLOAT', 'show_help')
    FUNCTION = 'simple_schedule'
    CATEGORY = icons.get('Comfyroll/Animation/Schedulers')

    def simple_schedule(self, schedule, current_frame):
        schedule_lines = list()
        if schedule == '':
            print(f'[Warning] CR Simple Value Scheduler. No lines in schedule')
            return ()
        lines = schedule.split('\n')
        for line in lines:
            schedule_lines.extend([('SIMPLE', line)])
        params = keyframe_scheduler(schedule_lines, 'SIMPLE', current_frame)
        if params == '':
            print(f'[Warning] CR Simple Value Scheduler. No schedule found for frame. Simple schedules must start at frame 0.')
        else:
            try:
                int_out = int(params.split('.')[0])
                float_out = float(params)
            except ValueError:
                print(f'[Warning] CR Simple Value Scheduler. Invalid params {params} at frame {current_frame}')
            show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Scheduler-Nodes#cr-simple-value-scheduler'
            return (int_out, float_out, show_help)
```