# Documentation
- Class name: KfSinusoidalGetAmplitude
- Category: ROOT_CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node extracts the amplitude from the sinusoidal curve, providing a measure of the peak deviation of the curve from the mean. This is crucial for understanding the intensity of oscillations in the curve.

# Input types
## Required
- curve
    - The input curve parameter represents the sinusoidal data structure from which the amplitude is extracted. It is crucial for the node's operation because it directly affects the output result.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: keyframed.SinusoidalCurve

# Output types
- amplitude
    - The output provides the amplitude of the input sinusoidal curve, indicating the range of its oscillation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
