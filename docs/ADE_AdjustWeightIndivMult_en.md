# Documentation
- Class name: WeightAdjustIndivMultNode
- Category: Animate Diff 🎭🅐🅓/ad settings/weight adjust
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The WeightAdjustIndivMultNode class is designed to modify the weights of a model individually via multiplication. It provides a method to adjust the weights of different parts of a model based on predefined multipliers (such as pe_MULT, attn_MULT, and other_MULT), allowing fine-tuning of model parameters without altering its underlying structure. If needed, the node also supports printing adjustment details, providing transparency into the weight modification process.

# Input types
## Required
- pe_MULT
    - The pe_MULT parameter is a multiplier used to adjust the weights related to position encoding (PE) in the model. It plays a key role in fine-tuning the model's sensitivity to the order of input elements, which can significantly impact performance on tasks that rely on sequence order.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_MULT
    - The attn_MULT parameter is a multiplier for the weights of the attention mechanism in the model. By adjusting this value, one can control the influence of the attention mechanism on the model's output, which is crucial for tasks that require a nuanced understanding of context and relationships between elements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- other_MULT
    - The other_MULT parameter is a general multiplier that can be applied to other weights in the model not covered by pe_MULT or attn_MULT. It provides flexibility for adjusting model behavior in specific use cases or experimental settings.
    - Comfy dtype: FLOAT
    - Python dtype: float
- print_adjustment
    - The print_adjustment parameter is a boolean flag that, when set to True, enables logging of weight adjustment details. This is useful for developers to track and verify changes made to model weights during the adjustment process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_weight_adjust
    - The prev_weight_adjust parameter allows providing a previous weight adjustment group, which can be used to build upon or modify existing weight adjustments. This parameter is particularly useful when needing to preserve the state of previous adjustment steps and further refine them in iterative adjustments.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: AdjustGroup

# Output types
- WEIGHT_ADJUST
    - The output of WeightAdjustIndivMultNode is an AdjustGroup object that encapsulates the resulting weight adjustments applied to the model. This object can be used to further refine the model or apply the adjustments to another model instance.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: AdjustGroup

# Usage tips
- Infra type: CPU

# Source code
```
class WeightAdjustIndivMultNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pe_MULT': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 2.0, 'step': 1e-06}), 'attn_MULT': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 2.0, 'step': 1e-06}), 'other_MULT': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 2.0, 'step': 1e-06}), 'print_adjustment': ('BOOLEAN', {'default': False})}, 'optional': {'prev_weight_adjust': ('WEIGHT_ADJUST',)}}
    RETURN_TYPES = ('WEIGHT_ADJUST',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/ad settings/weight adjust'
    FUNCTION = 'get_weight_adjust'

    def get_weight_adjust(self, pe_MULT: float, attn_MULT: float, other_MULT: float, print_adjustment: bool, prev_weight_adjust: AdjustGroup=None):
        if prev_weight_adjust is None:
            prev_weight_adjust = AdjustGroup()
        prev_weight_adjust = prev_weight_adjust.clone()
        adjust = AdjustWeight(pe_MULT=pe_MULT, attn_MULT=attn_MULT, other_MULT=other_MULT, print_adjustment=print_adjustment)
        prev_weight_adjust.add(adjust)
        return (prev_weight_adjust,)
```