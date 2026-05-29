# Documentation
- Class name: WeightAdjustAllAddNode
- Category: Animate Diff 🎭🅐🅓/ad settings/weight adjust
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

In the `WeightAdjustAllAddNode` class, the `get_weight_adjust` method is intended to apply a unified adjustment to all weights in the model. It does this by accepting an additive value and optionally printing adjustment details. This method is crucial for fine-tuning model weights during animation difference processing, ensuring adjustments are applied consistently across the entire model.

# Input types
## Required
- all_ADD
    - The parameter `all_ADD` specifies the amount by which all weights in the model should be adjusted. This is a key input because it directly affects the magnitude of the weight adjustment, thereby influencing the performance of the adjusted model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- print_adjustment
    - The flag `print_adjustment` determines whether to print detailed information about the weight adjustment. This is useful for debugging or monitoring adjustments made to the model weights.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_weight_adjust
    - The parameter `prev_weight_adjust` allows providing a previous weight adjustment group, which can be used to build upon or modify existing weight adjustments. This parameter is optional but can enhance the flexibility of the weight adjustment process.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: AdjustGroup

# Output types
- WEIGHT_ADJUST
    - The output of the `get_weight_adjust` method is an `AdjustGroup` object that contains the resulting weight adjustments after applying the specified `all_ADD` value. This object is important because it represents the updated state of the model weights after adjustment.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: AdjustGroup

# Usage tips
- Infra type: CPU

# Source code
```
class WeightAdjustAllAddNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'all_ADD': ('FLOAT', {'default': 0.0, 'min': -2.0, 'max': 2.0, 'step': 1e-06}), 'print_adjustment': ('BOOLEAN', {'default': False})}, 'optional': {'prev_weight_adjust': ('WEIGHT_ADJUST',)}}
    RETURN_TYPES = ('WEIGHT_ADJUST',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/ad settings/weight adjust'
    FUNCTION = 'get_weight_adjust'

    def get_weight_adjust(self, all_ADD: float, print_adjustment: bool, prev_weight_adjust: AdjustGroup=None):
        if prev_weight_adjust is None:
            prev_weight_adjust = AdjustGroup()
        prev_weight_adjust = prev_weight_adjust.clone()
        adjust = AdjustWeight(all_ADD=all_ADD, print_adjustment=print_adjustment)
        prev_weight_adjust.add(adjust)
        return (prev_weight_adjust,)
```