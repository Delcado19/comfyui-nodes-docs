# Documentation
- Class name: ImageOnlyCheckpointLoader
- Category: loaders/video_models
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node loads a checkpoint from a specified directory and returns the associated model, CLIP visual module, and VAE component. It handles checkpoint loading and extraction complexity, abstracts details, and provides a direct interface for downstream tasks.

# Input types
## Required
- ckpt_name
    - The name of the checkpoint file to load. It is essential for identifying the specific checkpoint in the directory, as it directly affects the node's operation and the generated model components.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- MODEL
    - Model components loaded from the checkpoint, usable for various downstream tasks such as inference or further training.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- CLIP_VISION
    - The CLIP visual module extracted from the checkpoint, crucial for tasks involving text-to-image generation or image-text matching.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
- VAE
    - The variational autoencoder (VAE) component loaded from the checkpoint, typically used for latent space manipulation and generation tasks.
    - Comfy dtype: AutoencoderKL
    - Python dtype: AutoencoderKL

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
