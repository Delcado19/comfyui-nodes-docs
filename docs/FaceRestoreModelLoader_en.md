# Documentation
- Class name: FaceRestoreModelLoader
- Category: facerestore_cf
- Output node: False
- Repo Ref: https://github.com/mav-rik/facerestore_cf

This node aims to load and initialize a facial restoration model based on the provided model name, ensuring the appropriate model is ready for further processing in facial restoration tasks.

# Input types
## Required
- model_name
    - The model name parameter is critical, as it specifies the unique identifier of the facial restoration model to be loaded. It affects the entire loading process and the subsequent performance of the model.
    - Comfy dtype: folder_paths.get_filename_list('facerestore_models')
    - Python dtype: List[str]

# Output types
- FACERESTORE_MODEL
    - The output is the loaded facial restoration model, essential for performing high-quality facial restoration tasks.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/mav-rik/facerestore_cf)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
