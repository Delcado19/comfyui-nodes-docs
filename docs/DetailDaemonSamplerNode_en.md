# Documentation
- Class name: DetailDaemonSamplerNode
- Display name: Detail Daemon Sampler
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/Jonseed/ComfyUI-Detail-Daemon

This sampler wrapper works by adjusting the sigma passed to the model, while the rest of sampling stays the same.

# Input types
## Required
- sampler
    - Comfy dtype: SAMPLER
- detail_amount
    - Comfy dtype: FLOAT
    - Default: `0.1`
- start
    - Comfy dtype: FLOAT
    - Default: `0.2`
- end
    - Comfy dtype: FLOAT
    - Default: `0.8`
- bias
    - Comfy dtype: FLOAT
    - Default: `0.5`
- exponent
    - Comfy dtype: FLOAT
    - Default: `1`
- start_offset
    - Comfy dtype: FLOAT
    - Default: `0`
- end_offset
    - Comfy dtype: FLOAT
    - Default: `0`
- fade
    - Comfy dtype: FLOAT
    - Default: `0`
- smooth
    - Comfy dtype: BOOLEAN
    - Default: `true`
- cfg_scale_override
    - If set to 0, the sampler will automatically determine the CFG scale (if possible). Set to some other value to override.
    - Comfy dtype: FLOAT
    - Default: `0`

# Output types
- SAMPLER
    - Comfy dtype: SAMPLER

# Source code
[View source repository on GitHub](https://github.com/Jonseed/ComfyUI-Detail-Daemon)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
