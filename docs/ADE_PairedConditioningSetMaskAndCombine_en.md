# Set Props and Combine Conds 🎭🅐🅓
## Documentation
- Class name: ADE_PairedConditioningSetMaskAndCombine
- Category: Animate Diff 🎭🅐🅓/conditioning
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is specifically designed for advanced operations on paired conditional data for generative models, with a particular focus on the application and combination of masks and additional conditioning layers. It enhances or modifies existing conditions by applying masks, adjusting intensity, and integrating new conditioning elements, thereby providing more precise control over the generation process.

## Input types
### Required
- positive
    - The original positive conditioning data to be enhanced or modified.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The original negative conditioning data to be enhanced or modified.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- positive_ADD
    - Additional positive conditioning data to be combined with the original conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative_ADD
    - Additional negative conditioning data to be combined with the original conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- strength
    - A parameter defining the strength of the mask or condition modification.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - Specifies the region where the mask or modification is applied to the conditions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

### Optional
- opt_mask
    - An optional mask that can be applied to the conditioning data for selective modification.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- opt_lora_hook
    - An optional parameter that allows applying a Lora hook to the conditioning data, providing an additional transformation or control layer.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- opt_timesteps
    - Optional timestep conditioning, allowing temporal adjustments.
    - Comfy dtype: TIMESTEPS_COND
    - Python dtype: TimestepsCond

## Output types
- positive
    - Comfy dtype: CONDITIONING
    - The enhanced or modified positive conditioning data after applying masks, intensity adjustments, and combining with additional conditions.
    - Python dtype: torch.Tensor
- negative
    - Comfy dtype: CONDITIONING
    - The enhanced or modified negative conditioning data after applying masks, intensity adjustments, and combining with additional conditions.
    - Python dtype: torch.Tensor

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class PairedConditioningSetMaskAndCombineHooked:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "positive": ("CONDITIONING",),
                "negative": ("CONDITIONING",),
                "positive_ADD": ("CONDITIONING",),
                "negative_ADD": ("CONDITIONING",),
                "strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
                "set_cond_area": (COND_CONST._LIST_COND_AREA,),
            },
            "optional": {
                "opt_mask": ("MASK", ),
                "opt_lora_hook": ("LORA_HOOK",),
                "opt_timesteps": ("TIMESTEPS_COND",)
            }
        }
    
    RETURN_TYPES = ("CONDITIONING", "CONDITIONING")
    RETURN_NAMES = ("positive", "negative")
    CATEGORY = "Animate Diff 🎭🅐🅓/conditioning"
    FUNCTION = "append_and_combine"

    def append_and_combine(self, positive, negative, positive_ADD, negative_ADD,
                           strength: float, set_cond_area: str,
                           opt_mask: Tensor=None, opt_lora_hook: LoraHookGroup=None, opt_timesteps: TimestepsCond=None):
        final_positive, final_negative = set_mask_and_combine_conds(conds=[positive, negative], new_conds=[positive_ADD, negative_ADD],
                                                                    strength=strength, set_cond_area=set_cond_area,
                                                                    opt_mask=opt_mask, opt_lora_hook=opt_lora_hook, opt_timesteps=opt_timesteps)
        return (final_positive, final_negative,)