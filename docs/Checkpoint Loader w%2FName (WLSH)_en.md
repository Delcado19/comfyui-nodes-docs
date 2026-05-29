# Documentation
- Class name: WLSH_Checkpoint_Loader_Model_Name
- Category: WLSH Nodes/loaders
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The WLSH_Checkpoint_Loader_Model_Name node is designed to load and manage checkpoints in workflows. It is crucial for the continuity and reproducibility of machine learning experiments, ensuring seamless integration and use of saved model states. This node abstracts the complexity of checkpoint retrieval, providing a direct interface for model, CLIP, and VAE components.

# Input types
## Required
- ckpt_name
    - The 'ckpt_name' parameter is critical for identifying the specific checkpoint to load. It directs the node to the correct file path, which is essential for successfully restoring the model state from a saved checkpoint.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- MODEL
    - The 'MODEL' output provides the loaded model state, which can be used for further processing or inference in subsequent workflow stages.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The 'CLIP' output provides contextual language embeddings from the checkpoint, enabling advanced language model functionality in applications.
    - Comfy dtype: CLIP
    - Python dtype: Any
- VAE
    - The 'VAE' output represents the variational autoencoder component retrieved from the checkpoint, which is critical for tasks involving generative models or dimensionality reduction.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- modelname
    - The 'modelname' output returns the parsed checkpoint name, which is useful for logging, identification, or as input for other nodes requiring model names.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
