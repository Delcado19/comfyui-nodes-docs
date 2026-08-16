# Documentation
- Class name: LoraLoaderBypassModelOnly
- Category: model/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Apply LoRA in bypass mode. Unlike regular LoRA, this doesn't modify model weights - instead it injects the LoRA computation during forward pass. Useful for training scenarios.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- lora_name
    - The lora_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_model
    - The strength_model input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The modified diffusion model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
