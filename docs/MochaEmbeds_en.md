# Documentation
- Class name: MochaEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Input for MoCha model: https://github.com/Orange-3DV-Team/MoCha

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: WANVAE
    - Python dtype: object
- force_offload
    - The force_offload input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- input_video
    - Input video to encode
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - mask
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- ref1
    - Image to encode
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- ref2
    - Image to encode
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tiled_vae
    - Use tiled VAE encoding for reduced memory use
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
