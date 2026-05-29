# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromWavelengthx3
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a set of three mutually entangled sine curves based on the input wavelength, creating a complex pattern that oscillates between zero and one. It is designed to introduce highly periodic variations suitable for applications requiring complex waveforms.

# Input types
## Required
- wavelength
    - The wavelength parameter determines the period of the sine curves, affecting the overall complexity and frequency of the generated pattern. This is a key input as it directly influences the spatial characteristics of the curves.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- curves
    - The output consists of three sine curves, each with its unique phase and amplitude, derived from the input wavelength. These curves are central to the node's functionality and represent the main result of the processing.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalEntangledZeroOneFromWavelengthx3(KfSinusoidalEntangledZeroOneFromWavelength):
    RETURN_TYPES = ('KEYFRAMED_CURVE',) * 3

    def main(self, wavelength):
        return super().main(n=3, wavelength=wavelength)
```