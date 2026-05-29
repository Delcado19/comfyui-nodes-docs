# Documentation
- Class name: KfSinusoidalGetPhase
- Category: ROOT_CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node aims to extract phase information from the sine curve, which is essential for understanding the temporal localization and position in oscillation modes.

# Input types
## Required
- curve
    - The curve parameter is crucial because it defines the sine waveform from which the phase will be extracted, directly affecting the node's output.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: keyframed.SinusoidalCurve

# Output types
- phase
    - The output phase represents the time offset of the sine wave, which is significant for aligning or comparing oscillation modes.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class KfSinusoidalGetPhase:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('FLOAT',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve': ('SINUSOIDAL_CURVE', {'forceInput': True})}}

    def main(self, curve):
        return (curve.phase,)
```