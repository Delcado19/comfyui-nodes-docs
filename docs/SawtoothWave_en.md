# Documentation
- Class name: SawtoothWave
- Category: FizzNodes 📅🅕🅝/WaveNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The sawtooth wave node generates waveform patterns based on specified phase, step increment, and displacement, aiding signal processing or waveform generation tasks in the system.

# Input types
## Required
- phase
    - The phase parameter determines the periodicity of the sawtooth wave, affecting the overall shape and frequency of the output waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- step_increment
    - The step increment parameter controls the amplitude change per cycle, affecting the steepness of the waveform's rise and fall.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_translation
    - The x_translation parameter shifts the waveform horizontally, adjusting the position of the waveform pattern within the time frame.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_value
    - The start_value parameter sets the initial level of the waveform, determining the baseline around which the waveform oscillates.
    - Comfy dtype: FLOAT
    - Python dtype: float
- current_frame
    - The current_frame parameter represents the current time point, used to calculate the position of the waveform at a specific moment within its cycle.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output represents the computed value of the sawtooth wave at the current frame, which can be used for further signal processing or as input to other nodes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int_output
    - int_output provides an integer representation of the waveform value, suitable for discrete operations or as a basis for numerical analysis.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SawtoothWave:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'phase': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'step_increment': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.1}), 'x_translation': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'start_value': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 9999.0, 'step': 0.05}), 'current_frame': ('INT', {'default': 1.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('FLOAT', 'INT')
    FUNCTION = 'Wave'
    CATEGORY = 'FizzNodes 📅🅕🅝/WaveNodes'

    def Wave(self, phase, step_increment, x_translation, start_value, current_frame):
        output = start_value + (step_increment * (current_frame % phase) - x_translation)
        print(output)
        return (output, int(output))
```