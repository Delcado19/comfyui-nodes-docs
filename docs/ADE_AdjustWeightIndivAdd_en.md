# Documentation
- Class name: WeightAdjustIndivAddNode
- Category: Animate Diff 🎭🅐🅓/ad settings/weight adjust
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

WeightAdjustIndivAddNode is designed to individually adjust model weights by adding specific values to different types of parameters. It encapsulates the logic for modifications based on specified criteria, ensuring adjustments are applied in a structured and modular manner.

# Input types
## Required
- pe_ADD
    - The pe_ADD parameter allows adjustment of positional encoding weights. It plays a crucial role in fine-tuning the model's understanding of input sequence structure, which is vital for tasks dependent on element order.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_ADD
    - The attn_ADD parameter is used to modify attention mechanism weights. Adjusting this parameter can enhance the model's ability to focus on different parts of the input, potentially improving performance on tasks requiring nuanced contextual understanding.
    - Comfy dtype: FLOAT
    - Python dtype: float
- other_ADD
    - The other_ADD parameter is used to adjust weights not belonging to predefined categories. It provides flexibility in fine-tuning the model to cover methods not addressed by other parameters, allowing for broader adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- print_adjustment
    - The print_adjustment flag controls whether adjustments made to weights are logged. This is useful for debugging and understanding the impact of adjustments on model behavior.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_weight_adjust
    - The prev_weight_adjust parameter is an optional previous adjustment group that can be applied to the model. This allows continuing a series of adjustments or applying a set of predefined modifications.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: AdjustGroup

# Output types
- weight_adjust
    - The output of WeightAdjustIndivAddNode is a WEIGHT_ADJUST object representing collective adjustments to model weights. This object can be used to further refine the model or apply adjustments to another model instance.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: AdjustGroup

# Usage tips
- Infra type: CPU

# Source code
```
class WeightAdjustIndivAddNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pe_ADD': ('FLOAT', {'default': 0.0, 'min': -2.0, 'max': 2.0, 'step': 1e-06}), 'attn_ADD': ('FLOAT', {'default': 0.0, 'min': -2.0, 'max': 2.0, 'step': 1e-06}), 'other_ADD': ('FLOAT', {'default': 0.0, 'min': -2.0, 'max': 2.0, 'step': 1e-06}), 'print_adjustment': ('BOOLEAN', {'default': False})}, 'optional': {'prev_weight_adjust': ('WEIGHT_ADJUST',)}}
    RETURN_TYPES = ('WEIGHT_ADJUST',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/ad settings/weight adjust'
    FUNCTION = 'get_weight_adjust'

    def get_weight_adjust(self, pe_ADD: float, attn_ADD: float, other_ADD: float, print_adjustment: bool, prev_weight_adjust: AdjustGroup=None):
        if prev_weight_adjust is None:
            prev_weight_adjust = AdjustGroup()
        prev_weight_adjust = prev_weight_adjust.clone()
        adjust = AdjustWeight(pe_ADD=pe_ADD, attn_ADD=attn_ADD, other_ADD=other_ADD, print_adjustment=print_adjustment)
        prev_weight_adjust.add(adjust)
        return (prev_weight_adjust,)
```