# Documentation
- Class name: SoftT2IAdapterWeights
- Category: Adv-ControlNet 🛂🅐🅒🅝/weights/T2IAdapter
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The SoftT2IAdapterWeights node is designed to facilitate the adaptation of control network weights for converting timestep keyframes into input adapter weights. It simplifies the weight assignment process and ensures compatibility with the underlying control network mechanisms.

# Input types
## Required
- weight_00
    - The weight_00 parameter is critical for initializing the baseline level of control weights, influencing the overall effectiveness of the timestep keyframe conversion process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_01
    - The weight_01 parameter is essential for adjusting intermediate control weights, directly affecting the nuanced conversion of timestep keyframes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_02
    - The weight_02 parameter is crucial for fine-tuning advanced control weights, determining the precision of timestep keyframe adaptation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_03
    - The weight_03 parameter is essential for defining the final control weights, determining the ultimate result of the timestep keyframe conversion.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- flip_weights
    - When the flip_weights parameter is enabled, it reverses the effect of control weights, providing an alternative perspective on weight distribution and conversion processes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- CONTROL_NET_WEIGHTS
    - The output CONTROL_NET_WEIGHTS represents properly arranged and converted control weights, ready for application to timestep keyframes for further processing.
    - Comfy dtype: CONTROL_NET_WEIGHTS
    - Python dtype: ControlWeights
- TIMESTEP_KEYFRAME
    - The output TIMESTEP_KEYFRAME provides a structured timestep keyframe group, encapsulating control weights and ready for integration into the control network.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: TimestepKeyframeGroup

# Usage tips
- Infra type: CPU

# Source code
```
class SoftT2IAdapterWeights:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'weight_00': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'weight_01': ('FLOAT', {'default': 0.62, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'weight_02': ('FLOAT', {'default': 0.825, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'weight_03': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'flip_weights': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('CONTROL_NET_WEIGHTS', 'TIMESTEP_KEYFRAME')
    RETURN_NAMES = WEIGHTS_RETURN_NAMES
    FUNCTION = 'load_weights'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/weights/T2IAdapter'

    def load_weights(self, weight_00, weight_01, weight_02, weight_03, flip_weights):
        weights = [weight_00, weight_01, weight_02, weight_03]
        weights = get_properly_arranged_t2i_weights(weights)
        weights = ControlWeights.t2iadapter(weights, flip_weights=flip_weights)
        return (weights, TimestepKeyframeGroup.default(TimestepKeyframe(control_weights=weights)))
```