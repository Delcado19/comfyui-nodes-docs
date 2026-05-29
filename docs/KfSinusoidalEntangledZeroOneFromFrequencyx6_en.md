# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromFrequencyx6
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a set of six mutually entangled sinusoidal curves based on the provided frequency, each oscillating between zero and one. It emphasizes creating interrelated waveforms that maintain consistent phase relationships to facilitate the generation and analysis of complex patterns.

# Input types
## Required
- frequency
    - The frequency parameter determines the oscillation speed of the sinusoidal curves, affecting the overall rhythm and periodicity of the generated waveform. It is crucial for defining the temporal characteristics of the output.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- output
    - The output contains six sinusoidal curves, each representing a unique phase-shift interpretation of the input frequency. These curves are central to the node's functionality, providing a rich dataset for further analysis or visualization.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
