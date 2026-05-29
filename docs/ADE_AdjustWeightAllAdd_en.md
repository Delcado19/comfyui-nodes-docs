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
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
