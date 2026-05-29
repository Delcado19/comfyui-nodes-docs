# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromWavelengthx6
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a set of six entangled sinusoidal curves with different phase differences based on the given wavelength. It emphasizes creating complex, harmonious patterns that transition between zero and one in the system, facilitating the analysis of oscillatory behavior.

# Input types
## Required
- wavelength
    - The wavelength parameter determines the period of the sinusoidal curve, affecting the frequency and overall structure of the generated pattern. It is essential in defining the oscillatory characteristics and the spacing between peaks.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- curves
    - The output includes six sinusoidal curves, each representing a unique phase in the oscillation mode. These curves are crucial for understanding the node's contribution to the system's dynamic behavior.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalEntangledZeroOneFromWavelengthx6(KfSinusoidalEntangledZeroOneFromWavelength):
    RETURN_TYPES = ('KEYFRAMED_CURVE',) * 6

    def main(self, wavelength):
        return super().main(n=6, wavelength=wavelength)
```