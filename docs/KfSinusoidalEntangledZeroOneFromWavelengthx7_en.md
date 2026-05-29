# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromWavelengthx7
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a set of seven unique sinusoidal curves based on the input wavelength, each with a phase offset used to represent a binary sequence derived from the wavelength. It emphasizes creating a structured pattern that adjusts frequency based on the wavelength parameter, oscillating between zero and one.

# Input types
## Required
- wavelength
    - The wavelength parameter determines the frequency of the sinusoidal curves, affecting the overall pattern of the generated sequence. It is crucial for the node's operation as it defines the granularity and periodicity of the binary representation.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- KEYFRAMED_CURVE
    - The output is a collection of seven sinusoidal curves, each representing a unique phase in the binary sequence. The combination of these curves provides a visual and numerical representation of an entangled zero-one pattern based on the input wavelength.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalEntangledZeroOneFromWavelengthx7(KfSinusoidalEntangledZeroOneFromWavelength):
    RETURN_TYPES = ('KEYFRAMED_CURVE',) * 7

    def main(self, wavelength):
        return super().main(n=7, wavelength=wavelength)
```