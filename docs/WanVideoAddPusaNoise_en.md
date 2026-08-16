# Documentation
- Class name: WanVideoAddPusaNoise
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Adds latent and timestep noise multipliers when using flowmatch_pusa

# Input types
## Required
- embeds
    - The embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- noise_multipliers
    - Noise multipliers for Pusa, can be a list of floats
    - Comfy dtype: FLOAT
    - Python dtype: float
- noisy_steps
    - Number steps to apply the extra noise
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
