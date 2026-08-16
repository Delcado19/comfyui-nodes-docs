# Documentation
- Class name: OviMMAudioVAELoader
- Category: WanVideoWrapper/Ovi
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Loads MMAudio VAE for Ovi audio generation

# Input types
## Required
- vae
    - MMAudio VAE 16k (v1-16.pth) model from models/vae or models/mmaudio
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- vocoder
    - BigVGAN vocoder (best_netG.pt) from models/vae or models/mmaudio
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- precision
    - The precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- mmaudio_vae
    - The mmaudio_vae output is produced by this node.
    - Comfy dtype: MMAUDIOVAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
