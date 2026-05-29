# Documentation
- Class name: AbsSinWave
- Category: FizzNodes 📅🅕🅝/WaveNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

Generate an absolute sine wave pattern that oscillates between a specified maximum value and zero, influenced by phase, amplitude, and translation parameters. This node is designed to provide a versatile waveform for various applications such as signal processing or animation.

# Input types
## Required
- phase
    - The phase parameter determines the period of the sine wave, affecting the frequency and overall pattern of the wave. This is crucial for adjusting the timing of oscillations within the waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
    - The amplitude sets the height of the sine wave, controlling the magnitude of oscillations. It is a fundamental parameter for defining the strength of the waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_translation
    - The x_translation parameter shifts the waveform along the x-axis, allowing horizontal movement within the waveform pattern. It is important for positioning the waveform in a given context.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_value
    - The max_value establishes the upper bound of the wave, defining the maximum point the sine wave can reach. It is a key parameter for setting the scale of wave oscillations.
    - Comfy dtype: FLOAT
    - Python dtype: float
- current_frame
    - The current_frame parameter represents the current position in time or sequence, which the wave function uses to calculate its output. It is essential for generating the correct waveform at a specific moment.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output provides the calculated value of the absolute sine wave for the current frame, representing the y-coordinate of the waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int_output
    - The int_output is the integer representation of the output, useful for applications that require discrete values rather than continuous ones.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class AbsSinWave:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'phase': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'amplitude': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.1}), 'x_translation': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'max_value': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.05}), 'current_frame': ('INT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('FLOAT', 'INT')
    FUNCTION = 'Wave'
    CATEGORY = 'FizzNodes 📅🅕🅝/WaveNodes'

    def Wave(self, phase, amplitude, x_translation, max_value, current_frame):
        output = max_value - np.abs(np.sin(current_frame / phase)) * amplitude
        print(output)
        return (output, int(output))
```