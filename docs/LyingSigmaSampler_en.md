# Documentation
- Class name: LyingSigmaSampler
- Display name: Lying Sigma Sampler
- Category: sampling/custom_sampling
- Output node: False
- Repo Ref: https://github.com/Jonseed/ComfyUI-Detail-Daemon

Adjusts the sigma values passed to the sampler by scaling them with a dishonesty factor, effectively lying about the noise schedule for a portion of the sampling steps.

# Input types
## Required
- sampler
    - The sampling algorithm to be modified with a dishonesty factor on sigma.
    - Comfy dtype: SAMPLER
- dishonesty_factor
    - Multiplier for sigmas passed to the model. -0.05 means we reduce the sigma by 5%.
    - Comfy dtype: FLOAT
    - Default: `-0.05`
## Optional
- start_percent
    - The percentage of total steps from which the dishonesty factor begins to affect the sigmas.
    - Comfy dtype: FLOAT
    - Default: `0.1`
- end_percent
    - The percentage of total steps beyond which the dishonesty factor stops affecting the sigmas.
    - Comfy dtype: FLOAT
    - Default: `0.9`

# Output types
- SAMPLER
    - A sampler configuration with the adjusted sigma schedule based on the dishonesty factor.
    - Comfy dtype: SAMPLER

# Source code
[View source repository on GitHub](https://github.com/Jonseed/ComfyUI-Detail-Daemon)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
