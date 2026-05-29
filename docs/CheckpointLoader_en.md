# Documentation
- Class name: CheckpointLoader
- Category: advanced/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CheckpointLoader node efficiently manages retrieval model checkpoints. It abstracts the complexity of locating and loading pretrained models using configuration and checkpoint filenames, ensuring the correct model state is restored for further processing or inference.

# Input types
## Required
- config_name
- The config_name parameter is essential for identifying the specific configuration associated with the desired model checkpoint. It directs the node to the correct config file, which contains the settings required for the model to function as intended.
    - Comfy dtype: str
    - Python dtype: str
- ckpt_name
- The ckpt_name parameter specifies the name of the checkpoint file to load. It is crucial for the node to locate and restore the model state saved in the specified checkpoint.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- output_vae
- The output_vae parameter determines whether to load the model's variational autoencoder (VAE) component. It provides flexibility when only a specific part of the model is needed for the task at hand.
    - Comfy dtype: bool
    - Python dtype: bool
- output_clip
- The output_clip parameter indicates whether the model's contrastive language‑image pretraining (CLIP) component should be included in the loaded checkpoint. It allows selective loading of model components based on application requirements.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- MODEL
- The MODEL output provides the loaded model checkpoint, which can be used for subsequent tasks such as inference or further training.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- CLIP
- When requested, the CLIP output provides the loaded model's contrastive language‑image pretraining component, suitable for tasks involving text and image analysis.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- VAE
- If specified, the VAE output includes the model's variational autoencoder portion, which is useful for generative tasks or dimensionality reduction.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
