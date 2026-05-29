# Documentation
- Class name: SeargeCheckpointLoader
- Category: Searge/_deprecated_/Files
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node aims to retrieve and load previously saved model checkpoints, enabling training or evaluation to resume from a specific point in time.

# Input types
## Required
- ckpt_name
    - The checkpoint name is critical for identifying the specific model state to load. It directly impacts the node's operation by determining which checkpoint to access.
    - Comfy dtype: CHECKPOINT_NAME
    - Python dtype: str

# Output types
- MODEL
    - The output model represents the state of the model at the time the checkpoint was saved, allowing further training or evaluation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - If a CLIP component exists, it provides additional context and functionality for the loaded model, enhancing its capabilities.
    - Comfy dtype: CLIP
    - Python dtype: Any
- VAE
    - If a VAE component exists, it represents the variational autoencoder associated with the checkpoint, enabling generative capabilities.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
