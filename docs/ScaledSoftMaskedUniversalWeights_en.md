# Documentation
- Class name: ScaledSoftMaskedUniversalWeights
- Category: Adv-ControlNet 🛂🅐🅒🅝/weights
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The `load_weights` method in the `ScaledSoftMaskedUniversalWeights` class is designed to process and apply a soft mask to the base weights of a control network. It accepts a mask tensor and two multipliers to scale the mask values, ensuring they fall within a specified range. The method also provides the option to lock the minimum and maximum values of the mask, preventing any adjustments beyond the given limits. This functionality is critical for fine-tuning the impact of control weights on the network's output.

# Input types
## Required
- mask
    - The 'mask' parameter is a tensor that defines the soft mask to be applied to the control weights. It plays a key role in determining the degree to which the base weights are modified. The mask values are scaled according to the provided multipliers, making it a critical component in the weight adjustment process.
    - Comfy dtype: Tensor
    - Python dtype: torch.Tensor
- min_base_multiplier
    - The 'min_base_multiplier' parameter sets the lower bound for scaled mask values. It is essential for controlling the minimum impact of the mask on the control weights. This parameter ensures the mask's effect is not too subtle, allowing for clear and noticeable adjustments to network behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_base_multiplier
    - The 'max_base_multiplier' parameter determines the upper bound for scaled mask values. It is essential for controlling the maximum impact of the mask on the control weights. By setting this parameter, users can prevent the mask from overwhelming the base weights, maintaining a balance between original and modified weights.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- CONTROL_NET_WEIGHTS
    - The output 'CONTROL_NET_WEIGHTS' represents the adjusted control weights of the network after applying the scaled soft mask. This output is important because it directly affects the final output of the control network, reflecting the modified behavior based on the input mask and multipliers.
    - Comfy dtype: ControlWeights
    - Python dtype: comfy.ControlWeights
- TIMESTEP_KEYFRAME
    - The output 'TIMESTEP_KEYFRAME' provides the default keyframe for control weights at a specific timestep. It is important for defining the temporal structure of control weights, allowing for dynamic adjustments over time.
    - Comfy dtype: TimestepKeyframe
    - Python dtype: comfy.TimestepKeyframe

# Usage tips
- Infra type: CPU

# Source code
```
class ScaledSoftMaskedUniversalWeights:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',), 'min_base_multiplier': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'max_base_multiplier': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}}
    RETURN_TYPES = ('CONTROL_NET_WEIGHTS', 'TIMESTEP_KEYFRAME')
    RETURN_NAMES = WEIGHTS_RETURN_NAMES
    FUNCTION = 'load_weights'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/weights'

    def load_weights(self, mask: Tensor, min_base_multiplier: float, max_base_multiplier: float, lock_min=False, lock_max=False):
        mask = mask.clone()
        x_min = 0.0 if lock_min else mask.min()
        x_max = 1.0 if lock_max else mask.max()
        if x_min == x_max:
            mask = torch.ones_like(mask) * max_base_multiplier
        else:
            mask = linear_conversion(mask, x_min, x_max, min_base_multiplier, max_base_multiplier)
        weights = ControlWeights.universal_mask(weight_mask=mask)
        return (weights, TimestepKeyframeGroup.default(TimestepKeyframe(control_weights=weights)))
```