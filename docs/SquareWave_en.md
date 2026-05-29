# Documentation
- Class name: SquareWave
- Category: FizzNodes 📅🅕🅝/WaveNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The SquareWave node is designed to generate square wave patterns. It produces square waveforms by adjusting phase, amplitude, and translation, which is essential for signal processing and waveform analysis. The functionality of this node is crucial for applications that require creating or manipulating square wave signals.

# Input types
## Required
- phase
    - The phase parameter determines the position of the waveform cycle, which is essential for determining the timing of square wave transitions. It affects the frequency and starting point of the waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
    - The amplitude sets the height of the peaks and troughs, which is very important for defining the signal's strength. It is a key factor in the overall shape and characteristics of the square wave.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_translation
    - X translation moves the waveform along the X axis, allowing adjustment of the waveform's position. This parameter is crucial for aligning the waveform with other signals or components in the system.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_translation
    - Y translation moves the waveform up or down along the Y axis, affecting the vertical position of the waveform. It is an important parameter for adjusting the waveform's position relative to other elements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- current_frame
    - The current frame parameter indicates the current position in the waveform sequence, which is crucial for the progression and timing of the square wave pattern over time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output of the SquareWave node represents the calculated value of the square wave under the specified parameters, which is essential for further signal processing or analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int_output
    - The integer output provides a discrete version of the waveform value, which is very useful for applications that require quantized or integer representation of the signal.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SquareWave:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'phase': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'amplitude': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.1}), 'x_translation': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'y_translation': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.05}), 'current_frame': ('INT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('FLOAT', 'INT')
    FUNCTION = 'Wave'
    CATEGORY = 'FizzNodes 📅🅕🅝/WaveNodes'

    def Wave(self, phase, amplitude, x_translation, y_translation, current_frame):
        output = y_translation + amplitude * 0 ** 0 ** (0 - np.sin(np.pi * current_frame / phase - x_translation))
        print(output)
        return (output, int(output))
```