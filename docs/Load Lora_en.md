# Documentation
- Class name: WAS_Lora_Loader
- Category: WAS Suite/Loaders
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Lora_Loader node is designed to manage the loading and application of Lora models in the WAS suite. It ensures efficient processing of Lora files by caching previously loaded models, reducing redundancy and improving performance. This node is essential for integrating advanced customization features into the workflow.

# Input types
## Required
- model
    - The model parameter is crucial for the operation of the node as it represents the primary object to which the Lora enhancement will be applied. It directly affects the node's execution and the resulting model's capabilities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip parameter is essential for defining the context of the Lora model operation. It influences how the model integrates with the rest of the system, affecting the final outcome.
    - Comfy dtype: CLIP
    - Python dtype: Union[torch.Tensor, comfy.models.CLIPModel]
- lora_name
    - The lora_name parameter specifies the Lora model to load. It is a key determinant in the customization process as it decides which Lora model's functionality will be used.
    - Comfy dtype: STRING
    - Python dtype: str
- strength_model
    - The strength_model parameter adjusts the intensity of the Lora model's influence on the base model. It is a critical factor in fine-tuning the model's performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - The strength_clip parameter controls the impact of the CLIP model on the overall process. It plays a significant role in shaping the final output according to desired specifications.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The output model represents the enhanced model with Lora customization applied. It marks the completion of the node's processing and is central to subsequent steps in the workflow.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The output CLIP model reflects the adjustments made through integration with the Lora model. It is a crucial component for further processing or analysis.
    - Comfy dtype: CLIP
    - Python dtype: Union[torch.Tensor, comfy.models.CLIPModel]
- NAME_STRING
    - The NAME_STRING output provides the name of the loaded Lora model, which is useful for tracking and referencing within the system.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Lora_Loader:

    def __init__(self):
        self.loaded_lora = None

    @classmethod
    def INPUT_TYPES(s):
        file_list = comfy_paths.get_filename_list('loras')
        file_list.insert(0, 'None')
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'lora_name': (file_list,), 'strength_model': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'strength_clip': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL', 'CLIP', TEXT_TYPE)
    RETURN_NAMES = ('MODEL', 'CLIP', 'NAME_STRING')
    FUNCTION = 'load_lora'
    CATEGORY = 'WAS Suite/Loaders'

    def load_lora(self, model, clip, lora_name, strength_model, strength_clip):
        if strength_model == 0 and strength_clip == 0:
            return (model, clip)
        lora_path = comfy_paths.get_full_path('loras', lora_name)
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
        return (model_lora, clip_lora, os.path.splitext(os.path.basename(lora_name))[0])
```