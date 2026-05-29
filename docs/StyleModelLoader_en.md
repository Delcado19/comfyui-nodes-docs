# Documentation
- Class name: StyleModelLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The StyleModelLoader node is designed to efficiently manage and serve style models. It is a critical component in the model deployment pipeline, ensuring that the appropriate style model is retrieved and prepared for use. The node abstracts away the complexities of file path management and model loading, providing a seamless interface for downstream tasks.

# Input types
## Required
- style_model_name
    - The parameter 'style_model_name' is essential for identifying the specific style model to load. It plays a critical role in the node's execution by guiding it to the correct file path within the style model directory. The value of this parameter directly impacts the final model loaded and used in subsequent processes.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- STYLE_MODEL
    - The output 'STYLE_MODEL' represents the loaded style model, a critical element for further processing and analysis. It encapsulates the features and parameters learned by the style model, enabling its application in various tasks such as style transfer or feature extraction.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
