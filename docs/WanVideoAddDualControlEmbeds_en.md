# Documentation
- Class name: WanVideoAddDualControlEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

WanVideo Add Dual Control Embeds is a ComfyUI node registered by `custom_nodes.ComfyUI-WanVideoWrapper`. The live metadata did not provide a longer description.

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
- first_frame_noise_level
    - Noise level for the first frame when using previous frames
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- dense
    - Dense control signal (depth) video input
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- sparse
    - Sparse control signal (tracks) video input
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prev_images
    - Previous frames for temporal consistency, default is 8 frames
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

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
