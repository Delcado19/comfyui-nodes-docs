# Documentation
- Class name: WanAnimate2Cache
- Category: model/conditioning/wan/animate
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Caches the pose-video's per-block activations so it runs once instead of on every sampling step. Roughly halves generation time Tradeoff is ~12.5 GB of system RAM at 480x832/81 frames in bf16 (scales with resolution and length). With context windows each window is cached separately, so RAM scales with the window count; use the static_standard schedule, as uniform schedules shift the windows every step and nothing ever recurs to hit the cache.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- device
    - Where to keep the cache. cpu (RAM) is the safe choice, the cache will not fit in VRAM alongside the model at typical sizes. gpu (VRAM) can be faster if it fits.
    - Comfy dtype: COMBO
    - Python dtype: object
- dtype
    - Storage precision. default stores the activations in the model's compute dtype. int8 halves the cache, int4 quarters it, convrot is used to retain accuracy.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
