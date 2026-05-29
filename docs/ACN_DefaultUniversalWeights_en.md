# Documentation
- Class name: DefaultWeights
- Category: Adv-ControlNet 🛂🅐🅒🅝/weights
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The 'load_weights' method of the DefaultWeights node is designed to initialize and return a set of default control weights and corresponding timestep keyframe groups. It is a fundamental component for building a control network, ensuring the system has a baseline set of weights to operate with.

# Input types

# Output types
- CONTROL_NET_WEIGHTS
    - The CONTROL_NET_WEIGHTS output parameter represents the default control weights of the network. It is a key element in shaping the behavior of the control network, as it defines the initial weights that will be used in subsequent calculations and adjustments.
    - Comfy dtype: ControlWeights
    - Python dtype: ControlWeights
- TIMESTEP_KEYFRAME
    - The TIMESTEP_KEYFRAME output parameter encapsulates the keyframe group associated with the control weights. It plays an important role in the temporal dynamics of the control network, providing a structured way to manage and apply weights over time.
    - Comfy dtype: TimestepKeyframeGroup
    - Python dtype: TimestepKeyframeGroup

# Usage tips
- Infra type: CPU

# Source code
```
class DefaultWeights:

    @classmethod
    def INPUT_TYPES(s):
        return {}
    RETURN_TYPES = ('CONTROL_NET_WEIGHTS', 'TIMESTEP_KEYFRAME')
    RETURN_NAMES = WEIGHTS_RETURN_NAMES
    FUNCTION = 'load_weights'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/weights'

    def load_weights(self):
        weights = ControlWeights.default()
        return (weights, TimestepKeyframeGroup.default(TimestepKeyframe(control_weights=weights)))
```