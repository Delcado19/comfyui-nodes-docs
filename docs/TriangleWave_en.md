# Documentation
- Class name: TriangleWave
- Category: FizzNodes 📅🅕🅝/WaveNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The TriangleWave node is designed to generate a waveform resembling a triangle. It creates a unique triangular pattern by adjusting the amplitude and phase of a sine wave, which is useful for various signal processing applications.

# Input types
## Required
- phase
- The phase parameter determines the period length of the waveform, affecting the frequency of the generated triangle wave.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
- The amplitude sets the peak value of the triangle wave, a key factor defining the overall shape and energy of the signal.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_translation
- X offset moves the waveform along the X axis, allowing adjustment of its horizontal position.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_translation
- Y offset moves the waveform along the Y axis, affecting the vertical starting point of the waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- current_frame
- The current frame parameter specifies the current position in the waveform sequence, essential for the temporal evolution of the signal.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
- The output parameter represents the computed value of the triangle wave for a given frame, the core result of the node operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int_output
- The integer output is a version that converts the wave value to an integer, useful for applications requiring discrete values.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class TriangleWave:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'phase': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'amplitude': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.1}), 'x_translation': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'y_translation': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.05}), 'current_frame': ('INT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('FLOAT', 'INT')
    FUNCTION = 'Wave'
    CATEGORY = 'FizzNodes 📅🅕🅝/WaveNodes'

    def Wave(self, phase, amplitude, x_translation, y_translation, current_frame):
        output = y_translation + amplitude / np.pi * np.arcsin(np.sin(2 * np.pi / phase * current_frame - x_translation))
        print(output)
        return (output, int(output))
```