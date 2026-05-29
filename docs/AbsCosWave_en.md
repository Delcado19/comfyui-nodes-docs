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
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
