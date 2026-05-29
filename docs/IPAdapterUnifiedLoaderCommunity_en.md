# Documentation
- Class name: IPAdapterUnifiedLoaderCommunity
- Category: ipadapter/loaders
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterUnifiedLoaderCommunity node aims to simplify loading and managing various models and presets in the IPAdapter framework. It provides a unified interface to access different model configurations, ensuring compatibility and ease of use across applications.

# Input types
## Required
- model
    - ‘model’ parameter is critical for the node's operation because it specifies the model to load. It directly affects the node's execution as it determines the specific model configuration to be used.
    - Comfy dtype: MODEL
    - Python dtype: str
## Optional
- preset
    - ‘preset’ parameter allows selection of a specific preset configuration from a predefined list, which can significantly affect the node's functionality and output.
    - Comfy dtype: COMBO['Composition']
    - Python dtype: str
- ipadapter
    - Optional ‘ipadapter’ parameter specifies the particular IPAdapter the node should use. It enhances the node's adaptability to different IPAdapter configurations.
    - Comfy dtype: IPADAPTER
    - Python dtype: str

# Output types

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
