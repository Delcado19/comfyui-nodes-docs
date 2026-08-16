# Documentation
- Class name: Checkpoint Loader with Name (Image Saver)
- Category: ImageSaver/utils
- Output node: False
- Repo Ref: https://github.com/alexopus/ComfyUI-Image-Saver

Loads U-Net model, CLIP model and VAE model from a checkpoint file

# Input types
## Required
- ckpt_name
    - checkpoint
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- MODEL
    - U-Net model (denoising latents)
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - CLIP (Contrastive Language-Image Pre-Training) model (encoding text prompts)
    - Comfy dtype: CLIP
    - Python dtype: object
- VAE
    - VAE (Variational autoencoder) model (latent<->pixel encoding/decoding)
    - Comfy dtype: VAE
    - Python dtype: object
- model_name
    - checkpoint name
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/alexopus/ComfyUI-Image-Saver)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
