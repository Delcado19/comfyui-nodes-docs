# Documentation
- Class name: unCLIPCheckpointLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The unCLIPCheckpointLoader node is designed to efficiently manage and load checkpoints for unCLIP models. It abstracts the complexity of checkpoint retrieval and ensures proper initialization of appropriate components such as the model, CLIP, and VAE from the saved state. This node plays a critical role in model deployment and inference workflows by simplifying the checkpoint loading process.

# Input types
## Required
- ckpt_name
    - The ckpt_name parameter is essential for identifying the specific checkpoint to load. It directs the node to the correct file path within the checkpoint directory, enabling retrieval of the relevant model state. This parameter is critical to the node's execution, as it determines the starting point for model restoration.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- output_vae
    - The output_vae parameter determines whether the Variational Autoencoder (VAE) component should be loaded from the checkpoint. It provides flexibility in node operation, allowing users to selectively load only the required components based on their specific use case or computational constraints.
    - Comfy dtype: bool
    - Python dtype: bool
- output_clip
    - The output_clip parameter specifies whether the CLIP component of the model should be loaded. It is an important setting for applications requiring text-to-image or image-to-text capabilities, ensuring the node can adapt to different operational needs.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output provides the model loaded from the checkpoint. It serves as the foundational output for any subsequent processing or inference tasks, acting as the core component of model functionality.
    - Comfy dtype: COMBO[str, torch.nn.Module]
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output represents the text-to-image or image-to-text component of the model, particularly useful for applications involving natural language processing and computer vision.
    - Comfy dtype: COMBO[str, torch.nn.Module]
    - Python dtype: torch.nn.Module
- VAE
    - The VAE output is the Variational Autoencoder portion of the model, responsible for generating new data samples from the learned distribution. It is a critical component for tasks requiring data generation or manipulation.
    - Comfy dtype: COMBO[str, torch.nn.Module]
    - Python dtype: torch.nn.Module
- CLIP_VISION
    - The CLIP_VISION output pertains to the visual aspect of the CLIP model, focusing on image-related functionality. It is significant for tasks specifically dealing with image processing and analysis.
    - Comfy dtype: COMBO[str, torch.nn.Module]
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class unCLIPCheckpointLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (folder_paths.get_filename_list('checkpoints'),)}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', 'CLIP_VISION')
    FUNCTION = 'load_checkpoint'
    CATEGORY = 'loaders'

    def load_checkpoint(self, ckpt_name, output_vae=True, output_clip=True):
        ckpt_path = folder_paths.get_full_path('checkpoints', ckpt_name)
        out = comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, output_clipvision=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
        return out
```