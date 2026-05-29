# Documentation
- Class name: APISR_ModelLoader_Zho
- Category: APISR
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR.git

APISR_ModelLoader_Zho is a node for loading and managing various image super-resolution models. It abstracts the complexity of model initialization, enabling users to seamlessly integrate different super-resolution algorithms into their applications. The node emphasizes flexibility and ease of use, providing a unified interface to handle different model architectures.

# Input types
## Required
- apisr_model
    - The apisr_model parameter is crucial for specifying the model file to load. It directs the node to the correct model architecture and weight files, allowing the node to instantiate the appropriate super-resolution generator. This parameter is essential for the node's execution and the quality of the results it produces.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- pipe
    - The output parameter 'pipe' represents the loaded super-resolution model generator. It is important because it is the node's primary output, providing users with a ready-to-use model for image upscaling tasks. The generator's performance directly affects the effectiveness of the super-resolution process.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
