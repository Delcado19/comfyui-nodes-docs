# Documentation
- Class name: SinWave
- Category: FizzNodes 📅🅕🅝/WaveNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The SinWave node is designed to generate sine wave patterns. It simulates wave behavior by calculating the y position for a given frame based on provided parameters. This node is particularly useful for applications requiring periodic functions to simulate oscillations or create visual effects.

# Input types
## Required
- phase
    - The phase parameter determines the wave's period. It is critical as it dictates the frequency of oscillation, thereby affecting the overall shape and pattern of the wave.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
    - Amplitude sets the peak of the wave, controlling the height of oscillation. It is a key parameter that influences the intensity of the waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- current_frame
    - The current frame parameter specifies the frame for which the wave calculation is performed. This is essential for determining the wave's y position at a specific point in time.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- x_translation
    - X translation allows horizontal shifting of the wave along the X axis. This can be used to adjust the position of the waveform to meet specific design requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_translation
    - Y translation is responsible for vertical shifting of the wave along the Y axis, allowing the starting point of the wave to be adjusted.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
    - The output represents the calculated y position of the wave for the current frame. It is important because it provides the actual value for further processing or visualization.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int_output
    - The integer output is the wave's y position converted to an integer, which is useful in scenarios where discrete values are required.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SinWave:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'phase': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'amplitude': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.1}), 'x_translation': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'y_translation': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.05}), 'current_frame': ('INT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('FLOAT', 'INT')
    FUNCTION = 'Wave'
    CATEGORY = 'FizzNodes 📅🅕🅝/WaveNodes'

    def Wave(self, phase, amplitude, x_translation, y_translation, current_frame):
        output = y_translation + amplitude * np.sin(2 * np.pi * current_frame / phase - x_translation)
        print(output)
        return (output, int(output))
```