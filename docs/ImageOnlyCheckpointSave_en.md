# Documentation
- Class name: ImageOnlyCheckpointSave
- Category: _for_testing
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageOnlyCheckpointSave node is designed to simplify the process of saving image-only checkpoints. It encapsulates the workflow for saving model state, ensuring that checkpoints can be retrieved later for image generation or further processing. This node is critical for maintaining continuity of model operations and preserving model state at specific points in time.

# Input types
## Required
- model
    - The model parameter is essential for the ImageOnlyCheckpointSave node, as it represents the core component to be saved. It is the primary input that determines the execution of the node and the content of the generated checkpoint.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip_vision
    - The clip_vision parameter is a key input to the node, providing the visual component associated with the model. It is critical to the functionality of the checkpoint, ensuring that the visual aspects of the model are also preserved.
    - Comfy dtype: CLIP_VISION
    - Python dtype: comfy.sd.CLIPVision
- vae
    - The vae parameter specifies the variational autoencoder to be included in the checkpoint. It plays an important role in the node's operation, as it ensures the inclusion of the VAE state for latent reconstruction tasks.
    - Comfy dtype: VAE
    - Python dtype: AutoencoderKL
- filename_prefix
    - The filename_prefix parameter determines the prefix used when saving the checkpoint file. It is a key aspect of the node's functionality, as it allows for organization and identification of checkpoints in the file system.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prompt
    - The optional prompt parameter can be used to associate a specific prompt with the checkpoint. This is useful for recalling the context or use case of the model at the time of saving.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The extra_pnginfo parameter allows for the inclusion of additional information in the checkpoint. This is useful for storing metadata or other detailed information related to the model state.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: dict

# Output types
- checkpoint
    - The checkpoint output represents the saved state of the model, including all necessary components required for its future use. It marks the successful completion of the node's operation and the preservation of the model's state at a specific point in time.
    - Comfy dtype: CHECKPOINT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class ImageOnlyCheckpointSave(comfy_extras.nodes_model_merging.CheckpointSave):
    CATEGORY = '_for_testing'

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'clip_vision': ('CLIP_VISION',), 'vae': ('VAE',), 'filename_prefix': ('STRING', {'default': 'checkpoints/ComfyUI'})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}

    def save(self, model, clip_vision, vae, filename_prefix, prompt=None, extra_pnginfo=None):
        comfy_extras.nodes_model_merging.save_checkpoint(model, clip_vision=clip_vision, vae=vae, filename_prefix=filename_prefix, output_dir=self.output_dir, prompt=prompt, extra_pnginfo=extra_pnginfo)
        return {}
```