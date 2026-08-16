# Documentation
- Class name: SamplerER_SDE
- Category: model/sampling/samplers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SamplerER_SDE is a ComfyUI node registered by `comfy_extras.nodes_custom_sampler`. The live metadata did not provide a longer description.

# Input types
## Required
- solver_type
    - The solver_type input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- max_stage
    - The max_stage input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- eta
    - Stochastic strength of SDEs.
When eta=0, they reduce to deterministic ODE.
Large eta may cause invalid outputs. If this occurs, try decreasing this value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - The s_noise input is used by this node during execution.
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
