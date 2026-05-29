# Documentation
- Class name: PhotoMakerLoader
- Category: _for_testing/photomaker
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PhotoMakerLoader class is responsible for loading and initializing the PhotoMaker model, a key component in the image processing pipeline. It abstracts the complexity of model loading, ensuring the model is correctly initialized with the proper state dictionary.

# Input types
## Required
- photomaker_model_name
    - The photomaker_model_name parameter is crucial for identifying the specific model to load. It guides the loader to the correct file path and ensures the model is properly instantiated for subsequent operations.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- PHOTOMAKER
    - The PHOTOMAKER output represents the loaded PhotoMaker model, ready for use in image processing tasks. It marks the successful initialization of the model with its associated parameters and state.
    - Comfy dtype: PhotoMakerIDEncoder
    - Python dtype: PhotoMakerIDEncoder

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
