# Documentation
- Class name: KfSinusoidalGetWavelength
- Category: ROOT_CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

KfSinusoidalGetWavelength node aims to extract the characteristic wavelength from a sinusoidal curve. It plays a key role in analyzing and understanding the periodic nature of the curve, providing a fundamental parameter for applications such as signal processing and waveform analysis, which is crucial in various applications.

# Input types
## Required
- curve
    - The ‘curve’ parameter is crucial for the operation of the node, as it represents the sinusoidal curve from which the wavelength will be derived. It is a required input that directly affects the node's output, determining the accuracy and relevance of the obtained wavelength value.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: Keyframed sinusoidal curve object

# Output types
- wavelength
    - The ‘wavelength’ output parameter represents the length of one complete cycle of the sinusoidal curve. It is a critical piece of information that can be used for further analysis or to make informed decisions in the context of the application where the node is used.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalGetWavelength:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('FLOAT',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve': ('SINUSOIDAL_CURVE', {'forceInput': True})}}

    def main(self, curve):
        return (curve.wavelength,)
```