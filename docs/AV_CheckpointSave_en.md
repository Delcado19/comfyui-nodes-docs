
# Documentation
- Class name: AV_CheckpointSave
- Category: Art Venture/Model Merging
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_CheckpointSave node extends the functionality of the basic checkpoint saving mechanism by adding the option to specify the data type for saving the model state. This feature is particularly useful for precision requirements in model merging scenarios within Art Venture projects.

# Input types
## Required
- model
    - The model to be saved. This is the core component of the checkpoint, encapsulating the model's state.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The CLIP model associated with the checkpoint. This parameter is crucial for ensuring the saved state includes the necessary components required for the model's functionality.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- vae
    - The VAE model to be included in the checkpoint. This is essential for capturing the full functional scope of the model, especially in generative tasks.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- filename_prefix
    - The prefix for the saved filename. This allows for organized storage and easy retrieval of saved models.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- dtype
    - Specifies the data type for the model state to be saved, with options 'float16' or 'float32'. This option controls the precision and size of the saved model, impacting storage efficiency and computational requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AVCheckpointSave(CheckpointSave):
    CATEGORY = "Art Venture/Model Merging"

    @classmethod
    def INPUT_TYPES(s):
        inputs = CheckpointSave.INPUT_TYPES()
        inputs["optional"] = {
            "dtype": (["float16", "float32"], {"default": "float16"}),
        }

        return inputs

    def save(self, *args, dtype="float16", **kwargs):
        comfy_save_checkpoint = comfy.sd.save_checkpoint

        if dtype == "float16":

            def save_checkpoint(output_path, model, clip, vae, metadata=None):
                model.model.half()
                return comfy_save_checkpoint(output_path, model, clip, vae, metadata)

            comfy.sd.save_checkpoint = save_checkpoint

        try:
            return super().save(*args, **kwargs)
        finally:
            comfy.sd.save_checkpoint = comfy_save_checkpoint

```
