# Documentation
- Class name: CustomT2IAdapterWeights
- Category: Adv-ControlNet 🛂🅐🅒🅝/weights/T2IAdapter
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The CustomT2IAdapterWeights node is designed to manage and adjust the weights of the control network, especially for transforming input data into the desired output shape. It emphasizes customizing weight distribution over different keyframes to achieve precise control over the transformation process.

# Input types
## Required
- weight_00
    - The weight_00 parameter is crucial for defining the initial impact of the transformation. It sets a baseline for the initial weight of the input data in the control network, affecting the overall balance of the transformation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_01
    - The weight_01 parameter further refines the transformation process by adjusting the intermediate weight values. It plays an important role in shaping the transition between keyframes, ensuring smooth and coherent transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_02
    - The weight_02 parameter is essential for controlling the weight distribution in the later stages of the transformation. It ensures that the transformation maintains its intended direction and intensity as it progresses toward the final keyframe.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_03
    - The weight_03 parameter determines the final impact of the transformation, ensuring the output closely matches the desired shape. It is a key component for achieving the precision required in the final stage of the transformation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- flip_weights
    - The flip_weights parameter allows inversion of the weight distribution, providing an additional layer of control over the transformation direction. This can be particularly useful when the transformation requires reversing the standard order of weight application.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- CONTROL_NET_WEIGHTS
    - The CONTROL_NET_WEIGHTS output represents adaptive weights customized and arranged for the control network. These weights are crucial in guiding the network's transformative capabilities to achieve the desired output shape.
    - Comfy dtype: ControlWeights
    - Python dtype: ControlWeights
- TIMESTEP_KEYFRAME
    - The TIMESTEP_KEYFRAME output is a series of keyframes corresponding to specific time points in the transformation process. These keyframes play an important role in defining the temporal structure and progression of the transformation.
    - Comfy dtype: TimestepKeyframeGroup
    - Python dtype: TimestepKeyframeGroup

# Usage tips
- Infra type: CPU

# Source code
```
class CustomT2IAdapterWeights:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'weight_00': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'weight_01': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'weight_02': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'weight_03': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'flip_weights': ('BOOLEAN', {'default': False})}}
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