# Documentation
- Class name: SamplerOptions_TimestepScaling
- Category: RES4LYF/legacy/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Patches ClownSampler's t_fn and sigma_fn (sigma <-> timestep) formulas to allow picking Runge-Kutta Ci values (midpoints) with different scaling.

# Input types
## Required
- sampler
    - The sampler input is used by this node during execution.
    - Comfy dtype: SAMPLER
    - Python dtype: object
- t_fn_formula
    - The t_fn_formula input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- sigma_fn_formula
    - The sigma_fn_formula input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- sampler
    - The sampler output is produced by this node.
    - Comfy dtype: SAMPLER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
