# Documentation
- Class name: VAELoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VAELoader node is designed to manage the loading and preparation of Variational Autoencoder (VAE) models. It abstracts the complexity of handling different VAE configurations and provides a unified interface for accessing these models. The node’s functionality focuses on listing available VAEs, loading them by name, and ensuring they are correctly initialized and ready for downstream tasks.

# Input types
## Required
- vae_name
    - The parameter 'vae_name' is crucial for identifying the specific VAE model to load. It determines which model configuration and weights will be used, affecting the node’s execution. This parameter is essential for ensuring the correct model is prepared for subsequent processing steps.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- VAE
    - The output parameter 'VAE' represents the loaded Variational Autoencoder model. It is important because it is the node’s primary output, encapsulating the model’s configuration and learned parameters. This output allows the model to be used in further analysis or generation tasks.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
