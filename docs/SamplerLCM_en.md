# Documentation
- Class name: SamplerLCM
- Category: model/sampling/samplers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

LCM sampler with tunable per-step noise. s_noise is a multiplier on the model's training noise scale

# Input types
## Required
- s_noise
    - Per-step noise multiplier at the first step (1.0 = match training).
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise_end
    - Per-step noise multiplier at the last step. Set equal to s_noise for a constant schedule.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_clip_std
    - Clamp per-step noise to +/- N*std. 0 disables.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SAMPLER
    - The SAMPLER output is produced by this node.
    - Comfy dtype: SAMPLER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
