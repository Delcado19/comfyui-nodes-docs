# Documentation
- Class name: WanVideoAddSCAILReferenceEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- embeds
    - The embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- vae
    - VAE model
    - Comfy dtype: WANVAE
    - Python dtype: object
- ref_image
    - The ref_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - Strength of the reference embedding
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Start percentage of the embedding application
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - End percentage of the embedding application
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- clip_embeds
    - Clip vision encoded image
    - Comfy dtype: WANVIDIMAGE_CLIPEMBEDS
    - Python dtype: object

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
