# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromWavelengthx8
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a set of eight sine curves based on the given wavelength, each with a different phase offset. The main purpose is to create an entangled pattern of zero and one values oscillating within a specified wavelength, facilitating the generation of complex waveforms for various applications.

# Input types
## Required
- wavelength
    - The wavelength parameter determines the length of a complete cycle of the sine curve. It is very important because it directly affects the frequency and period of the generated waveform, thereby affecting the overall pattern and behavior of the curve.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- output
    - The output includes eight sine curves, each representing a unique phase offset within the specified wavelength. These curves are essential to the node's functionality because they provide the basis for further analysis or manipulation in downstream processes.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalEntangledZeroOneFromWavelengthx8(KfSinusoidalEntangledZeroOneFromWavelength):
    RETURN_TYPES = ('KEYFRAMED_CURVE',) * 8

    def main(self, wavelength):
        return super().main(n=8, wavelength=wavelength)
```