# Combine LoRA Hooks [8] 🎭🅐🅓
## Documentation
- Class name: ADE_CombineLoraHooksEight
- Category: Animate Diff 🎭🅐🅓/conditioning/combine lora hooks
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to combine up to eight LoRA hooks into a unified LoRA hook group. It helps integrate modifications from multiple LoRA hooks, enabling more complex and detailed adjustments to model behavior during generation tasks.

## Input types
### Required
### Optional
- lora_hook_A
    - Represents the first LoRA hook group to be combined. It plays a foundational role in the aggregation process, setting initial conditions for the combined LoRA hook group.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_B
    - Represents the second LoRA hook group to be combined. Its included modifications expand the capabilities and adjustment range of the combined LoRA hook group.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_C
    - Acts as the third LoRA hook group in the combination process, contributing additional modifications that further enrich the functionality of the combined LoRA hook group.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_D
    - Represents the fourth LoRA hook group to be combined, increasing the diversity of modifications in the combined LoRA hook group.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_E
    - Acts as the fifth LoRA hook group in the combination process, enhancing the combined LoRA hook group through finer adjustments.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_F
    - Represents the sixth LoRA hook group to be combined, broadening the range of modifications in the combined LoRA hook group.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_G
    - Acts as the seventh LoRA hook group in the combination process, adding complexity and depth to the combined LoRA hook group.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_H
    - Acts as the eighth and final LoRA hook group to be combined, completing the aggregation and maximizing modifications and adjustments in the combined LoRA hook group.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup

## Output types
- lora_hook
    - Comfy dtype: LORA_HOOK
    - The unified LoRA hook group resulting from combining up to eight LoRA hooks. This combined group can apply a comprehensive set of modifications to model behavior.
    - Python dtype: LoraHookGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
