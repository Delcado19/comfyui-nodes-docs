# Documentation
- Class name: LoraModelLoader
- Category: model/loaders
- Output node: False
- Repo Ref: https://github.com/huanngzh/ComfyUI-MVAdapter

This extension integrates [a/MV-Adapter](https://github.com/huanngzh/MV-Adapter) into ComfyUI, allowing users to generate multi-view consistent images from text prompts or single images directly within the ComfyUI interface.

# Input types
## Required
- model
    - The diffusion model the LoRA will be applied to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- lora
    - The LoRA model to apply to the diffusion model.
    - Comfy dtype: LORA_MODEL
    - Python dtype: object
- strength_model
    - How strongly to modify the diffusion model. This value can be negative.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bypass
    - When enabled, applies LoRA in bypass mode without modifying base model weights. Useful for training and when model weights are offloaded.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- model
    - The modified diffusion model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/huanngzh/ComfyUI-MVAdapter)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
