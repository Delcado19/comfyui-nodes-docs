# Documentation
- Class name: SamplerSEEDS2
- Category: model/sampling/samplers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This sampler node can represent multiple samplers:

seeds_2
- default setting

exp_heun_2_x0
- solver_type=phi_2, r=1.0, eta=0.0

exp_heun_2_x0_sde
- solver_type=phi_2, r=1.0, eta=1.0, s_noise=1.0

# Input types
## Required
- solver_type
    - The solver_type input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- eta
    - Stochastic strength
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - SDE noise multiplier
    - Comfy dtype: FLOAT
    - Python dtype: float
- r
    - Relative step size for the intermediate stage (c2 node)
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
