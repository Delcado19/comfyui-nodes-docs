# Documentation
- Class name: KfSinusoidalAdjustPhase
- Category: ROOT_CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node is intended to modify the phase of a sine wave, allowing adjustment of the timing of the wave without changing its fundamental characteristics such as wavelength and amplitude.

# Input types
## Required
- curve
    - The input curve parameter is necessary because it defines the base sine wave whose phase will be adjusted by the node operation.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: kf.SinusoidalCurve
## Optional
- adjustment
    - The adjustment parameter is a float value that affects the degree of phase shift applied to the input curve, influencing the timing of the wave.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- curve
    - The output represents the modified sine wave with adjusted phase, which can be further used in various applications requiring dynamic wave adjustment.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- sinusoidal_curve
    - This output is identical to the modified sine wave, providing a consistent representation of the phase-adjusted wave for downstream processes.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: kf.SinusoidalCurve

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
