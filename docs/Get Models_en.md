
# Documentation
- Class name: Get Models
- Category: Bmad/dump
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Get Models node retrieves and organizes model-related files from a specified directory. It supports multiple model types and configurations, allowing users to export a comprehensive list of models or specific categories as JSON files for easy access and management.

# Input types
## Required
- dump
    - Specify the model category to retrieve. This can be a specific model type such as "clip" or "vae", or "all models" to retrieve all available models. This choice determines the scope of the export operation, tailoring the output to user requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
The node has no output type.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
