# Documentation
- Class name: CheckpointLoader
- Category: advanced/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CheckpointLoader node efficiently manages retrieval model checkpoints. It abstracts the complexity of locating and loading pretrained models using configuration and checkpoint filenames, ensuring the correct model state is restored for further processing or inference.

# Input types
## Required
- config_name
- The config_name parameter is essential for identifying the specific configuration associated with the desired model checkpoint. It directs the node to the correct config file, which contains the settings required for the model to function as intended.
    - Comfy dtype: str
    - Python dtype: str
- ckpt_name
- The ckpt_name parameter specifies the name of the checkpoint file to load. It is crucial for the node to locate and restore the model state saved in the specified checkpoint.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- output_vae
- The output_vae parameter determines whether to load the model's variational autoencoder (VAE) component. It provides flexibility when only a specific part of the model is needed for the task at hand.
    - Comfy dtype: bool
    - Python dtype: bool
- output_clip
- The output_clip parameter indicates whether the model's contrastive language‑image pretraining (CLIP) component should be included in the loaded checkpoint. It allows selective loading of model components based on application requirements.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- MODEL
- The MODEL output provides the loaded model checkpoint, which can be used for subsequent tasks such as inference or further training.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- CLIP
- When requested, the CLIP output provides the loaded model's contrastive language‑image pretraining component, suitable for tasks involving text and image analysis.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- VAE
- If specified, the VAE output includes the model's variational autoencoder portion, which is useful for generative tasks or dimensionality reduction.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class CheckpointLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'config_name': (folder_paths.get_filename_list('configs'),), 'ckpt_name': (folder_paths.get_filename_list('checkpoints'),)}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE')
    FUNCTION = 'load_checkpoint'
    CATEGORY = 'advanced/loaders'

    def load_checkpoint(self, config_name, ckpt_name, output_vae=True, output_clip=True):
        config_path = folder_paths.get_full_path('configs', config_name)
        ckpt_path = folder_paths.get_full_path('checkpoints', ckpt_name)
        return comfy.sd.load_checkpoint(config_path, ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
```