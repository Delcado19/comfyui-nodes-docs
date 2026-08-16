# Documentation
- Class name: WanVideoAddStoryMemLatents
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

WanVideo Add StoryMem Latents is a ComfyUI node registered by `custom_nodes.ComfyUI-WanVideoWrapper`. The live metadata did not provide a longer description.

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: WANVAE
    - Python dtype: object
- embeds
    - The embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- memory_images
    - The memory_images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- rope_negative_offset
    - Use positive RoPE frequency offset for the memory latents
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- rope_negative_offset_frames
    - RoPE frequency offset for the memory latents
    - Comfy dtype: INT
    - Python dtype: int

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
