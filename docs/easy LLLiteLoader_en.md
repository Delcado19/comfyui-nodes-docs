# Documentation
- Class name: LLLiteLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The LLLiteLoader node aims to facilitate the integration of lightweight models, enhancing the system's overall processing capabilities by adding additional model functionality.

# Input types
## Required
- model
    - The model parameter is critical, as it defines the underlying architecture the node will use and modify, significantly influencing the node's output and behavior.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model_name
    - This parameter is essential for selecting the appropriate model from the list, guiding the node's processing based on the characteristics of the chosen model and the intended application.
    - Comfy dtype: COMBO
    - Python dtype: str
- cond_image
    - The cond_image parameter is important because it provides the contextual information the model needs to adapt its output to specific conditions, influencing the final result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
## Optional
- strength
    - The strength parameter adjusts the intensity of the model's adaptation to conditions and can be used to fine-tune the node's output to meet different requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The steps parameter defines the number of iterations the model will undergo, directly affecting the complexity and accuracy of the node's processing.
    - Comfy dtype: INT
    - Python dtype: int
- start_percent
    - This parameter sets the starting point of the model's adaptation process, influencing the initial conditions and the progression of the node's execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end_percent parameter determines the endpoint of the model's adaptation, affecting the final state and result of the node's operation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is the result of the node's processing, containing the adapted characteristics and conditions, ready for use in subsequent tasks.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class LLLiteLoader:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):

        def get_file_list(filenames):
            return [file for file in filenames if file != 'put_models_here.txt' and 'lllite' in file]
        return {'required': {'model': ('MODEL',), 'model_name': (get_file_list(folder_paths.get_filename_list('controlnet')),), 'cond_image': ('IMAGE',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'steps': ('INT', {'default': 0, 'min': 0, 'max': 200, 'step': 1}), 'start_percent': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 100.0, 'step': 0.1}), 'end_percent': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 100.0, 'step': 0.1})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'load_lllite'
    CATEGORY = 'EasyUse/Loaders'

    def load_lllite(self, model, model_name, cond_image, strength, steps, start_percent, end_percent):
        model_path = os.path.join(folder_paths.get_full_path('controlnet', model_name))
        model_lllite = model.clone()
        patch = load_control_net_lllite_patch(model_path, cond_image, strength, steps, start_percent, end_percent)
        if patch is not None:
            model_lllite.set_model_attn1_patch(patch)
            model_lllite.set_model_attn2_patch(patch)
        return (model_lllite,)
```