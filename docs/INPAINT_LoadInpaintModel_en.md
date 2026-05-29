# Documentation
- Class name: LoadInpaintModel
- Category: inpaint
- Output node: False
- Repo Ref: https://github.com/Acly/comfyui-inpaint-nodes

The LoadInpaintModel class is designed to facilitate loading inpainting models—neural network architectures specialized for filling missing or damaged parts of images. It abstracts the complexity of model loading, ensuring the process is smooth and reliable. This node's functionality is critical for initializing the inpainting process, providing a foundation for further image manipulation.

# Input types
## Required
- model_name
    - The 'model_name' parameter is important because it identifies the specific inpainting model to load. It influences the node's execution by determining the neural network architecture used for the inpainting task. The correct model name is essential for achieving the desired image restoration results.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- INPAINT_MODEL
    - The 'INPAINT_MODEL' output represents the loaded inpainting model, ready for subsequent image processing tasks. It encapsulates the model's trained weights and architecture, marking the completion of the loading process and enabling the model to perform its designated function.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class LoadInpaintModel:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model_name': (folder_paths.get_filename_list('inpaint'),)}}
    RETURN_TYPES = ('INPAINT_MODEL',)
    CATEGORY = 'inpaint'
    FUNCTION = 'load'

    def load(self, model_name: str):
        model_file = folder_paths.get_full_path('inpaint', model_name)
        if model_file is None:
            raise RuntimeError(f'Model file not found: {model_name}')
        if model_file.endswith('.pt'):
            sd = torch.jit.load(model_file, map_location='cpu').state_dict()
        else:
            sd = comfy.utils.load_torch_file(model_file, safe_load=True)
        if 'synthesis.first_stage.conv_first.conv.resample_filter' in sd:
            model = mat.load(sd)
        else:
            model = comfy_extras.chainner_models.model_loading.load_state_dict(sd)
        model = model.eval()
        return (model,)
```