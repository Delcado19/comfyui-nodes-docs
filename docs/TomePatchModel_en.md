# Documentation
- Class name: TomePatchModel
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The TomePatchModel class is designed to modify and enhance the functionality of a given model by applying patching techniques. This method called 'patch' allows customizing the model's attention mechanisms, potentially improving its performance on specific tasks without significantly altering the underlying architecture.

# Input types
## Required
- model
    - The 'model' parameter is crucial because it represents the machine learning model to be patched. The patching process customizes the model's behavior to make it more suitable for the intended application.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ratio
    - The 'ratio' parameter determines the proportion of the model's attention mechanism that is patched. It is essential for controlling the scope of modifications and balancing performance with computational efficiency.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The output 'modified_model' is the result of applying the patching process to the input model. It is important because it represents the enhanced model ready for deployment or further training.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
