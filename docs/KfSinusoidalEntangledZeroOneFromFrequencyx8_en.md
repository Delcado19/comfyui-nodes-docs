# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromFrequencyx8
- Category: math
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

The KfSinusoidalEntangledZeroOneFromFrequencyx8 node generates eight entangled sinusoidal curves based on a given frequency. Each curve is designed to oscillate between zero and one, with phase offsets to ensure their entanglement. The purpose of this node is to create a complex oscillation pattern that can be used in various applications requiring synchronized but different waveforms.

# Input types
## Required
- frequency
    - The frequency parameter determines the rate of oscillation of the sine curves. It is crucial for setting the overall pattern of the curves and affects the period and amplitude of each oscillation. The higher the frequency, the faster the oscillation.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- KEYFRAMED_CURVE
    - The output of the KfSinusoidalEntangledZeroOneFromFrequencyx8 node is eight keyframe sine curves. Each curve represents a unique oscillation pattern, entangled with the other curves, providing a rich set of waveforms for further manipulation or analysis.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
