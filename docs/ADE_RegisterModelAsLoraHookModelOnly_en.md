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
```python
class MaskableSDModelLoaderModelOnly(MaskableSDModelLoader):
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "model": ("MODEL",),
                "ckpt_name": (folder_paths.get_filename_list("checkpoints"), ),
                "strength_model": ("FLOAT", {"default": 1.0, "min": -20.0, "max": 20.0, "step": 0.01}),
            }
        }
    
    RETURN_TYPES = ("MODEL", "LORA_HOOK")
    CATEGORY = "Animate Diff 🎭🅐🅓/conditioning/register lora hooks"
    FUNCTION = "load_model_as_lora_model_only"

    def load_model_as_lora_model_only(self, model: ModelPatcher, ckpt_name: str, strength_model: float):
        model_lora, clip_lora, lora_hook = self.load_model_as_lora(model=model, clip=None, ckpt_name=ckpt_name,
                                                                   strength_model=strength_model, strength_clip=0)
        return (model_lora, lora_hook)