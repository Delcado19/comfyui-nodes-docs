# Documentation
- Class name: WAS_Upscale_Model_Loader
- Category: WAS Suite/Loaders
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `load_model` method is responsible for loading and preparing a model for image upscaling tasks. It achieves this by locating the specified model in a designated directory, loading its parameters, and initializing it for use. This method is critical for seamlessly integrating pretrained models into the workflow, ensuring the model is ready for deployment without manual intervention.

# Input types
## Required
- model_name
    - The `model_name` parameter is essential for identifying the specific model to load. It directs the method to the correct file in the model directory, enabling retrieval and initialization of the desired model. This parameter is crucial for ensuring the correct model is used, which directly impacts subsequent upscaling performance and results.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- UPSCALE_MODEL
    - The `UPSCALE_MODEL` output represents the loaded and initialized model, ready for image upscaling tasks. It encapsulates the model's architecture and learned parameters, allowing the model to be applied to new data. This output is important as it forms the foundation for all subsequent processing and analysis involving the model.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- MODEL_NAME_TEXT
    - The `MODEL_NAME_TEXT` output provides the name of the loaded model, which is useful for logging, tracking, or user interface display purposes. It provides a human-readable identifier for the model, facilitating communication and reference throughout the application.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Upscale_Model_Loader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model_name': (comfy_paths.get_filename_list('upscale_models'),)}}
    RETURN_TYPES = ('UPSCALE_MODEL', TEXT_TYPE)
    RETURN_NAMES = ('UPSCALE_MODEL', 'MODEL_NAME_TEXT')
    FUNCTION = 'load_model'
    CATEGORY = 'WAS Suite/Loaders'

    def load_model(self, model_name):
        model_path = comfy_paths.get_full_path('upscale_models', model_name)
        sd = comfy.utils.load_torch_file(model_path)
        out = model_loading.load_state_dict(sd).eval()
        return (out, model_name)
```