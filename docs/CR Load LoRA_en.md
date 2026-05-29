# Documentation
- Class name: CR_LoraLoader
- Category: Comfyroll/LoRA
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoraLoader is a node for managing and applying Lora modifications to models and clips. It loads Lora files and adjusts models and clips based on specified Lora name and strength parameters.

# Input types
## Required
- model
- Model parameter is critical for node operation because it represents the base model that Lora will modify.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
- Clip parameter is essential because it defines the clip that Lora will process and possibly modify.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- switch
- Switch parameter determines whether to apply Lora modifications to the model and clip.
    - Comfy dtype: ['On', 'Off']
    - Python dtype: str
- lora_name
- Lora name parameter is important because it identifies the Lora file to be used for modification.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- strength_model
- Model strength parameter affects the intensity of Lora's effect on the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
- Clip strength parameter controls the intensity of Lora's effect on the clip.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
- Modified model processed with the selected Lora.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
- Modified clip processed with the selected Lora.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- show_help
- String providing a link to the node's help documentation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_LoraLoader:

    def __init__(self):
        self.loaded_lora = None

    @classmethod
    def INPUT_TYPES(s):
        file_list = folder_paths.get_filename_list('loras')
        file_list.insert(0, 'None')
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'switch': (['On', 'Off'],), 'lora_name': (file_list,), 'strength_model': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'strength_clip': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'STRING')
    RETURN_NAMES = ('MODEL', 'CLIP', 'show_help')
    FUNCTION = 'load_lora'
    CATEGORY = icons.get('Comfyroll/LoRA')

    def load_lora(self, model, clip, switch, lora_name, strength_model, strength_clip):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/LoRA-Nodes#cr-load-lora'
        if strength_model == 0 and strength_clip == 0:
            return (model, clip, show_help)
        if switch == 'Off' or lora_name == 'None':
            return (model, clip, show_help)
        lora_path = folder_paths.get_full_path('loras', lora_name)
        lora = None
        if self.loaded_lora is not None:
            if self.loaded_lora[0] == lora_path:
                lora = self.loaded_lora[1]
            else:
                del self.loaded_lora
        if lora is None:
            lora = comfy.utils.load_torch_file(lora_path, safe_load=True)
            self.loaded_lora = (lora_path, lora)
        (model_lora, clip_lora) = comfy.sd.load_lora_for_models(model, clip, lora, strength_model, strength_clip)
        return (model_lora, clip_lora, show_help)
```