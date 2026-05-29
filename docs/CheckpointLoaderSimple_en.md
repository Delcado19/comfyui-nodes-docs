# Documentation
- Class name: CheckpointLoaderSimple
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CheckpointLoaderSimple node is designed to load and manage machine learning model checkpoints. It retrieves the model's state from a specified checkpoint, ensuring the model is ready for inference or further training. This node abstracts the complexity of checkpoint loading, providing a simplified interface for model deployment and utilization.

# Input types
## Required
- ckpt_name
    - The checkpoint name is a critical parameter for the CheckpointLoaderSimple node, as it identifies the specific checkpoint to load. This parameter directly affects the node's operation by determining which model state is retrieved, influencing subsequent model performance and behavior.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- output_vae
    - The output_vae parameter indicates whether the Variational Autoencoder (VAE) should be loaded from the checkpoint. This optional parameter provides flexibility when loading necessary model components, optimizing resource usage and streamlining the loading process.
    - Comfy dtype: bool
    - Python dtype: bool
- output_clip
    - The output_clip parameter determines whether the CLIP (Contrastive Language-Image Pre-training) model should be loaded alongside the main model checkpoint. This choice can be important for applications requiring text-image pairing capabilities, enhancing the model's functionality.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output represents the loaded machine learning model. It is a critical component as it contains the model's learned parameters and architecture, enabling it to perform tasks such as classification or regression based on input data.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- CLIP
    - When requested, the CLIP output provides the Contrastive Language-Image Pre-training model capable of understanding and generating images from text descriptions. This output is important for applications involving text-to-image generation or image-text matching.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
- VAE
    - The VAE output refers to the model's Variational Autoencoder component, responsible for generating new data samples similar to the input data distribution. This is an important part for tasks requiring data generation or denoising.
    - Comfy dtype: AutoencoderKL
    - Python dtype: AutoencoderKL

# Usage tips
- Infra type: CPU

# Source code
```
class CheckpointLoaderSimple:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (folder_paths.get_filename_list('checkpoints'),)}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE')
    FUNCTION = 'load_checkpoint'
    CATEGORY = 'loaders'

    def load_checkpoint(self, ckpt_name, output_vae=True, output_clip=True):
        ckpt_path = folder_paths.get_full_path('checkpoints', ckpt_name)
        out = comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
        return out[:3]
```