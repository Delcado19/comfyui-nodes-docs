# Documentation
- Class name: VAESave
- Category: advanced/model_merging
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VAESave node is responsible for saving the state of a Variational Autoencoder (VAE) model. It provides the functionality to serialize the model's state dictionary to a file, which can be used for later retrieval or deployment. This node is essential for saving the parameters of a trained model and ensuring they can be reloaded without loss of information.

# Input types
## Required
- vae
    - The 'vae' parameter is required, as it represents the Variational Autoencoder model to be saved. It is necessary for the node to run and is the primary input that determines the node's operation.
    - Comfy dtype: VAE
    - Python dtype: comfy.model_base.VAE
- filename_prefix
    - The 'filename_prefix' parameter is used to define the prefix of the output file name for saving the VAE model. It plays an important role in organizing and identifying saved model files.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prompt
    - The 'prompt' parameter, while optional, can be used to include additional context or description regarding the intended use of the model, which may be useful for future reference or metadata purposes.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows for the inclusion of additional information that can be stored alongside the model. This can be useful for adding annotations or other relevant data that may be needed.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: dict

# Output types
- output_checkpoint
    - The 'output_checkpoint' parameter represents the path to the saved model file. It marks the successful completion of the saving process and provides the location where the model can be found.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
