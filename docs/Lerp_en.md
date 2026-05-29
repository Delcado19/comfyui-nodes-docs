# Documentation
- Class name: Lerp
- Category: FizzNodes 📅🅕🅝/WaveNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The Lerp node performs linear interpolation between two values, providing a smooth transition influenced by a strength parameter and the current frame in an image sequence. It is typically used in animation and data visualization to create a gradual change from one state to another.

# Input types
## Required
- num_Images
    - The image count parameter defines the total number of frames or images in the sequence, influencing the step size of the interpolation. This is critical for determining the granularity of transitions between values.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength
    - The strength parameter controls the extent of interpolation between the start and end values. It is a key factor in the speed at which the transition occurs in the image sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- current_frame
    - The current frame parameter specifies the current position within the image sequence. It is essential for calculating the current state of interpolation at any given time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output of the Lerp node is the result of linear interpolation, providing a value that represents the current state of the transition based on the input parameters.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_index
    - The frame index output indicates the frame number at which the current interpolation state is calculated, which is useful for aligning with other sequence‑based processes.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class Lerp:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'num_Images': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'current_frame': ('INT', {'default': 1.0, 'min': 0.0, 'max': 9999, 'step': 1.0})}}
    RETURN_TYPES = ('FLOAT', 'INT')
    FUNCTION = 'lerp'
    CATEGORY = 'FizzNodes 📅🅕🅝/WaveNodes'

    def lerp(self, num_Images, strength, current_frame):
        step = strength / num_Images
        output = strength - step * current_frame
        return (output, int(output))
```