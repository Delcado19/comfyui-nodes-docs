# Documentation
- Class name: WanVideoMagCache
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

MagCache for WanVideoWrapper, source https://github.com/Zehong-Ma/MagCache

# Input types
## Required
- magcache_thresh
    - How strongly to cache the output of diffusion model. This value must be non-negative.
    - Comfy dtype: FLOAT
    - Python dtype: float
- magcache_K
    - The maxium skip steps of MagCache.
    - Comfy dtype: INT
    - Python dtype: int
- start_step
    - Step to start applying MagCache
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - Step to end applying MagCache
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
