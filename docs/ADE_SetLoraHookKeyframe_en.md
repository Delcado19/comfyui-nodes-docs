# Set LoRA Hook Keyframes 🎭🅐🅓
## Documentation
- Class name: ADE_SetLoraHookKeyframe
- Category: Animate Diff 🎭🅐🅓/conditioning
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is used to assign a set of LoRA hook keyframes to a specific LoRA hook group. It allows customization and dynamic adjustment of LoRA hook behavior on the animation timeline, thereby precisely controlling the model's response at different stages of the animation process.

## Input types
### Required
- lora_hook
    - The LoRA hook group to which keyframes will be applied. This parameter is crucial for identifying the target hook group that will receive the new keyframe settings.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- hook_kf
    - The set of LoRA hook keyframes to be assigned to the specified LoRA hook group. This parameter defines the timing, intensity, and other characteristics of LoRA hooks on the animation timeline.
    - Comfy dtype: LORA_HOOK_KEYFRAMES
    - Python dtype: LoraHookKeyframeGroup

## Output types
- lora_hook
    - Comfy dtype: LORA_HOOK
    - The updated LoRA hook group with the new keyframe set applied. This output reflects the changes made to the LoRA hooks, including the specified keyframe settings.
    - Python dtype: LoraHookGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
