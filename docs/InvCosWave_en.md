# Documentation
- Class name: InvCosWave
- Category: FizzNodes 📅🅕🅝/WaveNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The InvCosWave node generates waveforms based on the inverse cosine function. It is designed to provide periodic output that can be adjusted by phase, amplitude, and displacement parameters. This node is particularly suitable for applications requiring smooth oscillation patterns over time.

# Input types
## Required
- phase
    - The phase parameter determines the period of the waveform. It affects the frequency of the waveform's oscillation and is essential for setting the temporal frequency of the pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
    - The amplitude parameter controls the peak value of the waveform. It is important for defining the magnitude of the oscillation and can be adjusted to scale the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_translation
    - The x_translation parameter moves the waveform along the x-axis. It is crucial for positioning the waveform pattern within a given frame or space.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_translation
    - The y_translation parameter adjusts the vertical position of the waveform. It is important for aligning the waveform pattern with other visual elements or data points.
    - Comfy dtype: FLOAT
    - Python dtype: float
- current_frame
    - The current_frame parameter represents the current time step in an animation or sequence. It is crucial for generating the correct phase of the waveform at any given moment.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output of the InvCosWave node is a floating-point number representing the current value of the waveform at the specified frame. It is important for further processing or visualization of the waveform pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int_output
    - int_output is an integer representation of the waveform value, useful when indexing or integer precision is required.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
