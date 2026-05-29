# Combine LoRA Hooks [2] 🎭🅐🅓
## Documentation
- Class name: ADE_CombineLoraHooks
- Category: Animate Diff 🎭🅐🅓/conditioning/combine lora hooks
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to aggregate multiple LoRA hook groups into a single unified LoRA hook group. It helps combine various LoRA hooks, integrating different modifications or enhancements provided by each individual hook to achieve more complex and nuanced model conditioning.

## Input types
### Required
### Optional
- lora_hook_A
    - Represents the first LoRA hook group to be combined. It plays a key role in the aggregation process, contributing its modifications or enhancements to the final unified LoRA hook group.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- lora_hook_B
    - Represents the second LoRA hook group to be combined. It contributes its unique modifications or enhancements to the unified LoRA hook group, enriching the overall conditional effect.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup

## Output types
- lora_hook
    - Comfy dtype: LORA_HOOK
    - Outputs a unified LoRA hook group that combines the modifications or enhancements from the input LoRA hook groups. This aggregation hook aids in achieving more complex model conditioning.
    - Python dtype: LoraHookGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
