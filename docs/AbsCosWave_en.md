# Documentation
- Class name: AbsCosWave
- Category: FizzNodes 📅🅕🅝/WaveNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

This node generates a waveform pattern based on a set of input parameters, simulating oscillatory behavior with adjustable characteristics.

# Input types
## Required
- phase
    - The phase parameter determines the interval of wave oscillation, affecting the frequency and period of the wave pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
    - Amplitude controls the size of the wave, determining the magnitude of peaks and troughs in the wave pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_translation
    - X_translation moves the wave horizontally along the x-axis, changing the position of the wave pattern without altering its shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_value
    - The maximum value parameter sets the upper limit of the wave, ensuring the output stays within a defined range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- current_frame
    - The current frame represents the progression of the wave over time, with each frame corresponding to a point in the wave cycle.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output represents the calculated value of the wave at the current frame, reflecting the node's processing of input parameters.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int_output
    - The integer output is the rounded value of the wave's calculated output, providing a discrete representation of the wave pattern.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class AbsCosWave:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'phase': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'amplitude': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.1}), 'x_translation': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'max_value': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.05}), 'current_frame': ('INT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('FLOAT', 'INT')
    FUNCTION = 'Wave'
    CATEGORY = 'FizzNodes 📅🅕🅝/WaveNodes'

    def Wave(self, phase, amplitude, x_translation, max_value, current_frame):
        output = max_value - np.abs(np.cos(current_frame / phase)) * amplitude
        print(output)
        return (output, int(output))
```