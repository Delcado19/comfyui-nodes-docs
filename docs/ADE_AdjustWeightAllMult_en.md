# Documentation
- Class name: WeightAdjustAllMultNode
- Category: Animate Diff 🎭🅐🅓/ad settings/weight adjust
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The 'get_weight_adjust' method of the WeightAdjustAllMultNode class is intended to apply a unified multiplier to all weights in the model, thereby fine-tuning the model parameters without altering the underlying architecture. It is a key tool for adjusting the overall scale of model weights, especially suitable for scenarios that require calibrating the model's response according to different input ranges or sensitivity levels.

# Input types
## Required
- all_MULT
    - The 'all_MULT' parameter is essential for determining the unified multiplier applied to all weights in the model. It allows for a simple scaling of the model's weights, which can significantly impact the model's performance and behavior. This parameter is critical for adjusting the model's sensitivity to input data.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- print_adjustment
    - The 'print_adjustment' parameter is an optional flag that, when set to True, enables detailed logging of weight adjustments. This is very useful for users who are debugging or wish to track the adjustments made to the model's weights during the process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- prev_weight_adjust
    - The output of the 'get_weight_adjust' method is a 'WEIGHT_ADJUST' object that encapsulates the adjustments made to the model's weights. This object is very important because it represents the updated state of the model parameters after the weight adjustment process, ready for further model training or inference.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: AdjustGroup

# Output types
- WEIGHT_ADJUST
    - The output of the 'get_weight_adjust' method is a 'WEIGHT_ADJUST' object that encapsulates the adjustments made to the model's weights. This object is very important because it represents the updated state of the model parameters after the weight adjustment process, ready for further model training or inference.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: AdjustGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
