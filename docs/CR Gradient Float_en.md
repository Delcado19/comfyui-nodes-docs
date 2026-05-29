# Documentation
- Class name: CR_GradientFloat
- Category: Comfyroll/Animation/Interpolate
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_GradientFloat node is designed to generate a smooth transition between two float values over a specified duration. It calculates the current value based on the start and end values, the frame at which the transition begins, and the total duration of the transition. This node is particularly useful for creating dynamic changes in animation parameters over time.

# Input types
## Required
- start_value
    - The Start Value parameter defines the initial value of the gradient. It is essential for setting the base point from which the transition begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_value
    - The End Value parameter specifies the final value that the gradient will reach at the end of the transition. It is crucial for determining the range of the change.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_frame
    - The Start Frame parameter indicates the frame number at which the gradient transition will begin. It is important for timing the start of animation effects.
    - Comfy dtype: INT
    - Python dtype: int
- frame_duration
    - The Frame Duration parameter determines the number of frames over which the gradient transition occurs. It affects the speed of the transition.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The Current Frame parameter represents the current frame number in the sequence. It is used to calculate the current state of the gradient at this point in time.
    - Comfy dtype: INT
    - Python dtype: int
- gradient_profile
    - The Gradient Profile parameter defines the type of interpolation method used for the gradient. It influences how values between the start and end are calculated.
    - Comfy dtype: COMBO['Lerp']
    - Python dtype: str

# Output types
- FLOAT
    - The FLOAT output provides the calculated value of the gradient at the current frame, representing the current state of the transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The show_help output provides a URL to the node's documentation page, offering additional information and guidance on its usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_GradientFloat:

    @classmethod
    def INPUT_TYPES(s):
        gradient_profiles = ['Lerp']
        return {'required': {'start_value': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 0.01}), 'end_value': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 0.01}), 'start_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'frame_duration': ('INT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'gradient_profile': (gradient_profiles,)}}
    RETURN_TYPES = ('FLOAT', 'STRING')
    RETURN_NAMES = ('FLOAT', 'show_help')
    FUNCTION = 'gradient'
    CATEGORY = icons.get('Comfyroll/Animation/Interpolate')

    def gradient(self, start_value, end_value, start_frame, frame_duration, current_frame, gradient_profile):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Interpolation-Nodes#cr-gradient-float'
        if current_frame < start_frame:
            return (start_value, show_help)
        if current_frame > start_frame + frame_duration:
            return (end_value, show_help)
        step = (end_value - start_value) / frame_duration
        current_step = current_frame - start_frame
        float_out = start_value + current_step * step
        return (float_out, show_help)
```