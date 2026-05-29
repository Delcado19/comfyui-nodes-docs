# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromWavelengthx9
- Category: core
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

The KfSinusoidalEntangledZeroOneFromWavelengthx9 node generates a set of nine sinusoidal curves based on a given wavelength, which are entangled with each other and oscillate between zero and one. This node is particularly useful for creating complex patterns that require multiple interwoven frequencies.

# Input types
## Required
- wavelength
    - The wavelength parameter determines the period of the sinusoidal oscillation and is crucial for setting the frequency of the generated curves. It directly affects the overall shape and periodicity of the output pattern.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- KEYFRAMED_CURVE
    - The output of this node is a tuple of nine keyframe sinusoidal curves. Each curve is designed to contribute uniquely to the composite waveform, providing a rich combination of oscillations.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: Tuple[kf.SinusoidalCurve, ...]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalEntangledZeroOneFromWavelengthx9(KfSinusoidalEntangledZeroOneFromWavelength):
    RETURN_TYPES = ('KEYFRAMED_CURVE',) * 9

    def main(self, wavelength):
        return super().main(n=9, wavelength=wavelength)
```