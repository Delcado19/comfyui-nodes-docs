# Documentation
- Class name: Checkpoint Loader (LoraManager)
- Category: Lora Manager/loaders
- Output node: False
- Repo Ref: https://github.com/willmiao/ComfyUI-Lora-Manager

Revolutionize your workflow with the ultimate LoRA companion for ComfyUI!

# Input types
## Required
- ckpt_name
    - The name of the checkpoint (model) to load.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- MODEL
    - The model used for denoising latents.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP model used for encoding text prompts.
    - Comfy dtype: CLIP
    - Python dtype: object
- VAE
    - The VAE model used for encoding and decoding images to and from latent space.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/willmiao/ComfyUI-Lora-Manager)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
