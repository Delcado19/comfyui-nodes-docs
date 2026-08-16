# Documentation
- Class name: WanVideoLatentReScale
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Rescale latents to match the expected range for encoding or decoding between native ComfyUI VAE and the WanVideoWrapper VAE.

# Input types
## Required
- samples
    - The samples input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- direction
    - Direction to rescale latents, from comfy to wrapper or vice versa
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- samples
    - The samples output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
