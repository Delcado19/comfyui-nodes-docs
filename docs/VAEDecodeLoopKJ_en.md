# Documentation
- Class name: VAEDecodeLoopKJ
- Category: KJNodes/vae
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Video latent VAE decoding to fix artifacts on loop seams.

# Input types
## Required
- samples
    - The latent to be decoded.
    - Comfy dtype: LATENT
    - Python dtype: dict
- vae
    - The VAE model used for decoding the latent.
    - Comfy dtype: VAE
    - Python dtype: object
- overlap_latent_frames
    - Number of frames to blend for seamless loop, for Wan 2 works and HunyuanVideo 1.5 should use 4
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The decoded images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
