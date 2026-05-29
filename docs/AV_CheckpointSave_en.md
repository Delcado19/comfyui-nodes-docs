
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
