# Documentation
- Class name: CheckpointSave
- Category: advanced/model_merging
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CheckpointSave node is designed to facilitate saving model checkpoints. It encapsulates the process of serializing and storing the model's state (including its parameters and any associated metadata) to a file. This node is critical for model persistence, allowing training or inference to be resumed at a later time without losing progress.

# Input types
## Required
- model
    - The model parameter is essential for the CheckpointSave node because it represents the machine learning model to be saved. It influences the node's execution by determining the specific model state to be serialized and stored.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip parameter integrates the CLIP model's state into the checkpoint. It plays an important role in the node's functionality by including relevant features for model reconstruction.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- vae
    - The vae parameter specifies the variational autoencoder to be included in the checkpoint. It is important for the node because it ensures the VAE's parameters and state are included for future use.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- filename_prefix
    - The filename_prefix parameter determines the base name of the saved checkpoint file. It is important because it provides a recognizable and consistent naming convention for checkpoints, aiding organization and retrieval.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prompt
    - The optional prompt parameter can be used to include a description or annotation associated with the checkpoint. This is useful for adding context to the saved model state.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The extra_pnginfo parameter allows additional metadata to be saved alongside the checkpoint. This can include any extra information relevant to model operation or analysis.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types

# Usage tips
- Infra type: CPU

# Source code
```
class CheckpointSave:

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'vae': ('VAE',), 'filename_prefix': ('STRING', {'default': 'checkpoints/ComfyUI'})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    FUNCTION = 'save'
    OUTPUT_NODE = True
    CATEGORY = 'advanced/model_merging'

    def save(self, model, clip, vae, filename_prefix, prompt=None, extra_pnginfo=None):
        save_checkpoint(model, clip=clip, vae=vae, filename_prefix=filename_prefix, output_dir=self.output_dir, prompt=prompt, extra_pnginfo=extra_pnginfo)
        return {}
```