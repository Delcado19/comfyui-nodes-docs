# Documentation
- Class name: WAS_BLIP_Model_Loader
- Category: WAS Suite/Loaders
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_BLIP_Model_Loader node is designed to efficiently load and manage BLIP models for captioning and interrogation tasks. It ensures required packages are installed and handles retrieval and initialization of BLIP models, providing a streamlined interface for model access within the WAS suite.

# Input types
## Required
- blip_model
    - The 'blip_model' parameter is critical for specifying the BLIP model type to load. It determines whether the node initializes a model for captioning or interrogation, thereby influencing overall functionality and expected results.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- BLIP_MODEL
    - The output BLIP_MODEL represents the loaded BLIP model, ready for captioning or interrogation tasks. It encapsulates the model's functionality and is a central component for further processing within the application.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
