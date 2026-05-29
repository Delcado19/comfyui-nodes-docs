# Documentation
- Class name: UNETLoader
- Category: advanced/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The `load_unet` method retrieves and loads a pretrained U-Net model from a specified directory. It is a key component in the model deployment pipeline, ensuring the correct model is loaded and ready for inference tasks.

# Input types
## Required
- unet_name
- The `unet_name` parameter is essential for identifying the specific U-Net model to load. It directs the loader to the correct file path, enabling retrieval of the required model for subsequent operations.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- MODEL
- The output of the `load_unet` method is a U-Net model represented as a PyTorch module. This model can be used for various image segmentation tasks, leveraging pretrained weights for accurate predictions.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
