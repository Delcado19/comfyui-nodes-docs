# Documentation
- Class name: KfSinusoidalWithWavelength
- Category: ROOT_CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates sine curves with customizable wavelength, phase, and amplitude, facilitating the creation of periodic waveforms for various applications.

# Input types
## Required
- wavelength
    - Wavelength determines the period of the sine curve, affecting its overall length and spacing between peaks.
    - Comfy dtype: FLOAT
    - Python dtype: float
- phase
    - Phase shifts the sine curve along the timeline, changing the timing of its peaks and troughs relative to the starting point.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
    - Amplitude controls the magnitude of the sine curve's peaks and troughs, affecting the extent of its oscillation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- curve
    - The output is a keyframe curve object representing the sine waveform, available for further manipulation or visualization.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.KfCurve
- sinusoidal_curve
    - This is the sine curve derived from the input parameters, encapsulating the generated waveform for use in various contexts.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: keyframed.SinusoidalCurve

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalWithWavelength:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE', 'SINUSOIDAL_CURVE')

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'wavelength': ('FLOAT', {'default': 12, 'step': 0.5}), 'phase': ('FLOAT', {'default': 0.0, 'step': 0.1308996939}), 'amplitude': ('FLOAT', {'default': 1, 'step': 0.01})}}

    def main(self, wavelength, phase, amplitude):
        curve = kf.SinusoidalCurve(wavelength=wavelength, phase=phase, amplitude=amplitude)
        return (curve, curve)
```