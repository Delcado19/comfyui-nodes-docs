# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromWavelengthx5
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates five sets of keyframe curves of sinusoidal waveforms based on the provided wavelength, entangling the values of zero and one in a rhythmic pattern. It emphasizes creating periodic, oscillating data structures that smoothly transition between specified high and low values.

# Input types
## Required
- wavelength
    - The wavelength parameter determines the period of the sine curve, affecting the overall oscillation pattern and the distance between consecutive peaks. It is crucial for defining the frequency and repeatability of the generated curves.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- curves
    - The output includes five keyframe sine curves, each representing a distinct portion of the sine pattern generated based on the input wavelength. These curves are essential to the node's functionality, providing a visual and numerical representation of the oscillations.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalEntangledZeroOneFromWavelengthx5(KfSinusoidalEntangledZeroOneFromWavelength):
    RETURN_TYPES = ('KEYFRAMED_CURVE',) * 5

    def main(self, wavelength):
        return super().main(n=5, wavelength=wavelength)
```