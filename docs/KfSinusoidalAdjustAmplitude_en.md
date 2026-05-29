# Documentation
- Class name: KfSinusoidalAdjustAmplitude
- Category: ROOT_CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node aims to adjust the amplitude of a sine curve, allowing fine-tuning of the shape without changing its basic properties such as wavelength and phase. It emphasizes the node's role in fine-tuning curve dynamics for various applications.

# Input types
## Required
- curve
    - The curve parameter is necessary because it defines the base sine curve whose amplitude is to be adjusted. It directly affects the output, determining the shape and characteristics of the modified curve.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: kf.SinusoidalCurve
## Optional
- adjustment
    - The adjustment parameter is used to modify the amplitude of the sine curve, allowing precise control over the peaks and valleys of the curve. It plays a crucial role in customizing the curve according to specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- curve
    - The output curve is the modified sine curve with adjusted amplitude, representing the result of the node's operation. It is important because it conveys the final shape that can be used for further processing or analysis.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- sinusoidal_curve
    - This output is identical to the modified curve, emphasizing that the node's main function is to adjust the amplitude while preserving other properties of the curve. It is useful for applications that require the final sine shape.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: kf.SinusoidalCurve

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalAdjustAmplitude:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE', 'SINUSOIDAL_CURVE')

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve': ('SINUSOIDAL_CURVE', {'forceInput': True}), 'adjustment': ('FLOAT', {'default': 0, 'step': 0.01})}}

    def main(self, curve, adjustment):
        (wavelength, phase, amplitude) = (curve.wavelength, curve.phase, curve.amplitude)
        amplitude += adjustment
        curve = kf.SinusoidalCurve(wavelength=wavelength, phase=phase, amplitude=amplitude)
        return (curve, curve)
```