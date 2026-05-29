# Documentation
- Class name: InstantIDModelLoader
- Category: InstantID
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_InstantID.git

This node is designed to efficiently load and manage InstantID-specific models, ensuring that the appropriate models are retrieved and prepared for use within the system.

# Input types
## Required
- instantid_file
    - This parameter is critical for specifying the exact InstantID model file to load. It determines the identity and version of the model used in subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- INSTANTID
    - The output represents the loaded InstantID model, which is essential for the system to perform tasks related to the model's functionality.
    - Comfy dtype: DICTIONARY
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_InstantID)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
