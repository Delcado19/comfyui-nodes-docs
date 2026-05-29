# Documentation
- Class name: MiDaS_Model_Loader
- Category: WAS Suite/Loaders
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The MiDaS_Model_Loader node is responsible for loading and preparing the MiDaS model for deployment. It ensures that necessary dependencies are installed and handles downloading and loading the specified MiDaS model variant.

# Input types
## Required
- midas_model
    - The 'midas_model' parameter specifies the type of MiDaS model to load. It is critical for determining the pre-trained model weights and configuration used for depth estimation tasks.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- midas_model
    - The 'midas_model' output provides a tuple containing the loaded MiDaS model and its associated transformation functions. This output is essential for subsequent processing and analysis of depth information.
    - Comfy dtype: Tuple[torch.nn.Module, Callable]
    - Python dtype: Tuple[torch.nn.Module, Callable[[torch.Tensor], torch.Tensor]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
