# Set CLIP LoRA Hook 🎭🅐🅓
## Documentation
- Class name: ADE_AttachLoraHookToCLIP
- Category: Animate Diff 🎭🅐🅓/conditioning
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to attach a LoRA hook to the CLIP model, enhancing its functionality by integrating additional computational layers or modifications. It serves as a customization point for the CLIP model, allowing tailored adjustments to influence the model's behavior or output.

## Input types
### Required
- clip
    - The CLIP model to which the LoRA hook will be attached. This parameter is critical as it determines the base model that will be modified.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
- lora_hook
    - The LoRA hook to be attached to the CLIP model. This hook represents the modification or enhancement to be applied, playing a key role in customizing the model's functionality.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup

## Output types
- hook_CLIP
    - Comfy dtype: CLIP
    - The modified CLIP model with the LoRA hook attached, representing an enhanced version of the original model.
    - Python dtype: CLIPWithHooks

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
