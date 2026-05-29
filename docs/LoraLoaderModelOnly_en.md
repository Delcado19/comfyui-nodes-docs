# Documentation
- Class name: LoraLoaderModelOnly
- Category: Model Loading
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoraLoaderModelOnly node is designed to efficiently load and integrate Lora models into existing model architectures. It enhances the capabilities of the base model by applying Lora adjustments, allowing specialized modifications without reloading the full model.

# Input types
## Required
- model
    - The 'model' parameter is critical, as it represents the base model into which Lora adjustments will be integrated. It is essential for the node's execution, as it determines the model to be modified.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- lora_name
    - The 'lora_name' parameter specifies the name of the Lora file to be loaded. It is crucial for identifying the correct Lora model to apply to the base model.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- strength_model
    - The 'strength_model' parameter allows users to control the intensity of the Lora adjustments applied to the model. It plays an important role in fine-tuning model performance.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The 'model' output represents the modified model with integrated Lora adjustments. It is the result of the node's functionality, providing a model enhanced by the specified Lora modifications.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class LoraLoaderModelOnly(LoraLoader):

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'lora_name': (folder_paths.get_filename_list('loras'),), 'strength_model': ('FLOAT', {'default': 1.0, 'min': -20.0, 'max': 20.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'load_lora_model_only'

    def load_lora_model_only(self, model, lora_name, strength_model):
        return (self.load_lora(model, None, lora_name, strength_model, 0)[0],)
```