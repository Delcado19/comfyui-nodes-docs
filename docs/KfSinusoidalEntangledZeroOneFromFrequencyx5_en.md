# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromFrequencyx5
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates five sets of intertwined sine curves based on a given frequency, representing complex value patterns from zero to one. It emphasizes creating complex waveforms for applications requiring periodic, nonlinear transformations.

# Input types
## Required
- frequency
    - The frequency parameter determines the oscillation speed of the sine curves, affecting the overall rhythm and periodicity of the generated waveforms.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- output
    - The output contains five sine curves, each representing a unique transformation that maps the input frequency to a value range of zero to one.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
