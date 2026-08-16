# Documentation
- Class name: LowVRAMCheckpointLoader
- Category: LTXV/loaders
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Loads a diffusion model checkpoint with dependency support. Connect 'dependencies' to a previous loader's output to ensure sequential loading and reduce peak VRAM usage.

# Input types
## Required
- ckpt_name
    - The name of the checkpoint (model) to load.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- dependencies
    - Connect any output from a previous loader to ensure sequential loading.
    - Comfy dtype: *
    - Python dtype: object

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
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
