# Documentation
- Class name: WAS_Checkpoint_Loader
- Category: WAS Suite/Loaders/Advanced
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `load_checkpoint` aims to efficiently retrieve and load specified checkpoints of pre-trained models, CLIP models, and VAE models.

# Input types
## Required
- config_name
It is a key component in the initialization workflow of complex machine learning architectures and their corresponding configurations and weights.
    - Comfy dtype: str
    - Python dtype: str
- ckpt_name
The parameter `config_name` is crucial because it identifies the specific configuration settings required for the model. It ensures the correct model architecture and hyperparameters are applied during loading.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- output_vae
The flag `output_vae` determines whether the VAE component of the model should be loaded. It provides flexibility based on the specific task requirements.
    - Comfy dtype: bool
    - Python dtype: bool
- output_clip
The flag `output_clip` controls the loading of the CLIP model component. It allows selective loading based on application or analysis needs.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- MODEL
The output `MODEL` provides the loaded model architecture. It is very important as it represents the core component needed for further processing or inference.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- CLIP
The flag `CLIP` provides the CLIP model component. It is essential for tasks involving text-to-image or image-to-text functionality.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- VAE
The flag `VAE` includes the VAE component. It is critical for tasks requiring generative capabilities or potential space operations.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- NAME_STRING
The output `NAME_STRING` returns the basic name of the checkpoint without file extension. It serves as an identifier for the checkpoint in logs or records.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Checkpoint_Loader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'config_name': (comfy_paths.get_filename_list('configs'),), 'ckpt_name': (comfy_paths.get_filename_list('checkpoints'),)}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', TEXT_TYPE)
    RETURN_NAMES = ('MODEL', 'CLIP', 'VAE', 'NAME_STRING')
    FUNCTION = 'load_checkpoint'
    CATEGORY = 'WAS Suite/Loaders/Advanced'

    def load_checkpoint(self, config_name, ckpt_name, output_vae=True, output_clip=True):
        config_path = comfy_paths.get_full_path('configs', config_name)
        ckpt_path = comfy_paths.get_full_path('checkpoints', ckpt_name)
        out = comfy.sd.load_checkpoint(config_path, ckpt_path, output_vae=True, output_clip=True, embedding_directory=comfy_paths.get_folder_paths('embeddings'))
        return (out[0], out[1], out[2], os.path.splitext(os.path.basename(ckpt_name))[0])
```