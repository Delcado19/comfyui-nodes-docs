# Documentation
- Class name: UpscaleModelLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The UpscaleModelLoader node is designed to efficiently manage and load upscaling models from a specified directory. It abstracts the complexity of file handling and model loading, ensuring seamless integration into the system.

# Input types
## Required
- model_name
    - The model_name parameter is essential for identifying the specific upscaling model to load. It directs the node to the correct file path and ensures the appropriate model is used in the application.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- UPSCALE_MODEL
    - The UPSCALE_MODEL output provides the loaded upscaling model for further processing or analysis. It represents the outcome of the node's operation, providing a structured model for downstream components.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
