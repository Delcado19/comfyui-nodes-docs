
# Documentation
- Class name: CheckpointLoaderSimple (dirty)
- Category: Bmad/api/dirty loaders
- Output node: False

The CheckpointLoaderSimple (dirty) node is designed to simplify the model checkpoint loading process in a less conventional or "dirty" way. It streamlines checkpoint loading by automatically finding and using the appropriate checkpoint file based on a given name, providing simpler and faster model initialization for various applications.

# Input types
## Required
- ckpt_name
    - The 'ckpt_name' parameter specifies the name of the checkpoint file to load. The node automates the process of finding a matching filename, making it easier to load models without specifying the exact file path.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - The 'model' output represents the model loaded from the specified checkpoint, ready for further use or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The 'clip' output provides the CLIP model associated with the loaded checkpoint (if available and requested).
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- vae
    - The 'vae' output provides the VAE model associated with the loaded checkpoint (if available and requested).
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DirtyCheckpointLoaderSimple:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"ckpt_name": ("STRING", {"default": ""})}}

    RETURN_TYPES = ("MODEL", "CLIP", "VAE")
    FUNCTION = "load_checkpoint"

    CATEGORY = "Bmad/api/dirty loaders"

    def load_checkpoint(self, ckpt_name, output_vae=True, output_clip=True):
        ckpt_name = DirtyLoaderUtils.find_matching_filename(
            ckpt_name, folder_paths.get_filename_list("checkpoints"))

        loader = nodes.CheckpointLoaderSimple()
        return loader.load_checkpoint(ckpt_name, output_vae, output_clip)

```
