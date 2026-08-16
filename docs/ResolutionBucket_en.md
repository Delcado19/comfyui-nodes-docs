# Documentation
- Class name: ResolutionBucket
- Category: model/training
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Group latents and conditionings into buckets

# Input types
## Required
- latents
    - List of latent dicts to bucket by resolution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- conditioning
    - List of conditioning lists (must match latents length).
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Output types
- latents
    - List of batched latent dicts, one per resolution bucket.
    - Comfy dtype: LATENT
    - Python dtype: dict
- conditioning
    - List of condition lists, one per resolution bucket.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
