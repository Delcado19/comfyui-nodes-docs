# Documentation
- Class name: InvSinWave
- Category: FizzNodes 📅🅕🅝/WaveNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The InvSinWave node is designed to generate an inverted sine wave pattern. It achieves the desired output by manipulating the wave's phase, amplitude, and translation, which is particularly useful in signal processing and waveform analysis applications.

# Input types
## Required
- phase
    - The phase parameter determines the period of the wave, affecting how many complete cycles the wave completes within a given time frame. It is crucial for controlling the frequency of the wave.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
    - Amplitude sets the height of the wave peaks, affecting the intensity of the wave's oscillation. It is an important parameter for adjusting the size of the waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_translation
    - X translation moves the wave horizontally along the X axis, allowing the wave to be positioned within a given space. It is significant for aligning the waveform with specific coordinates.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_translation
    - Y translation moves the wave vertically along the Y axis, affecting the starting point of the wave's oscillation. It is important for adjusting the vertical position of the waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- current_frame
    - The current frame parameter specifies the current position in the time series, which is crucial for generating the wave at a specific moment in an animation or simulation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output is the value of the inverted sine wave calculated under the specified parameters, which can be used for further analysis or as input to other nodes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int_output
    - The integer output is the integer version of the calculated wave value, which may be useful for applications that require discrete values rather than continuous values.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
