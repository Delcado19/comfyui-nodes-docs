# Documentation
- Class name: CheckpointLoaderSimpleMikey
- Category: Mikey/Loaders
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

CheckpointLoaderSimpleMikey node aims to simplify the loading and management of checkpoints in machine learning workflows. It provides a straightforward interface for retrieving model states, associated clips, and variational autoencoders (VAEs) from a specified checkpoint directory. The node also computes and returns the hash of the checkpoint file, ensuring data integrity and traceability.

# Input types
## Required
- ckpt_name
    - The 'ckpt_name' parameter is crucial for identifying the specific checkpoint to load. The node uses it to locate and access the relevant model states and configuration files in the checkpoint directory.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- output_vae
    - The 'output_vae' parameter determines whether to load the associated variational autoencoder with the checkpoint. It provides flexibility in the node's operation, allowing users to control which checkpoint components are retrieved.
    - Comfy dtype: bool
    - Python dtype: bool
- output_clip
    - The 'output_clip' parameter controls loading of the associated clip with the checkpoint. It allows the node to selectively include or exclude the clip based on user needs.
    - Comfy dtype: bool
    - Python dtype: bool
- unique_id
    - The 'unique_id' parameter serves an additional identification purpose within the node's operations. In some applications, it may be necessary to distinguish multiple checkpoints beyond their filenames, making 'unique_id' relevant.
    - Comfy dtype: str
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter is intended to provide additional information that may be needed for certain operations within the node. Its usage is optional and context‑dependent, enhancing the node's adaptability to various scenarios.
    - Comfy dtype: str
    - Python dtype: str
- prompt
    - The 'prompt' parameter is used to guide the node's behavior based on user input. It can influence how the checkpoint is processed or what information is returned, providing a degree of customization for the node's execution.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- model
    - The 'model' output represents the loaded machine learning model state from the checkpoint. It is the core component of the node's functionality, enabling the model's training process to continue or be analyzed.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The 'clip' output corresponds to the loaded clip associated with the checkpoint. It is an optional component that can be included based on the 'output_clip' parameter, providing additional context or functionality for certain applications.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- vae
    - The 'vae' output represents the variational autoencoder loaded from the checkpoint. It is an optional part of the node's outputs, controlled by the 'output_vae' parameter, and can be used for generation tasks or further analysis.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- ckpt_name
    - The 'ckpt_name' output provides the name of the loaded checkpoint file. This is useful for recording, tracking, or referencing a specific checkpoint in subsequent operations.
    - Comfy dtype: str
    - Python dtype: str
- ckpt_hash
    - The 'ckpt_hash' output is a hash derived from the checkpoint file. It serves as a unique identifier for the checkpoint, which is useful for verifying the integrity of the loaded data or for documentation purposes.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CheckpointLoaderSimpleMikey:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (folder_paths.get_filename_list('checkpoints'),)}, 'hidden': {'unique_id': 'UNIQUE_ID', 'extra_pnginfo': 'EXTRA_PNGINFO', 'prompt': 'PROMPT'}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', 'STRING', 'STRING')
    RETURN_NAMES = ('model', 'clip', 'vae', 'ckpt_name', 'ckpt_hash')
    FUNCTION = 'load_checkpoint'
    CATEGORY = 'Mikey/Loaders'

    def load_checkpoint(self, ckpt_name, output_vae=True, output_clip=True, unique_id=None, extra_pnginfo=None, prompt=None):
        ckpt_path = folder_paths.get_full_path('checkpoints', ckpt_name)
        out = comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
        hash = get_file_hash(ckpt_path)
        ckpt_name = os.path.basename(ckpt_name)
        return out[:3] + (ckpt_name, hash)
```