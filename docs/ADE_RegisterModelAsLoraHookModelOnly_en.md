# Register Model as LoRA Hook (MO) 🎭🅐🅓
## Documentation
- Class name: ADE_RegisterModelAsLoraHookModelOnly
- Category: Animate Diff 🎭🅐🅓/conditioning/register lora hooks
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is specifically used to register a model as a LoRA hook, focusing on modifying only the model. It allows the integration of LoRA (Low-Rank Adaptation) technology into a specific model, enhancing its adaptability and performance for executing particular tasks without affecting other components.

## Input types
### Required
- model
    - The model to be adapted using LoRA technology. It serves as the primary target for applying low-rank adaptation, aiming to boost its performance or adaptability for a specific task.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- ckpt_name
    - The checkpoint name from which to apply the LoRA configuration. This parameter specifies the LoRA adaptation set to use, guiding the customization of the model's behavior.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_model
    - A floating-point value that determines the strength of the LoRA adaptation on the model. It regulates the extent to which LoRA parameters influence the model's behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- model
    - Comfy dtype: MODEL
    - The model after applying the specified LoRA adaptation. This output reflects the enhanced model customized through LoRA technology.
    - Python dtype: ModelPatcher
- lora_hook
    - Comfy dtype: LORA_HOOK
    - A reference to the LoRA hook integrated into the model. This output provides access to the applied LoRA adaptation for further manipulation or analysis.
    - Python dtype: LoraHook

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
