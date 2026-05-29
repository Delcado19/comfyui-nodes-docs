# Documentation
- Class name: GLIGENLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The GLIGENLoader node is designed to efficiently load and process GLIGEN data. It plays a critical role in the data preparation stage, ensuring that GLIGEN data is correctly retrieved and made available for subsequent processing steps.

# Input types
## Required
- gligen_name
    - The 'gligen_name' parameter is essential for identifying the specific GLIGEN data to load. The node uses it to locate and retrieve the corresponding data file, which is then processed for use in the workflow.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- GLIGEN
    - The output GLIGEN data represents the information loaded and processed from the specified GLIGEN file. It is prepared for downstream tasks such as analysis or further data manipulation.
    - Comfy dtype: GLIGEN
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
