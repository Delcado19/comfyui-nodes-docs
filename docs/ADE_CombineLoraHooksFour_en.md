# Combine LoRA Hooks [4] 🎭🅐🅓
## Documentation
- Class name: ADE_CombineLoraHooksFour
- Category: Animate Diff 🎭🅐🅓/conditioning/combine lora hooks
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node aims to aggregate and combine up to four LoRA hooks into a unified LoRA hook group. It helps integrate modifications from multiple LoRA hooks, allowing more complex and nuanced adjustments to model behavior within the Animate Diff framework.

## Input types
### Required
### Optional
- lora_hook_A
    - Represents the first LoRA hook group to be combined. Plays a key role in the aggregation process, contributing to the overall modifications.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_B
    - Serves as the second LoRA hook group for combination. Its included modifications allow for layering, enhancing the model's adaptability.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_C
    - The third LoRA hook group, adding another layer of customization, further optimizing model behavior.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_D
    - Represents the fourth and final LoRA hook group to be combined, completing the set of modifications, enabling comprehensive model adjustments.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup

## Output types
- lora_hook
    - Comfy dtype: LORA_HOOK
    - The unified group after combining up to four LoRA hooks. This combined hook group allows for enhanced and more complex model conditioning.
    - Python dtype: LoraHookGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class CombineLoraHookFourOptional:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
            },
            "optional": {
                "lora_hook_A": ("LORA_HOOK",),
                "lora_hook_B": ("LORA_HOOK",),
                "lora_hook_C": ("LORA_HOOK",),
                "lora_hook_D": ("LORA_HOOK",),
            }
        }

    RETURN_TYPES = ("LORA_HOOK",)
    CATEGORY = "Animate Diff 🎭🅐🅓/conditioning/combine lora hooks"
    FUNCTION = "combine_lora_hooks"

    def combine_lora_hooks(self,
                           lora_hook_A: LoraHookGroup=None, lora_hook_B: LoraHookGroup=None,
                           lora_hook_C: LoraHookGroup=None, lora_hook_D: LoraHookGroup=None,):
        candidates = [lora_hook_A, lora_hook_B, lora_hook_C, lora_hook_D]