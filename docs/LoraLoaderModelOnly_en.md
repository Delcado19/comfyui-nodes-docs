# Documentation
- Class name: LoraLoaderModelOnly
- Category: Model Loading
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoraLoaderModelOnly node is designed to efficiently load and integrate Lora models into existing model architectures. It enhances the capabilities of the base model by applying Lora adjustments, allowing specialized modifications without reloading the full model.

# Input types
## Required
- model
    - The 'model' parameter is critical, as it represents the base model into which Lora adjustments will be integrated. It is essential for the node's execution, as it determines the model to be modified.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- lora_name
    - The 'lora_name' parameter specifies the name of the Lora file to be loaded. It is crucial for identifying the correct Lora model to apply to the base model.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- strength_model
    - The 'strength_model' parameter allows users to control the intensity of the Lora adjustments applied to the model. It plays an important role in fine-tuning model performance.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The 'model' output represents the modified model with integrated Lora adjustments. It is the result of the node's functionality, providing a model enhanced by the specified Lora modifications.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
