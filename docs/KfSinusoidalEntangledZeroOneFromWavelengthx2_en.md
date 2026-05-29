# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromWavelengthx2
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a pair of entangled sinusoidal curves based on the given wavelength, aiming to create complex and synchronized patterns. It emphasizes the interaction between the wavelength and the generated waveforms, focusing on the harmony and rhythm of the generated curves.

# Input types
## Required
- wavelength
    - The wavelength parameter determines the period of the sinusoidal curve, affecting the overall pattern and frequency of the generated waveform. It is crucial in determining the aesthetic and functional quality of the output.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- KEYFRAMED_CURVE
    - The output contains two entangled and synchronized sinusoidal curves, richly demonstrating the properties of the input wavelength. These curves can be used in various applications that require rhythmic and periodic patterns.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalEntangledZeroOneFromWavelengthx2(KfSinusoidalEntangledZeroOneFromWavelength):
    RETURN_TYPES = ('KEYFRAMED_CURVE',) * 2

    def main(self, wavelength):
        return super().main(n=2, wavelength=wavelength)
```