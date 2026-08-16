# Documentation
- Class name: WanVideoAddBindweaveEmbeds
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
- reference_latents
    - Reference image to encode
    - Comfy dtype: LATENT
    - Python dtype: dict
## Optional
- ref_masks
    - Reference mask to encode
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- qwenvl_embeds_pos
    - Qwen-VL image embeddings for the reference image
    - Comfy dtype: QWENVL_EMBEDS
    - Python dtype: object
- qwenvl_embeds_neg
    - Qwen-VL image embeddings for the reference image
    - Comfy dtype: QWENVL_EMBEDS
    - Python dtype: object

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- image_embed_preview
    - The image_embed_preview output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask_preview
    - The mask_preview output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
