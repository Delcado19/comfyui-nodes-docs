# Documentation
- Class name: SamplerSASolver
- Category: model/sampling/samplers
- Output node: False
- Repo Ref: https://github.com/mira-6/comfyui-sasolver

SASolver for Comfyui. Adapted from [a/comfyanonymous/ComfyUI#4454](https://github.com/comfyanonymous/ComfyUI/pull/4454) and [a/https://github.com/Koishi-Star/Euler-Smea-Dyn-Sampler](https://github.com/Koishi-Star/Euler-Smea-Dyn-Sampler)

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- eta
    - The eta input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sde_start_percent
    - The sde_start_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sde_end_percent
    - The sde_end_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - The s_noise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- predictor_order
    - The predictor_order input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- corrector_order
    - The corrector_order input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- use_pece
    - The use_pece input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- simple_order_2
    - The simple_order_2 input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- SAMPLER
    - The SAMPLER output is produced by this node.
    - Comfy dtype: SAMPLER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/mira-6/comfyui-sasolver)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
