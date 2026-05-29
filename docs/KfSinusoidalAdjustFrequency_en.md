# Documentation
- Class name: KfSinusoidalAdjustFrequency
- Category: ROOT_CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node allows fine-tuning of the frequency of a sine curve, providing control over the oscillation speed without changing the overall shape of the waveform.

# Input types
## Required
- curve
    - The input curve parameter is essential because it defines the base sine curve whose frequency will be adjusted.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: kf.SinusoidalCurve
## Optional
- adjustment
    - The adjustment parameter is used to modify the frequency of the curve by a specified value, affecting the overall oscillation speed.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- curve
    - The output is the adjusted sine curve, reflecting the frequency change based on the input parameters.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.SinusoidalCurve

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalAdjustFrequency:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE', 'SINUSOIDAL_CURVE')

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve': ('SINUSOIDAL_CURVE', {'forceInput': True}), 'adjustment': ('FLOAT', {'default': 0, 'step': 0.01})}}

    def main(self, curve, adjustment):
        (wavelength, phase, amplitude) = (curve.wavelength, curve.phase, curve.amplitude)
        frequency = 1 / wavelength
        frequency += adjustment
        wavelength = 1 / frequency
        curve = kf.SinusoidalCurve(wavelength=wavelength, phase=phase, amplitude=amplitude)
        return (curve, curve)
```