# Documentation
- Class name: LoadOOTDPipeline
- Category: OOTD
- Output node: False
- Repo Ref: https://github.com/AuroBit/ComfyUI-OOTDiffusion.git

This node is designed to instantiate and provide access to the OOTDiffusion model, which can generate fashion-related images based on text descriptions. It abstracts the complexity of model loading and setup, ensuring the model is ready for inference tasks without requiring detailed knowledge of the underlying architecture or training process.

# Input types
## Required
- type
    - The ‘type’ parameter is crucial for determining the specific configuration of the OOTDiffusion model to load. It decides whether the model is optimized for generating images of half-body (‘Half body’) or full-body (‘Full body’) clothing. This choice significantly affects the model's performance and output quality.
    - Comfy dtype: COMBO['Half body', 'Full body']
    - Python dtype: str
- path
    - The ‘path’ parameter is essential as it points to the directory storing the OOTDiffusion model and its associated files. This includes model weights, configuration files, and any other necessary data. The correct path ensures the node can successfully load and initialize the model for image generation tasks.
    - Comfy dtype: string
    - Python dtype: str

# Output types
- pipe
    - The ‘pipe’ output is the loaded OOTDiffusion model, ready to generate fashion images. It encapsulates the model's functionality and allows seamless interaction with the rest of the system to complete various image generation tasks.
    - Comfy dtype: object
    - Python dtype: OOTDiffusion

# Usage tips
- Infra type: GPU

# Source code
```
class LoadOOTDPipeline:
    display_name = 'Load OOTDiffusion Local'

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'type': (['Half body', 'Full body'],), 'path': (['/data/app/aigc-worker-v3/models/OOTDiffusion'], {'default': '/data/app/aigc-worker-v3/models/OOTDiffusion'})}}
    RETURN_TYPES = ('MODEL',)
    RETURN_NAMES = ('pipe',)
    FUNCTION = 'load'
    CATEGORY = 'OOTD'

    @staticmethod
    def load_impl(type, path):
        if type == 'Half body':
            type = 'hd'
        elif type == 'Full body':
            type = 'dc'
        else:
            raise ValueError(f"unknown input type {type} must be 'Half body' or 'Full body'")
        if not os.path.isdir(path):
            raise ValueError(f'input path {path} is not a directory')
        return OOTDiffusion(path, model_type=type)

    def load(self, type, path):
        return (self.load_impl(type, path),)
```