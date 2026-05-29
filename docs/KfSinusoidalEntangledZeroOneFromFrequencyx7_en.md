# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromFrequencyx7
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a set of seven entangled sine waves based on the input base frequency, each oscillating between zero and one. It emphasizes creating complex, synchronized waveforms for various applications in signal processing or visualization.

# Input types
## Required
- frequency
    - The frequency parameter determines the oscillation rate of the sine waves, influencing the overall pattern and periodicity of the generated waveform. It is essential for defining the temporal characteristics of the output.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- output
    - The output includes seven sine waves, each representing a unique phase shift and amplitude based on the input frequency. These curves are critical to the node's functionality, providing a rich set of data points for further analysis or manipulation.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
