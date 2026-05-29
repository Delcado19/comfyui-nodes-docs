# Documentation
- Class name: CR_IncrementFloat
- Category: Comfyroll/Animation/Interpolate
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_IncrementFloat is a node designed to gradually adjust a floating‑point value over a specified duration. It smoothly transitions from a start value to an incremented value based on the current frame in the animation timeline, enabling dynamic, time‑based animations.

# Input types
## Required
- start_value
- The initial value where the increment begins. It serves as the reference point for the node operation, affecting the start of the animation sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- step
- The increment step value, defining the change of the floating‑point per frame. It is crucial for determining the rate of increase or decrease in the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_frame
- The frame number at which the increment process starts. It determines when the animation’s incremental change begins.
    - Comfy dtype: INT
    - Python dtype: int
- frame_duration
- The total number of frames over which the increment occurs. It sets the duration of the incremental animation effect.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
- The current frame in the animation timeline. It is used to compute the current increment value based on frame progression.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- FLOAT
- The resulting incremented floating‑point value after applying the increment logic on the current frame.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
- A URL link to the node documentation for further help and information on its usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_IncrementFloat:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'start_value': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 0.001}), 'step': ('FLOAT', {'default': 0.1, 'min': -9999.0, 'max': 9999.0, 'step': 0.001}), 'start_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'frame_duration': ('INT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('FLOAT', 'STRING')
    RETURN_NAMES = ('FLOAT', 'show_help')
    OUTPUT_NODE = True
    FUNCTION = 'increment'
    CATEGORY = icons.get('Comfyroll/Animation/Interpolate')

    def increment(self, start_value, step, start_frame, frame_duration, current_frame):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Interpolation-Nodes#cr-increment-float'
        if current_frame < start_frame:
            return (start_value, show_help)
        current_value = start_value + (current_frame - start_frame) * step
        if current_frame <= start_frame + frame_duration:
            current_value += step
            return (current_value, show_help)
        return (current_value, show_help)
```