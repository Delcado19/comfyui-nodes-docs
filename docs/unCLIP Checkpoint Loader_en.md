# Documentation
- Class name: WAS_unCLIP_Checkpoint_Loader
- Category: WAS Suite/Loaders
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

This node is designed to load and manage checkpoints for the WAS suite, including model, CLIP, and VAE components. It is essential for initializing the components required for further processing and analysis within the WAS framework.

# Input types
## Required
- ckpt_name
    - Checkpoint name is a required parameter that specifies the name of the checkpoint to load. This is critical for identifying and retrieving the correct checkpoint for WAS suite operations.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- output_vae
    - The 'output_vae' parameter determines whether the Variational Autoencoder (VAE) component is included in the loaded checkpoint. It affects the composition of the node's returned object.
    - Comfy dtype: bool
    - Python dtype: bool
- output_clip
    - The 'output_clip' parameter indicates whether the CLIP model should be included as part of the loaded checkpoint. It affects the node's output by including or excluding the CLIP model.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output represents the machine learning model component loaded from the checkpoint. It is important for performing tasks that require model inference or processing.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output is the loaded CLIP model component, used for text-to-image matching and other related tasks within the WAS suite.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- VAE
    - The VAE output represents the Variational Autoencoder component from the checkpoint. It is essential for tasks involving generative models and latent space manipulation.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- CLIP_VISION
    - The CLIP_VISION output is the visual component of the CLIP model, responsible for image-related operations within the WAS suite.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- NAME_STRING
    - The NAME_STRING output provides the base name of the loaded checkpoint without the file extension. It is useful for referencing and identification purposes.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
