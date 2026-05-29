# Documentation
- Class name: KfSinusoidalGetFrequency
- Category: ROOT_CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node extracts the fundamental frequency from a sine curve, providing a measure of its oscillation rate.

# Input types
## Required
- curve
    - The input curve parameter is required, as it is the data source for frequency extraction.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: kf.Keyframed

# Output types
- frequency
    - The output represents the fundamental frequency of the input sine curve.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalGetFrequency:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('FLOAT',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve': ('SINUSOIDAL_CURVE', {'forceInput': True})}}

    def main(self, curve):
        return (1 / curve.wavelength,)
```