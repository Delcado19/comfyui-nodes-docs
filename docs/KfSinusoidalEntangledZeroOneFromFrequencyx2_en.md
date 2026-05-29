# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromFrequencyx2
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a pair of entangled sinusoidal curves based on the provided frequency, which transition from zero to one and back to zero. It emphasizes creating smooth, periodic functions that exhibit specific periodic behavior, useful for various applications requiring oscillatory patterns.

# Input types
## Required
- frequency
    - The frequency parameter determines the periodicity of the sinusoidal curves, affecting the speed of oscillation and the distance between peaks. It is crucial for defining the overall rhythm and pace of the generated curves.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- output
    - The output contains two entangled keyframe sinusoidal curves that exhibit an oscillation pattern from zero to one. These curves are core to the node's functionality and represent the primary result of the processing.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
