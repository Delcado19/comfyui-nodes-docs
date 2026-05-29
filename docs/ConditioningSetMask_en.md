# Documentation
- Class name: ConditioningSetMask
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningSetMask node is designed to modify a given conditioning set by applying a mask and adjusting its intensity. It allows customization of conditioning regions, enhancing the flexibility of the model's response to different inputs.

# Input types
## Required
- conditioning
    - The conditioning parameter is necessary because it defines the base conditioning set that the node will operate on. It directly affects how the mask and intensity parameters are applied, influencing the final result.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- mask
    - The mask parameter is critical for determining which elements in the conditioning set will be modified. It works in conjunction with the intensity parameter to control the extent of the modification.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- strength
    - The intensity parameter determines the strength of the mask's effect on the conditioning set. It is particularly important because it adjusts the scope of the mask's influence, allowing fine-tuning of the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - The set_cond_area parameter specifies whether to use the default conditioning area or apply the mask boundaries. This choice can significantly alter the node's behavior and the resulting conditioning set.
    - Comfy dtype: COMBO['default', 'mask bounds']
    - Python dtype: str

# Output types
- conditioning
    - The output conditioning set is the result of applying the input mask and intensity to the original conditioning set. It represents the node's final contribution to the model's processing pipeline.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
```
class ConditioningSetMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning': ('CONDITIONING',), 'mask': ('MASK',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'set_cond_area': (['default', 'mask bounds'],)}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'append'
    CATEGORY = 'conditioning'

    def append(self, conditioning, mask, set_cond_area, strength):
        set_area_to_bounds = False
        if set_cond_area != 'default':
            set_area_to_bounds = True
        if len(mask.shape) < 3:
            mask = mask.unsqueeze(0)
        c = node_helpers.conditioning_set_values(conditioning, {'mask': mask, 'set_area_to_bounds': set_area_to_bounds, 'mask_strength': strength})
        return (c,)
```