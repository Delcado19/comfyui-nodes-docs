# Documentation
- Class name: CLIPLoader
- Category: advanced/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CLIPLoader node is designed to efficiently manage and load CLIP models of a specified type, facilitating the integration of Stable Diffusion or Stable Cascade models. It abstracts the complexity of file path management and model loading, ensuring a seamless experience for users working with CLIP models.

# Input types
## Required
- clip_name
    - The clip_name parameter is critical for identifying the specific CLIP model to load. It influences the node's execution by determining from which file path the model is retrieved, thereby affecting the outcome of the model loading process.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- type
    - The type parameter is used to specify the type of CLIP model to load, which can be 'stable_diffusion' or 'stable_cascade'. It plays an important role in the node's functionality by guiding the selection of the appropriate model type for the current task.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- CLIP
    - The output CLIP parameter represents the loaded CLIP model and is the primary result of the node's operation. It signifies that the model has been successfully loaded and is ready for subsequent tasks.
    - Comfy dtype: CLIP
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
