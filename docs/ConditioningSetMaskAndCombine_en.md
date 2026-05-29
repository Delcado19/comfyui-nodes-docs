
# Documentation
- Class name: ConditioningSetMaskAndCombine
- Category: KJNodes/masking/conditioning
- Output node: False

This node is intended to apply a mask to conditional data, adjusting conditions based on the specified mask and its strength. It combines the functions of setting masks and merging conditional data, allowing dynamic changes to the conditional area in a given dataset.

# Input types
## Required
- positive_i
    - Specifies a set of conditional data positively affected by the corresponding mask, playing a key role in tailoring conditions to specific regions or aspects of the data.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative_i
    - Specifies a set of conditional data negatively affected by the corresponding mask, crucial for excluding or weakening certain regions or aspects from the condition.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- mask_i
    - The mask applied to the corresponding conditional data, determining the area of influence for positive or negative condition adjustments.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_i_strength
    - Defines the strength of the mask's influence on the condition, allowing fine control over how significantly the mask affects the condition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - Determines whether to set the conditional area to the mask's boundary or use the default setting, affecting the range and precision of condition adjustments.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool

# Output types
- combined_positive
    - The combined result of all positive conditional data after mask application, reflecting the cumulative effect of positive adjustments.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- combined_negative
    - The combined result of all negative conditional data after mask application, reflecting the cumulative effect of negative adjustments.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ConditioningSetMaskAndCombine:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "positive_1": ("CONDITIONING", ),
                "negative_1": ("CONDITIONING", ),
                "positive_2": ("CONDITIONING", ),
                "negative_2": ("CONDITIONING", ),
                "mask_1": ("MASK", ),
                "mask_2": ("MASK", ),
                "mask_1_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
                "mask_2_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
                "set_cond_area": (["default", "mask bounds"],),
            }
        }

    RETURN_TYPES = ("CONDITIONING","CONDITIONING",)
    RETURN_NAMES = ("combined_positive", "combined_negative",)
    FUNCTION = "append"
    CATEGORY = "KJNodes/masking/conditioning"
    DESCRIPTION = """
Bundles multiple conditioning mask and combine nodes into one,functionality is identical to ComfyUI native nodes
"""

    def append(self, positive_1, negative_1, positive_2, negative_2, mask_1, mask_2, set_cond_area, mask_1_strength, mask_2_strength):
        c = []
        c2 = []
        set_area_to_bounds = False
        if set_cond_area != "default":
            set_area_to_bounds = True
        if len(mask_1.shape) < 3:
            mask_1 = mask_1.unsqueeze(0)
        if len(mask_2.shape) < 3:
            mask_2 = mask_2.unsqueeze(0)
        for t in positive_1:
            append_helper(t, mask_1, c, set_area_to_bounds, mask_1_strength)
        for t in positive_2:
            append_helper(t, mask_2, c, set_area_to_bounds, mask_2_strength)
        for t in negative_1:
            append_helper(t, mask_1, c2, set_area_to_bounds, mask_1_strength)
        for t in negative_2:
            append_helper(t, mask_2, c2, set_area_to_bounds, mask_2_strength)
        return (c, c2)

```
