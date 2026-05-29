# Documentation
- Class name: APISR_ModelLoader_Zho
- Category: APISR
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR.git

APISR_ModelLoader_Zho is a node for loading and managing various image super-resolution models. It abstracts the complexity of model initialization, enabling users to seamlessly integrate different super-resolution algorithms into their applications. The node emphasizes flexibility and ease of use, providing a unified interface to handle different model architectures.

# Input types
## Required
- apisr_model
    - The apisr_model parameter is crucial for specifying the model file to load. It directs the node to the correct model architecture and weight files, allowing the node to instantiate the appropriate super-resolution generator. This parameter is essential for the node's execution and the quality of the results it produces.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- pipe
    - The output parameter 'pipe' represents the loaded super-resolution model generator. It is important because it is the node's primary output, providing users with a ready-to-use model for image upscaling tasks. The generator's performance directly affects the effectiveness of the super-resolution process.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class APISR_ModelLoader_Zho:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'apisr_model': (folder_paths.get_filename_list('apisr'),)}}
    RETURN_TYPES = ('APISRMODEL',)
    RETURN_NAMES = ('pipe',)
    FUNCTION = 'load_model'
    CATEGORY = '🔎APISR'

    def load_model(self, apisr_model):
        if not apisr_model:
            raise ValueError('Please provide the apisr_model parameter with the name of the model file.')
        apisr_path = folder_paths.get_full_path('apisr', apisr_model)
        if apisr_model == '4x_APISR_GRL_GAN_generator.pth':
            generator = load_grl(apisr_path, scale=4)
        elif apisr_model == '2x_APISR_RRDB_GAN_generator.pth':
            generator = load_rrdb(apisr_path, scale=2)
        else:
            raise gr.Error(error)
        return [generator]
```