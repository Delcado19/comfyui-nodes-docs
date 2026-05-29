# Documentation
- Class name: KfSinusoidalEntangledZeroOneFromFrequencyx7
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a set of seven entangled sine waves based on the input base frequency, each oscillating between zero and one. It emphasizes creating complex, synchronized waveforms for various applications in signal processing or visualization.

# Input types
## Required
- frequency
    - The frequency parameter determines the oscillation rate of the sine waves, influencing the overall pattern and periodicity of the generated waveform. It is essential for defining the temporal characteristics of the output.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- output
    - The output includes seven sine waves, each representing a unique phase shift and amplitude based on the input frequency. These curves are critical to the node's functionality, providing a rich set of data points for further analysis or manipulation.
    - Comfy dtype: COMBO[kf.SinusoidalCurve]
    - Python dtype: List[kf.SinusoidalCurve]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalEntangledZeroOneFromFrequencyx7(KfSinusoidalEntangledZeroOneFromFrequency):
    RETURN_TYPES = ('KEYFRAMED_CURVE',) * 7

    def main(self, frequency):
        return super().main(n=7, frequency=frequency)
```