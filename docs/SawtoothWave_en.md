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
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
