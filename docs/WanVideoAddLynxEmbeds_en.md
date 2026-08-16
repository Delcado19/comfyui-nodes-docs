# Documentation
- Class name: WanVideoAddLynxEmbeds
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
- ip_scale
    - Strength of the ip adapter face feature
    - Comfy dtype: FLOAT
    - Python dtype: float
- ref_scale
    - Strength of the reference feature
    - Comfy dtype: FLOAT
    - Python dtype: float
- lynx_cfg_scale
    - If above 1.0 and main cfg_scale is above 1.0, run extra pass, default value 2.0
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Start percent to apply the ref
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - End percent to apply the ref
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- vae
    - VAE model, only needed if ref_image is provided
    - Comfy dtype: WANVAE
    - Python dtype: object
- lynx_ip_embeds
    - lynx face embeddings
    - Comfy dtype: LYNXIP
    - Python dtype: object
- ref_image
    - The ref_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ref_text_embed
    - The ref_text_embed input is used by this node during execution.
    - Comfy dtype: WANVIDEOTEXTEMBEDS
    - Python dtype: object
- ref_blocks_to_use
    - Comma-separated list of block indices and ranges to use for reference feature, e.g. '0-20, 25, 28, 35-39'. If empty, use all blocks.
    - Comfy dtype: STRING
    - Python dtype: str

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
