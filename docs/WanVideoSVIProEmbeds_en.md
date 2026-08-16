# Documentation
- Class name: WanVideoSVIProEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

WanVideo SVIPro Embeds is a ComfyUI node registered by `custom_nodes.ComfyUI-WanVideoWrapper`. The live metadata did not provide a longer description.

# Input types
## Required
- anchor_samples
    - Initial start image encoded
    - Comfy dtype: LATENT
    - Python dtype: dict
- num_frames
    - Number of frames to encode
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- prev_samples
    - Last latent from previous generation
    - Comfy dtype: LATENT
    - Python dtype: dict
- motion_latent_count
    - Number of latents used to continue
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
