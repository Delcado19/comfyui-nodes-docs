# Documentation
- Class name: SeargeLoraLoader
- Category: Searge/_deprecated_/Files
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node facilitates loading and integrating LORA (Low-Rank Adaptation) models, which is essential for fine-tuning pretrained models to suit specific tasks or datasets. It enables users to enhance model performance by adjusting the influence of LORA layers and the CLIP model, thereby achieving customized representations for a given dataset.

# Input types
## Required
- model
    - The model parameter is critical, as it defines the foundation for LORA adaptation. It determines the model's initial understanding and capabilities before any fine-tuning is applied.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip
    - The clip parameter is essential to the entire process, representing the CLIP model component that will be combined with the LORA model to produce a synergistic effect, enhancing the overall representation and adaptability of the final model.
    - Comfy dtype: CLIP
    - Python dtype: Any
- lora_name
    - The lora_name parameter specifies the identity of the LORA layer, which is crucial for distinguishing between various LORA configurations and using the correct layer during the adaptation process.
    - Comfy dtype: LORA_NAME
    - Python dtype: str
- strength_model
    - The strength_model parameter adjusts the influence of the LORA layer on the overall model, allowing fine-tuning of the model's representation to better suit the specific characteristics of the target dataset.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - The strength_clip parameter modulates the influence of the CLIP model component, ensuring that the combination of the CLIP and LORA models is optimized for the desired outcome.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The output model represents the result of LORA and CLIP integration, providing an enhanced and adapted representation ready for further processing or evaluation.
    - Comfy dtype: MODEL
    - Python dtype: Any
- CLIP
    - The CLIP component in the output marks the successful integration with the LORA model, ensuring the model possesses the necessary capabilities to understand and generate content based on the target dataset.
    - Comfy dtype: CLIP
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeLoraLoader:

    def __init__(self):
        self.lora_loader = nodes.LoraLoader()

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'lora_name': ('LORA_NAME',), 'strength_model': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'strength_clip': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL', 'CLIP')
    FUNCTION = 'load_lora'
    CATEGORY = 'Searge/_deprecated_/Files'

    def load_lora(self, model, clip, lora_name, strength_model, strength_clip):
        return self.lora_loader.load_lora(model, clip, lora_name, strength_model, strength_clip)
```