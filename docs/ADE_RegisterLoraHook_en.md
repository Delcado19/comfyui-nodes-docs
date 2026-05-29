# Register LoRA Hook 🎭🅐🅓
## Documentation
- Class name: ADE_RegisterLoraHook
- Category: Animate Diff 🎭🅐🅓/conditioning/register lora hooks
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to register LoRA hooks within the AnimateDiff framework, enabling dynamic modification of model behavior to enhance animation and image processing capabilities.

## Input types
### Required
- model
    - The model to which the LoRA hook is applied, serving as the foundation for dynamic behavior modification.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher or ModelPatcherAndInjector
- clip
    - An optional CLIP model that may be modified alongside the main model, allowing synchronized adjustments.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
- lora_name
    - The identifier of the specific LoRA hook to be applied, determining the nature of the behavior modification.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_model
    - Defines the strength of the LoRA hook's influence on the model, allowing fine-grained control over behavior modification.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - Specifies the strength of the LoRA hook's influence on the CLIP model, enabling precise adjustment of its behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- model
    - Comfy dtype: MODEL
    - The model after applying the LoRA hook, ready for enhanced animation and image processing tasks.
    - Python dtype: ModelPatcher or ModelPatcherAndInjector
- clip
    - Comfy dtype: CLIP
    - The optionally modified CLIP model, synchronized with the main model for enhanced performance.
    - Python dtype: CLIP
- lora_hook
    - Comfy dtype: LORA_HOOK
    - The registered LoRA hook, encapsulating the specified modifications, ready to be applied to the model.
    - Python dtype: LoraHookGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
