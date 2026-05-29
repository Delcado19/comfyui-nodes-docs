# Documentation
- Class name: CosWave
- Category: FizzNodes 📅🅕🅝/WaveNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The CosWave node generates cosine waveforms through various parameters that can be adjusted to achieve the desired transformation. It is primarily used to create oscillatory effects that can be synchronized with time-based variables.

# Input types
## Required
- phase
    - The phase parameter determines the period of the cosine wave, affecting the frequency of oscillation. It is a key element in shaping the temporal characteristics of the wave.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
    - Amplitude sets the peak value of the wave, controlling the range of oscillation from its average position. It is essential for defining the intensity of the wave.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_translation
    - X translation allows horizontal shifting of the waveform along the X-axis, providing control over the wave's position without affecting its shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_translation
    - Y translation adjusts the vertical position of the wave along the Y-axis, allowing fine-tuning of the wave's starting point.
    - Comfy dtype: FLOAT
    - Python dtype: float
- current_frame
    - The current frame parameter is used to synchronize the wave's phase with the progression of a sequence or animation, enabling dynamic changes over time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output of the CosWave node represents the resulting waveform value at the specified frame, which can be used for further processing or visualization.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int_output
    - The integer output is a version of the waveform value converted to an integer, which is useful for applications requiring discrete values.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class CosWave:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'phase': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'amplitude': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.1}), 'x_translation': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'y_translation': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.05}), 'current_frame': ('INT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('FLOAT', 'INT')
    FUNCTION = 'Wave'
    CATEGORY = 'FizzNodes 📅🅕🅝/WaveNodes'

    def Wave(self, phase, amplitude, x_translation, y_translation, current_frame):
        output = y_translation + amplitude * np.cos(2 * np.pi * current_frame / phase - x_translation)
        print(output)
        return (output, int(output))
```