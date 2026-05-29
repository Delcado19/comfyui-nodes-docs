# Register Model as LoRA Hook 🎭🅐🅓
## Documentation
- Class name: ADE_RegisterModelAsLoraHook
- Category: Animate Diff 🎭🅐🅓/conditioning/register lora hooks
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to register a model as a LoRA hook within the AnimateDiff framework, enabling dynamic modification and control of model behavior during the generation process. It integrates with the model through LoRA (Low-Rank Adaptation) technology, allowing enhanced customization and fine-tuning of model outputs based on specific conditions or inputs.

## Input types
### Required
- model
    - Represents the target model parameters to which the LoRA hook will be applied. It is crucial for defining the scope and context of the LoRA adaptation, influencing how model behavior is modified during the generation process.
    - Comfy dtype: MODEL
    - Python dtype: Union[ModelPatcher, ModelPatcherAndInjector]
- clip
    - Specifies the CLIP model involved in the process (if any), providing context in which the LoRA adaptation may be applied alongside the main model.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
- ckpt_name
    - Indicates the checkpoint name for loading the model state, which is essential for initializing the model with specific pre-trained weights or configurations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_model
    - A strength parameter that controls the intensity of the LoRA modifications applied to the model. It allows fine-tuning of the LoRA's influence on the model behavior, enabling precise adjustments to the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - Similar to strength_model, this parameter adjusts the strength of the LoRA modifications, but specifically targets the CLIP model involved in the process. It allows separate control of adaptation strength for different components of the generation framework.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- model
    - Comfy dtype: MODEL
    - The model after the LoRA hook has been applied, reflecting the dynamic adaptation specified through the input parameters.
    - Python dtype: ModelPatcher
- clip
    - Comfy dtype: CLIP
    - If a CLIP model is involved in the process, this is the CLIP model with the LoRA hook applied. It indicates that the LoRA modifications are applied to the CLIP component.
    - Python dtype: CLIP
- lora_hook
    - Comfy dtype: LORA_HOOK
    - The LoRA hook that has been registered and applied to the model and/or CLIP, encapsulating the specific adaptations made.
    - Python dtype: LoraHook

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
