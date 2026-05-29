# Documentation
- Class name: DiffusersLoader
- Category: advanced/loaders/deprecated
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DiffusersLoader class is designed to simplify the process of loading and initializing various components of diffusion models. It is particularly useful for integrating distinct parts such as the model itself, CLIP, and VAE from a specified path. The load_checkpoint method is the primary interface for this functionality, abstracting the complexity of file path resolution and model loading.

# Input types
## Required
- model_path
    - The model_path parameter is critical for the DiffusersLoader node, as it specifies the path where the expected model files are located. It is used to search for and load the required components of the diffusion model.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- output_vae
    - The output_vae parameter determines whether the VAE component should be loaded alongside the model. It provides flexibility in the model loading process based on the specific needs of the application.
    - Comfy dtype: bool
    - Python dtype: bool
- output_clip
    - The output_clip parameter controls the loading of the CLIP component. It allows users to specify whether the CLIP model should be part of the loaded model components.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output represents the diffusion model loaded by DiffusersLoader. It is the central component for further processing and analysis in the application.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output is the text feature extractor part of the model, which is conditionally loaded based on the output_clip parameter. It plays a key role in text-to-image generation tasks.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- VAE
    - The VAE output is the variational autoencoder component of the diffusion model, loaded based on the output_vae parameter. It is essential for tasks involving latent space manipulation.
    - Comfy dtype: comfy.sd.VAE
    - Python dtype: comfy.sd.VAE

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
