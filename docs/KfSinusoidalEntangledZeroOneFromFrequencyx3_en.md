# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromFrequencyx3
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a set of three sine waves based on a given frequency, which are interleaved in a zero-one pattern. It emphasizes creating periodic waveforms that smoothly transition between zero and one, focusing on using the frequency parameter to control the periodicity and overall shape of the curves.

# Input types
## Required
- frequency
    - The frequency parameter determines the periodicity of the sine waves, affecting the spacing and repetition of wave peaks and troughs. This is crucial for defining the rhythm and cadence of the generated curves.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- output
    - The output is three sine waves, each representing a unique phase shift in the zero-one interleaving. These curves are central to the node's function, serving as the main result of the processing.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
