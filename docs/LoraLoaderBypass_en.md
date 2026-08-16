# Documentation
- Class name: LoraLoaderBypass
- Category: model/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Apply LoRA in bypass mode. Unlike regular LoRA, this doesn't modify model weights - instead it injects the LoRA computation during forward pass. Useful for training scenarios.

# Input types
## Required
- model
    - The diffusion model the LoRA will be applied to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The CLIP model the LoRA will be applied to.
    - Comfy dtype: CLIP
    - Python dtype: object
- lora_name
    - The name of the LoRA.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_model
    - How strongly to modify the diffusion model. This value can be negative.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - How strongly to modify the CLIP model. This value can be negative.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The modified diffusion model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The modified CLIP model.
    - Comfy dtype: CLIP
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
