# Documentation
- Class name: LoraLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoraLoader node is designed to manage the loading and application of LoRA (Low-Rank Adaptation) modifications to models. It efficiently handles the integration of LoRA adjustments into both the model and clip components, allowing fine-tuning of model behavior with minimal computational overhead. The node abstracts the complexity of LoRA application, providing a streamlined interface for model enhancement.

# Input types
## Required
- model
    - The model parameter is critical as it represents the base model to be modified via LoRA techniques. Its importance lies in being the primary target of enhancement, directly affecting the node's execution and the resulting model functionality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip parameter specifies the conditioning stage model of the CLIP architecture, which may also be affected by LoRA modifications. Its role is important as it determines how textual information is jointly processed with the visual model.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- lora_name
    - The lora_name parameter identifies the specific LoRA configuration to be loaded. It is crucial as it determines the set of modifications to be applied to the model, thereby shaping the node's functionality and the model's adapted behavior.
    - Comfy dtype: folder_paths.get_filename_list('loras')
    - Python dtype: str
## Optional
- strength_model
    - The strength_model parameter adjusts the intensity of LoRA modifications applied to the model. It plays a key role in fine-tuning model behavior, providing a balance between the original model's capabilities and the adapted model's capabilities.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - The strength_clip parameter allows adjustment of the impact of LoRA modifications on the CLIP model. It is important as it controls the degree to which text information processing is affected by LoRA techniques.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model_lora
    - The model_lora output represents the model with LoRA modifications applied. It is important as it is the direct result of the node's operation, containing the enhanced capabilities of the model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip_lora
    - The clip_lora output represents the CLIP model with LoRA adjustments integrated. Its importance lies in demonstrating how text information processing has been adapted through LoRA techniques.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class LoraLoader:

    def __init__(self):
        self.loaded_lora = None

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'lora_name': (folder_paths.get_filename_list('loras'),), 'strength_model': ('FLOAT', {'default': 1.0, 'min': -20.0, 'max': 20.0, 'step': 0.01}), 'strength_clip': ('FLOAT', {'default': 1.0, 'min': -20.0, 'max': 20.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL', 'CLIP')
    FUNCTION = 'load_lora'
    CATEGORY = 'loaders'

    def load_lora(self, model, clip, lora_name, strength_model, strength_clip):
        if strength_model == 0 and strength_clip == 0:
            return (model, clip)
        lora_path = folder_paths.get_full_path('loras', lora_name)
        lora = None
        if self.loaded_lora is not None:
            if self.loaded_lora[0] == lora_path:
                lora = self.loaded_lora[1]
            else:
                temp = self.loaded_lora
                self.loaded_lora = None
                del temp
        if lora is None:
            lora = comfy.utils.load_torch_file(lora_path, safe_load=True)
            self.loaded_lora = (lora_path, lora)
        (model_lora, clip_lora) = comfy.sd.load_lora_for_models(model, clip, lora, strength_model, strength_clip)
        return (model_lora, clip_lora)
```