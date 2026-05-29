
# Documentation
- Class name: CheckpointLoader (dirty)
- Category: Bmad/api/dirty loaders
- Output node: False

CheckpointLoader (dirty) node aims to load model checkpoints in a flexible way, using utility functions to find the best match for possibly mismatched or incomplete filenames. It supports loading various model components, such as configuration and weights, to facilitate recovery or continuation of model training and inference.

# Input types
## Required
- config_name
    - 'config_name' parameter specifies the model's configuration file name. It plays a crucial role in determining the model's architecture and loading parameters. The node uses utility functions to handle mismatched or missing extensions in filenames.
    - Comfy dtype: STRING
    - Python dtype: str
- ckpt_name
    - 'ckpt_name' parameter denotes the checkpoint file name that contains the model weights. This parameter is essential for identifying and loading the correct model state, and utility functions help resolve filename discrepancies.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - Represents the loaded model, whose architecture and weights have been restored, enabling further training or inference.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - Represents the loaded CLIP component of the model (if applicable and requested).
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- vae
    - Represents the loaded VAE component of the model (if applicable and requested).
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DirtyCheckpointLoader:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "config_name": ("STRING", {"default": ""}),
            "ckpt_name": ("STRING", {"default": ""})
        }}

    RETURN_TYPES = ("MODEL", "CLIP", "VAE")
    FUNCTION = "load_checkpoint"

    CATEGORY = "Bmad/api/dirty loaders"

    def load_checkpoint(self, config_name, ckpt_name, output_vae=True, output_clip=True):
        ckpt_name = DirtyLoaderUtils.find_matching_filename(
            ckpt_name, folder_paths.get_filename_list("checkpoints"))

        config_name = DirtyLoaderUtils.find_matching_filename(
            config_name, folder_paths.get_filename_list("checkpoints"))

        loader = nodes.CheckpointLoader()
        return loader.load_checkpoint(config_name, ckpt_name, output_vae, output_clip)

```
