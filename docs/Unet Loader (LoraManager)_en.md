# Documentation
- Class name: Unet Loader (LoraManager)
- Category: Lora Manager/loaders
- Output node: False
- Repo Ref: https://github.com/willmiao/ComfyUI-Lora-Manager

Revolutionize your workflow with the ultimate LoRA companion for ComfyUI!

# Input types
## Required
- unet_name
    - The name of the diffusion model to load.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_dtype
    - The dtype to use for the model weights.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- MODEL
    - The model used for denoising latents.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/willmiao/ComfyUI-Lora-Manager)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
