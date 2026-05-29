# Documentation
- Class name: SeargeUpscaleModelLoader
- Category: Searge/_deprecated_/Files
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeUpscaleModelLoader node simplifies the loading of upscaler models in image enhancement tasks. It abstracts the complexity of model loading, enabling seamless integration of upsampling functionality into larger workflows. This node is essential for applications that require high‑quality image scaling without delving into model internals.

# Input types
## Required
- upscaler_name
- The parameter 'upscaler_name' is crucial for identifying the specific upscaler model to load. It plays a central role in the node’s operation, determining which model will be used for image upsampling and directly affecting the output quality and characteristics.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- UPSCALE_MODEL
- The 'UPSCALE_MODEL' output represents the loaded upscaler model and is a fundamental component for subsequent image processing tasks. It encapsulates the model’s architecture and learned parameters, ready to be applied to image upsampling according to workflow requirements.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
