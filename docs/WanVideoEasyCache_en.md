# Documentation
- Class name: WanVideoEasyCache
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

EasyCache for WanVideoWrapper, source https://github.com/H-EmbodVis/EasyCache

# Input types
## Required
- easycache_thresh
    - How strongly to cache the output of diffusion model. This value must be non-negative.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_step
    - Step to start applying EasyCache
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - Step to end applying EasyCache
    - Comfy dtype: INT
    - Python dtype: int
- cache_device
    - Device to cache to
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- cache_args
    - The cache_args output is produced by this node.
    - Comfy dtype: CACHEARGS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
