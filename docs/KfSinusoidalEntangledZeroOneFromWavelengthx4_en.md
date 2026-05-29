# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromWavelengthx4
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a set of four sine waves based on the input wavelength, which are entangled with each other, creating patterns that oscillate between zero and one. It is designed to generate complex waveforms for various applications requiring periodic but intricate waveforms.

# Input types
## Required
- wavelength
    - The wavelength parameter determines the period of the sine waves, affecting the frequency and overall shape of the generated waveform. This is a key input as it directly influences the pattern and regularity of the oscillations.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- output
    - The output includes four entangled sine waves, each representing a unique part of the oscillation pattern of the input wavelength. This output is very important as it provides a basis for further analysis or manipulation in various applications.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalEntangledZeroOneFromWavelengthx4(KfSinusoidalEntangledZeroOneFromWavelength):
    RETURN_TYPES = ('KEYFRAMED_CURVE',) * 4

    def main(self, wavelength):
        return super().main(n=4, wavelength=wavelength)
```