# Documentation
- Class name: LowVRAMAudioVAELoader
- Category: LTXV/loaders
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Loads an LTXV Audio VAE checkpoint with dependency support. Connect 'dependencies' to a previous loader's output to ensure sequential loading and reduce peak VRAM usage.

# Input types
## Required
- ckpt_name
    - Audio VAE checkpoint to load.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- dependencies
    - Connect any output from a previous loader to ensure sequential loading.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- audio_vae
    - The audio_vae output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
