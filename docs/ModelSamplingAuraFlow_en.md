# Documentation
- Class name: ModelSamplingAuraFlow
- Category: advanced/model
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Adjusts the shift parameter for AuraFlow model sampling, modifying the noise schedule to control generation dynamics. Commonly used with a default shift of 1.73.

# Input types
## Required
- model
    - The diffusion model to apply the shift modification to.
    - Comfy dtype: MODEL
- shift
    - Shift value for the noise schedule; typical default is 1.73.
    - Comfy dtype: FLOAT
    - Default: `1.73`

# Output types
- MODEL
    - The modified model with updated sampling parameters.
    - Comfy dtype: MODEL

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
