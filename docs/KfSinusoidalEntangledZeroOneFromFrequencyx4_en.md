# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromFrequencyx4
- Category: core
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

The KfSinusoidalEntangledZeroOneFromFrequencyx4 node is designed to generate multiple entangled sinusoidal curves based on a given frequency. It operates by creating four distinct sinusoidal curves, each with unique phase offsets and amplitudes derived from the input frequency. This node is particularly suitable for applications that require generating complex, interrelated waveforms.

# Input types
## Required
- frequency
    - The frequency parameter is crucial for determining the base rate of oscillation of the sinusoidal curves. It directly affects the node's output, influencing the shape and periodicity of the generated curves.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- KEYFRAMED_CURVE
    - The node's output is a set of four keyframe sinusoidal curves. Each curve represents a unique oscillation pattern, entangled with the other curves, forming a complex waveform structure.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalEntangledZeroOneFromFrequencyx4(KfSinusoidalEntangledZeroOneFromFrequency):
    RETURN_TYPES = ('KEYFRAMED_CURVE',) * 4

    def main(self, frequency):
        return super().main(n=4, frequency=frequency)
```