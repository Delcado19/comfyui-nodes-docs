# Documentation
- Class name: WAS_Checkpoint_Loader_Simple
- Category: WAS Suite/Loaders
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The load_checkpoint method efficiently retrieves and initializes components of a specified checkpoint for seamless integration in the workflow. It serves as the critical link between stored models and the application, ensuring necessary elements for subsequent operations are readily available.

# Input types
## Required
- ckpt_name
    - The checkpoint name parameter is critical for identifying the specific checkpoint to load. It guides the node to the correct file, thereby retrieving the relevant model and configuration.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- output_vae
    - The output_vae parameter determines whether to load the variational autoencoder (VAE) component from the checkpoint. It allows selective loading of components based on current task requirements.
    - Comfy dtype: bool
    - Python dtype: bool
- output_clip
    - The output_clip parameter determines whether to load the CLIP model during checkpoint retrieval. It provides flexibility to include or exclude the CLIP model among loaded components.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output represents the main neural network architecture loaded from the checkpoint, crucial for subsequent processing and analysis tasks.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output represents the conditional language-image pretrained model loaded alongside the main model, enhancing the node's ability to handle multimodal tasks.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- VAE
    - The VAE output represents the variational autoencoder component that can be retrieved, providing a powerful generative model and data encoding tool within the node's operational scope.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- NAME_STRING
    - The NAME_STRING output provides the checkpoint name as a string, useful for logging, identification, or further processing in the workflow.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Checkpoint_Loader_Simple:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (comfy_paths.get_filename_list('checkpoints'),)}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', TEXT_TYPE)
    RETURN_NAMES = ('MODEL', 'CLIP', 'VAE', 'NAME_STRING')
    FUNCTION = 'load_checkpoint'
    CATEGORY = 'WAS Suite/Loaders'

    def load_checkpoint(self, ckpt_name, output_vae=True, output_clip=True):
        ckpt_path = comfy_paths.get_full_path('checkpoints', ckpt_name)
        out = comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=comfy_paths.get_folder_paths('embeddings'))
        return (out[0], out[1], out[2], os.path.splitext(os.path.basename(ckpt_name))[0])
```