# Documentation
- Class name: CR_ApplyLoRAStack
- Category: Comfyroll/LoRA
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ApplyLoRAStack node applies a series of LoRA (Low-Rank Adaptation) modifications to a model and its associated clip. It enhances the model's capability by stacking multiple LoRA adjustments, allowing fine‑tuning of specific features without significantly increasing model size or compute load.

# Input types
## Required
- model
- Model parameter is critical because it is the primary target of LoRA modifications. It forms the basis of LoRA stack operations, and each layer in the stack may alter its behavior.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
- Clip parameter is essential because it provides contextual information that complements the model, can be used with the LoRA stack, and influences the final output.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
## Optional
- lora_stack
- lora_stack parameter is a collection of LoRA configurations that determines how the model and clip are adjusted. Each element in the stack contributes to the overall transformation.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Output types
- MODEL
- Output model represents the modified version of the input model after applying the LoRA stack. It contains the enhancements made by LoRA adjustments.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
- Output clip is the modified version of the input clip, adjusted together with the model to reflect the impact of the LoRA stack.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- show_help
- show_help output provides a URL link to documentation for further assistance and understanding of the LoRA stack application process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
```
class CR_ApplyLoRAStack:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'lora_stack': ('LORA_STACK',)}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'STRING')
    RETURN_NAMES = ('MODEL', 'CLIP', 'show_help')
    FUNCTION = 'apply_lora_stack'
    CATEGORY = icons.get('Comfyroll/LoRA')

    def apply_lora_stack(self, model, clip, lora_stack=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/LoRA-Nodes#cr-apply-lora-stack'
        lora_params = list()
        if lora_stack:
            lora_params.extend(lora_stack)
        else:
            return (model, clip, show_help)
        model_lora = model
        clip_lora = clip
        for tup in lora_params:
            (lora_name, strength_model, strength_clip) = tup
            lora_path = folder_paths.get_full_path('loras', lora_name)
            lora = comfy.utils.load_torch_file(lora_path, safe_load=True)
            (model_lora, clip_lora) = comfy.sd.load_lora_for_models(model_lora, clip_lora, lora, strength_model, strength_clip)
        return (model_lora, clip_lora, show_help)
```